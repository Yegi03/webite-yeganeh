"use client";

import { motion } from "motion/react";
import Link from "next/link";

const cards = [
  { href: "/projects", label: "Projects & Experiments" },
  { href: "/publications", label: "Publications" },
  { href: "/models", label: "Models, Math & Messy Data" },
  { href: "/resources", label: "Interesting Resources" },
  { href: "/notes", label: "Brain Notes & Memory Drawer" },
  { href: "/now", label: "Current Obsessions" },
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
            className="group flex items-center justify-between rounded-xl border border-stone-200 px-5 py-4 text-stone-800 transition-colors hover:border-teal-800/40 hover:bg-stone-50"
          >
            <span>{card.label}</span>
            <span className="text-teal-800 opacity-0 transition-opacity group-hover:opacity-100">
              →
            </span>
          </Link>
        </motion.div>
      ))}
    </motion.div>
  );
}
