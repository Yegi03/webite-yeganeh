import { siteConfig } from "@/lib/site";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="mt-auto border-t border-stone-200/80">
      <div className="mx-auto flex max-w-3xl flex-col gap-3 px-6 py-8 text-sm text-stone-500 sm:flex-row sm:items-center sm:justify-between">
        <p>
          © {year} {siteConfig.author}
        </p>
        <div className="flex gap-4">
          <a
            href={siteConfig.links.github}
            className="transition-colors hover:text-stone-800"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </a>
          <a
            href={siteConfig.links.scholar}
            className="transition-colors hover:text-stone-800"
            target="_blank"
            rel="noopener noreferrer"
          >
            Scholar
          </a>
          <a
            href={siteConfig.links.linkedin}
            className="transition-colors hover:text-stone-800"
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn
          </a>
          <a
            href={siteConfig.links.email}
            className="transition-colors hover:text-stone-800"
          >
            Email
          </a>
        </div>
      </div>
    </footer>
  );
}
