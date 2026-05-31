import type { Metadata } from "next";
import { CollectionList } from "@/components/CollectionList";
import { getCollection } from "@/lib/content";

export const metadata: Metadata = {
  title: "Brain Notes & Memory Drawer",
  description: "Half-formed ideas, notes, and things I'm thinking about.",
};

export default function NotesPage() {
  const items = getCollection("notes");

  return (
    <div className="mx-auto max-w-3xl px-6 py-16">
      <h1 className="font-serif text-3xl font-medium text-stone-900">
        Brain Notes &amp; Memory Drawer
      </h1>
      <p className="mt-3 text-lg text-stone-600">
        Half-formed ideas, notes to myself, and things I&apos;m thinking
        through.
      </p>
      <div className="mt-12">
        <CollectionList
          items={items}
          basePath="/notes"
          emptyText="Notes coming soon."
        />
      </div>
    </div>
  );
}
