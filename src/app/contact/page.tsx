import type { Metadata } from "next";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact",
  description: `Get in touch with ${siteConfig.author}.`,
};

export default function ContactPage() {
  return (
    <div className="mx-auto max-w-3xl px-6 py-16">
      <h1 className="font-serif text-3xl font-medium text-stone-900">
        Contact
      </h1>
      <p className="mt-3 text-lg text-stone-600">
        The best way to reach me is by email. I&apos;m also on the platforms
        below.
      </p>

      <ul className="mt-10 space-y-4 text-stone-600">
        <li>
          <span className="text-sm uppercase tracking-wide text-stone-400">
            Email
          </span>
          <div>
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
          </div>
        </li>
        <li>
          <span className="text-sm uppercase tracking-wide text-stone-400">
            LinkedIn
          </span>
          <div>
            <a
              href={siteConfig.links.linkedin}
              className="text-teal-800 hover:underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              Yeganeh Abdollahinejad
            </a>
          </div>
        </li>
        <li>
          <span className="text-sm uppercase tracking-wide text-stone-400">
            Google Scholar
          </span>
          <div>
            <a
              href={siteConfig.links.scholar}
              className="text-teal-800 hover:underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              Scholar profile
            </a>
          </div>
        </li>
        <li>
          <span className="text-sm uppercase tracking-wide text-stone-400">
            GitHub
          </span>
          <div>
            <a
              href={siteConfig.links.github}
              className="text-teal-800 hover:underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              github.com/Yegi03
            </a>
          </div>
        </li>
      </ul>
    </div>
  );
}
