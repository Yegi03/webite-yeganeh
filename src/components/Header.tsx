import Link from "next/link";
import { navItems, siteConfig } from "@/lib/site";

export function Header() {
  return (
    <header className="border-b border-stone-200/80 bg-[var(--background)]/90 backdrop-blur-sm">
      <div className="mx-auto max-w-5xl px-6 py-5">
        <div className="flex items-center justify-between gap-4">
          <Link
            href="/"
            className="font-serif text-lg font-medium tracking-tight text-stone-900 transition-opacity hover:opacity-70"
          >
            {siteConfig.name}
          </Link>

          {/* Mobile disclosure menu (no JS needed) */}
          <details className="relative sm:hidden">
            <summary className="cursor-pointer list-none rounded-md border border-stone-300 px-3 py-1.5 text-sm text-stone-700 [&::-webkit-details-marker]:hidden">
              Menu
            </summary>
            <nav className="absolute right-0 z-20 mt-2 w-64 rounded-lg border border-stone-200 bg-[var(--background)] p-2 shadow-lg">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="block rounded-md px-3 py-2 text-sm text-stone-700 transition-colors hover:bg-stone-100 hover:text-stone-900"
                >
                  {item.label}
                </Link>
              ))}
            </nav>
          </details>
        </div>

        {/* Desktop nav (wraps to multiple rows) */}
        <nav className="mt-4 hidden flex-wrap gap-x-5 gap-y-2 text-sm text-stone-600 sm:flex">
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
