import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Research I'm Chasing",
  description: "The questions and directions I'm currently exploring.",
};

export default function ResearchPage() {
  return (
    <div className="mx-auto max-w-3xl px-6 py-16">
      <h1 className="font-serif text-3xl font-medium text-stone-900">
        Research I&apos;m Chasing
      </h1>
      <div className="mt-8 space-y-5 text-lg leading-relaxed text-stone-600">
        <p>
          This is where I describe the questions I&apos;m currently chasing —
          the problems that keep me up at night and the directions I&apos;m
          excited about.
        </p>
        <p>
          Edit this page in{" "}
          <code className="rounded bg-stone-100 px-1.5 py-0.5 text-sm text-stone-800">
            src/app/research/page.tsx
          </code>{" "}
          to describe your research interests and ongoing work.
        </p>
      </div>

      <div className="mt-12 space-y-6">
        <div>
          <h2 className="font-serif text-xl font-medium text-stone-900">
            Themes
          </h2>
          <ul className="mt-3 list-disc space-y-1 pl-5 text-stone-600">
            <li>Theme one — a sentence about what and why.</li>
            <li>Theme two — a sentence about what and why.</li>
            <li>Theme three — a sentence about what and why.</li>
          </ul>
        </div>
        <p className="text-stone-600">
          For formal outputs, see{" "}
          <Link href="/publications" className="text-teal-800 hover:underline">
            Publications
          </Link>
          . For things I&apos;m building, see{" "}
          <Link href="/projects" className="text-teal-800 hover:underline">
            Projects &amp; Experiments
          </Link>
          .
        </p>
      </div>
    </div>
  );
}
