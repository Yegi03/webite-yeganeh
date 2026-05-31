"use client";

import { AnimatePresence, motion } from "motion/react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { ThemeToggle } from "@/components/ThemeToggle";
import { navItems, siteConfig } from "@/lib/site";

export function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <header
      className={`sticky top-0 z-40 border-b backdrop-blur-md transition-all ${
        scrolled
          ? "border-stone-200/80 bg-[var(--background)]/85 shadow-sm"
          : "border-transparent bg-[var(--background)]/60"
      }`}
    >
      <div className="mx-auto max-w-5xl px-6 py-4">
        <div className="flex items-center justify-between gap-4">
          <Link
            href="/"
            className="font-serif text-lg font-medium tracking-tight text-stone-900 transition-opacity hover:opacity-70"
          >
            {siteConfig.name}
          </Link>

          <div className="flex items-center gap-2">
            <ThemeToggle />
            <button
              type="button"
              onClick={() => setOpen((v) => !v)}
              aria-label="Toggle menu"
              aria-expanded={open}
              className="flex h-9 w-9 items-center justify-center rounded-full border border-stone-300 text-stone-700 transition-colors hover:bg-stone-100 sm:hidden"
            >
              <span className="relative block h-3.5 w-4">
                <motion.span
                  className="absolute left-0 top-0 h-0.5 w-full bg-current"
                  animate={open ? { rotate: 45, y: 6 } : { rotate: 0, y: 0 }}
                  transition={{ duration: 0.2 }}
                />
                <motion.span
                  className="absolute left-0 top-1.5 h-0.5 w-full bg-current"
                  animate={open ? { opacity: 0 } : { opacity: 1 }}
                  transition={{ duration: 0.2 }}
                />
                <motion.span
                  className="absolute left-0 top-3 h-0.5 w-full bg-current"
                  animate={open ? { rotate: -45, y: -6 } : { rotate: 0, y: 0 }}
                  transition={{ duration: 0.2 }}
                />
              </span>
            </button>
          </div>
        </div>

        {/* Desktop nav */}
        <nav className="mt-4 hidden flex-wrap gap-x-5 gap-y-2 text-sm sm:flex">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`relative transition-colors ${
                isActive(item.href)
                  ? "text-stone-900"
                  : "text-stone-500 hover:text-stone-900"
              }`}
            >
              {item.label}
              {isActive(item.href) && (
                <motion.span
                  layoutId="nav-underline"
                  className="absolute -bottom-1 left-0 h-0.5 w-full rounded-full bg-teal-800"
                  transition={{ type: "spring", stiffness: 400, damping: 32 }}
                />
              )}
            </Link>
          ))}
        </nav>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.nav
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25, ease: "easeInOut" }}
            className="overflow-hidden border-t border-stone-200/80 sm:hidden"
          >
            <div className="mx-auto flex max-w-5xl flex-col gap-1 px-6 py-3">
              {navItems.map((item, i) => (
                <motion.div
                  key={item.href}
                  initial={{ opacity: 0, x: -8 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.03 * i }}
                >
                  <Link
                    href={item.href}
                    className={`block rounded-md px-3 py-2 text-sm transition-colors ${
                      isActive(item.href)
                        ? "bg-stone-100 text-stone-900"
                        : "text-stone-600 hover:bg-stone-100 hover:text-stone-900"
                    }`}
                  >
                    {item.label}
                  </Link>
                </motion.div>
              ))}
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}
