import type { Metadata } from "next";
import { CollectionList } from "@/components/CollectionList";
import { getCollection } from "@/lib/content";

export const metadata: Metadata = {
  title: "Projects & Experiments",
  description: "Things I've built and tinkered with.",
};

export default function ProjectsPage() {
  const items = getCollection("projects");

  return (
    <div className="mx-auto max-w-3xl px-6 py-16">
      <h1 className="font-serif text-3xl font-medium text-stone-900">
        Projects &amp; Experiments
      </h1>
      <p className="mt-3 text-lg text-stone-600">
        Things I&apos;ve built, prototypes, and experiments in progress.
      </p>
      <div className="mt-12">
        <CollectionList
          items={items}
          basePath="/projects"
          emptyText="Projects coming soon."
        />
      </div>
    </div>
  );
}
