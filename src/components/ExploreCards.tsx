"use client";

import { motion } from "motion/react";
import Link from "next/link";

const cards = [
  {
    href: "/projects",
    label: "Projects & Experiments",
    description: "Code, models, and things I've built and broken.",
  },
  {
    href: "/publications",
    label: "Publications",
    description: "Peer-reviewed and preprint research.",
  },
  {
    href: "/models",
    label: "Models, Math & Messy Data",
    description: "Notebooks, derivations, and analysis write-ups.",
  },
  {
    href: "/resources",
    label: "Interesting Resources",
    description: "Papers, tools, and links worth keeping.",
  },
  {
    href: "/notes",
    label: "Brain Notes & Memory Drawer",
    description: "Half-formed thoughts and things I'm learning.",
  },
  {
    href: "/now",
    label: "Current Obsessions",
    description: "What I'm reading, building, and chasing right now.",
  },
];

export function ExploreCards() {
  return (
    <motion.div
      className="mt-6 grid gap-4 sm:grid-cols-2"
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "-60px" }}
      variants={{
        hidden: {},
        show: { transition: { staggerChildren: 0.06 } },
      }}
    >
      {cards.map((card) => (
        <motion.div
          key={card.href}
          variants={{
            hidden: { opacity: 0, y: 16 },
            show: { opacity: 1, y: 0 },
          }}
          transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
          whileHover={{ y: -3 }}
        >
          <Link
            href={card.href}
            className="group flex h-full flex-col rounded-xl border border-stone-200 p-5 transition-colors hover:border-teal-800/40 hover:bg-stone-50"
          >
            <div className="flex items-center justify-between gap-3">
              <span className="font-medium text-stone-900">{card.label}</span>
              <span className="text-teal-800 transition-transform group-hover:translate-x-0.5">
                →
              </span>
            </div>
            <span className="mt-1.5 text-sm leading-relaxed text-stone-500">
              {card.description}
            </span>
          </Link>
        </motion.div>
      ))}
    </motion.div>
  );
}
