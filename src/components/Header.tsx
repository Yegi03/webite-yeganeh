import Link from "next/link";
import { navItems, siteConfig } from "@/lib/site";

export function Header() {
  return (
    <header className="border-b border-stone-200/80 bg-[var(--background)]/90 backdrop-blur-sm">
      <div className="mx-auto flex max-w-3xl items-center justify-between px-6 py-5">
        <Link
          href="/"
          className="font-serif text-lg font-medium tracking-tight text-stone-900 transition-opacity hover:opacity-70"
        >
          {siteConfig.name}
        </Link>
        <nav className="flex gap-6 text-sm text-stone-600">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="transition-colors hover:text-stone-900"
            >
              {item.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
