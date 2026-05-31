import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Interesting Resources",
  description: "Papers, tools, books, and links worth sharing.",
};

const resources = [
  {
    category: "Papers & Reading",
    items: [
      { label: "Add a paper or article", href: "#" },
      { label: "Add another", href: "#" },
    ],
  },
  {
    category: "Tools",
    items: [{ label: "A tool you love", href: "#" }],
  },
  {
    category: "Books",
    items: [{ label: "A book worth reading", href: "#" }],
  },
];

export default function ResourcesPage() {
  return (
    <div className="mx-auto max-w-3xl px-6 py-16">
      <h1 className="font-serif text-3xl font-medium text-stone-900">
        Interesting Resources
      </h1>
      <p className="mt-3 text-lg text-stone-600">
        A growing collection of papers, tools, books, and links I find worth
        sharing.
      </p>

      <div className="mt-12 space-y-10">
        {resources.map((group) => (
          <section key={group.category}>
            <h2 className="font-serif text-xl font-medium text-stone-900">
              {group.category}
            </h2>
            <ul className="mt-3 space-y-2">
              {group.items.map((item) => (
                <li key={item.label}>
                  <a
                    href={item.href}
                    className="text-teal-800 hover:underline"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </section>
        ))}
      </div>

      <p className="mt-12 text-sm text-stone-500">
        Edit this list in{" "}
        <code className="rounded bg-stone-100 px-1.5 py-0.5 text-stone-700">
          src/app/resources/page.tsx
        </code>
        .
      </p>
    </div>
  );
}
