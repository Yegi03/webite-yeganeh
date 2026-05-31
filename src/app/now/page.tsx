import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Current Obsessions",
  description: "What I'm focused on, learning, and excited about right now.",
};

export default function NowPage() {
  return (
    <div className="mx-auto max-w-3xl px-6 py-16">
      <h1 className="font-serif text-3xl font-medium text-stone-900">
        Current Obsessions
      </h1>
      <p className="mt-3 text-lg text-stone-600">
        What I&apos;m focused on, learning, and excited about right now.
      </p>

      <div className="mt-10 space-y-8">
        <section>
          <h2 className="font-serif text-xl font-medium text-stone-900">
            Learning
          </h2>
          <ul className="mt-3 list-disc space-y-1 pl-5 text-stone-600">
            <li>Something you&apos;re learning.</li>
          </ul>
        </section>
        <section>
          <h2 className="font-serif text-xl font-medium text-stone-900">
            Building
          </h2>
          <ul className="mt-3 list-disc space-y-1 pl-5 text-stone-600">
            <li>Something you&apos;re building.</li>
          </ul>
        </section>
        <section>
          <h2 className="font-serif text-xl font-medium text-stone-900">
            Reading
          </h2>
          <ul className="mt-3 list-disc space-y-1 pl-5 text-stone-600">
            <li>Something you&apos;re reading.</li>
          </ul>
        </section>
      </div>

      <p className="mt-12 text-sm text-stone-500">
        Inspired by the{" "}
        <a
          href="https://nownownow.com/about"
          className="text-teal-800 hover:underline"
          target="_blank"
          rel="noopener noreferrer"
        >
          /now page
        </a>{" "}
        movement. Update it whenever your focus shifts.
      </p>
    </div>
  );
}
