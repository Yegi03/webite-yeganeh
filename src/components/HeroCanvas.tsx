"use client";

import { useEffect, useRef } from "react";

type Node = {
  x: number;
  y: number;
  vx: number;
  vy: number;
};

/**
 * Animated neural-constellation: drifting nodes connected by lines that
 * brighten with proximity, and a cursor that nudges nearby nodes. Theme-aware
 * (reads --accent) and disabled for prefers-reduced-motion.
 */
export function HeroCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const context = canvas.getContext("2d");
    if (!context) return;
    const cv: HTMLCanvasElement = canvas;
    const ctx: CanvasRenderingContext2D = context;

    const reduce = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    let width = 0;
    let height = 0;
    let dpr = Math.min(window.devicePixelRatio || 1, 2);
    let nodes: Node[] = [];
    let raf = 0;
    const mouse = { x: -9999, y: -9999 };

    const accent = () => {
      const v = getComputedStyle(document.documentElement)
        .getPropertyValue("--accent")
        .trim();
      return v || "#0f766e";
    };
    let color = accent();

    function resize() {
      const parent = cv.parentElement;
      if (!parent) return;
      width = parent.clientWidth;
      height = parent.clientHeight;
      dpr = Math.min(window.devicePixelRatio || 1, 2);
      cv.width = width * dpr;
      cv.height = height * dpr;
      cv.style.width = `${width}px`;
      cv.style.height = `${height}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

      const density = Math.round((width * height) / 16000);
      const count = Math.max(24, Math.min(90, density));
      nodes = Array.from({ length: count }, () => ({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.35,
        vy: (Math.random() - 0.5) * 0.35,
      }));
      color = accent();
    }

    function toRgba(hex: string, alpha: number) {
      // accept #rgb / #rrggbb
      let h = hex.replace("#", "");
      if (h.length === 3) {
        h = h
          .split("")
          .map((c) => c + c)
          .join("");
      }
      const r = parseInt(h.slice(0, 2), 16) || 15;
      const g = parseInt(h.slice(2, 4), 16) || 118;
      const b = parseInt(h.slice(4, 6), 16) || 110;
      return `rgba(${r}, ${g}, ${b}, ${alpha})`;
    }

    const LINK_DIST = 130;

    function frame() {
      ctx.clearRect(0, 0, width, height);

      for (const n of nodes) {
        // cursor influence
        const dx = n.x - mouse.x;
        const dy = n.y - mouse.y;
        const d2 = dx * dx + dy * dy;
        if (d2 < 140 * 140 && d2 > 0.01) {
          const f = (1 - Math.sqrt(d2) / 140) * 0.6;
          n.vx += (dx / Math.sqrt(d2)) * f * 0.4;
          n.vy += (dy / Math.sqrt(d2)) * f * 0.4;
        }

        n.x += n.vx;
        n.y += n.vy;
        // gentle damping + drift cap
        n.vx *= 0.99;
        n.vy *= 0.99;
        const speed = Math.hypot(n.vx, n.vy);
        if (speed < 0.05) {
          n.vx += (Math.random() - 0.5) * 0.05;
          n.vy += (Math.random() - 0.5) * 0.05;
        }

        if (n.x < 0 || n.x > width) n.vx *= -1;
        if (n.y < 0 || n.y > height) n.vy *= -1;
        n.x = Math.max(0, Math.min(width, n.x));
        n.y = Math.max(0, Math.min(height, n.y));
      }

      // links
      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          const a = nodes[i];
          const b = nodes[j];
          const dx = a.x - b.x;
          const dy = a.y - b.y;
          const dist = Math.hypot(dx, dy);
          if (dist < LINK_DIST) {
            const alpha = (1 - dist / LINK_DIST) * 0.5;
            ctx.strokeStyle = toRgba(color, alpha);
            ctx.lineWidth = 1;
            ctx.beginPath();
            ctx.moveTo(a.x, a.y);
            ctx.lineTo(b.x, b.y);
            ctx.stroke();
          }
        }
      }

      // nodes
      for (const n of nodes) {
        ctx.fillStyle = toRgba(color, 0.8);
        ctx.beginPath();
        ctx.arc(n.x, n.y, 1.8, 0, Math.PI * 2);
        ctx.fill();
      }

      raf = requestAnimationFrame(frame);
    }

    function onMove(e: MouseEvent) {
      const rect = cv.getBoundingClientRect();
      mouse.x = e.clientX - rect.left;
      mouse.y = e.clientY - rect.top;
    }
    function onLeave() {
      mouse.x = -9999;
      mouse.y = -9999;
    }

    resize();

    if (reduce) {
      // static single frame, no animation loop
      ctx.clearRect(0, 0, width, height);
      for (const n of nodes) {
        ctx.fillStyle = toRgba(color, 0.6);
        ctx.beginPath();
        ctx.arc(n.x, n.y, 1.8, 0, Math.PI * 2);
        ctx.fill();
      }
      return;
    }

    window.addEventListener("resize", resize);
    window.addEventListener("mousemove", onMove);
    window.addEventListener("mouseout", onLeave);

    // re-read accent if theme toggles
    const observer = new MutationObserver(() => {
      color = accent();
    });
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["class"],
    });

    raf = requestAnimationFrame(frame);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", resize);
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("mouseout", onLeave);
      observer.disconnect();
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      className="absolute inset-0 h-full w-full opacity-70"
    />
  );
}
