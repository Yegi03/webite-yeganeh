import type { Metadata } from "next";
import { CollectionList } from "@/components/CollectionList";
import { getCollection } from "@/lib/content";

export const metadata: Metadata = {
  title: "Publications",
  description: "Papers, preprints, and academic work.",
};

export default function PublicationsPage() {
  const items = getCollection("publications");

  return (
    <div className="mx-auto max-w-3xl px-6 py-16">
      <h1 className="font-serif text-3xl font-medium text-stone-900">
        Publications
      </h1>
      <p className="mt-3 text-lg text-stone-600">
        Papers, preprints, and academic work.
      </p>
      <div className="mt-12">
        <CollectionList
          items={items}
          basePath="/publications"
          emptyText="Publications coming soon."
        />
      </div>
    </div>
  );
}
