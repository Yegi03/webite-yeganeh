"use client";

import { motion, useMotionTemplate, useMotionValue, useSpring } from "motion/react";
import type { ReactNode } from "react";

/**
 * Card that tracks the cursor: a radial "spotlight" glow follows the pointer
 * and the card tilts subtly in 3D toward it.
 */
export function SpotlightCard({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  const mx = useMotionValue(0);
  const my = useMotionValue(0);

  const rx = useSpring(useMotionValue(0), { stiffness: 250, damping: 20 });
  const ry = useSpring(useMotionValue(0), { stiffness: 250, damping: 20 });

  const glow = useMotionTemplate`radial-gradient(220px circle at ${mx}px ${my}px, color-mix(in oklab, var(--accent) 16%, transparent), transparent 70%)`;

  function handleMove(e: React.MouseEvent<HTMLDivElement>) {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    mx.set(x);
    my.set(y);
    const px = x / rect.width - 0.5;
    const py = y / rect.height - 0.5;
    ry.set(px * 6);
    rx.set(-py * 6);
  }

  function handleLeave() {
    rx.set(0);
    ry.set(0);
  }

  return (
    <motion.div
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
      style={{ rotateX: rx, rotateY: ry, transformPerspective: 800 }}
      whileHover={{ y: -3 }}
      className={`group relative overflow-hidden rounded-xl border border-stone-200 transition-colors hover:border-teal-800/40 ${className}`}
    >
      <motion.div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        style={{ background: glow }}
      />
      <div className="relative">{children}</div>
    </motion.div>
  );
}
