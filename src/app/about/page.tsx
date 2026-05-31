import type { Metadata } from "next";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "About Me",
  description: `About ${siteConfig.author}`,
};

export default function AboutPage() {
  return (
    <div className="mx-auto max-w-3xl px-6 py-16">
      <h1 className="font-serif text-3xl font-medium text-stone-900">
        About Me
      </h1>
      <div className="mt-8 space-y-5 text-lg leading-relaxed text-stone-600">
        <p>
          I&apos;m {siteConfig.author}. I use this site to share research,
          writing, and projects I&apos;m working on.
        </p>
        <p>
          Edit this page in{" "}
          <code className="rounded bg-stone-100 px-1.5 py-0.5 text-sm text-stone-800">
            src/app/about/page.tsx
          </code>{" "}
          with your bio, background, and what you&apos;re focused on right now.
        </p>
        <p>
          You can also add a photo, link to your CV, and update your social
          links in{" "}
          <code className="rounded bg-stone-100 px-1.5 py-0.5 text-sm text-stone-800">
            src/lib/site.ts
          </code>
          .
        </p>
      </div>

      <div className="mt-12">
        <h2 className="font-serif text-xl font-medium text-stone-900">
          Connect
        </h2>
        <ul className="mt-4 space-y-2 text-stone-600">
          <li>
            <a
              href={siteConfig.links.email}
              className="text-teal-800 hover:underline"
            >
              yeganeh.ab03@gmail.com
            </a>{" "}
            (
            <a
              href={siteConfig.links.emailAlt}
              className="text-teal-800 hover:underline"
            >
              yegi@msu.edu
            </a>
            )
          </li>
          <li>
            <a
              href={siteConfig.links.github}
              className="text-teal-800 hover:underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub
            </a>
          </li>
          <li>
            <a
              href={siteConfig.links.scholar}
              className="text-teal-800 hover:underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              Google Scholar
            </a>
          </li>
          <li>
            <a
              href={siteConfig.links.linkedin}
              className="text-teal-800 hover:underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}
