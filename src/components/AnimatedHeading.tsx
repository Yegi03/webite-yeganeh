"use client";

import { motion } from "motion/react";

/** Renders text with a word-by-word staggered rise-in on mount. */
export function AnimatedHeading({
  text,
  className = "",
}: {
  text: string;
  className?: string;
}) {
  const words = text.split(" ");
  return (
    <motion.h1
      className={className}
      initial="hidden"
      animate="show"
      variants={{
        hidden: {},
        show: { transition: { staggerChildren: 0.08, delayChildren: 0.05 } },
      }}
    >
      {words.map((word, i) => (
        <span key={`${word}-${i}`} className="inline-block overflow-hidden">
          <motion.span
            className="inline-block"
            variants={{
              hidden: { y: "100%", opacity: 0 },
              show: { y: "0%", opacity: 1 },
            }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          >
            {word}
            {i < words.length - 1 ? "\u00A0" : ""}
          </motion.span>
        </span>
      ))}
    </motion.h1>
  );
}
