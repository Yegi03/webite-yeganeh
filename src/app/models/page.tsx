import type { Metadata } from "next";
import { CollectionList } from "@/components/CollectionList";
import { getCollection } from "@/lib/content";

export const metadata: Metadata = {
  title: "Models, Math & Messy Data",
  description: "Modeling notes, math, and the messy data behind results.",
};

export default function ModelsPage() {
  const items = getCollection("models");

  return (
    <div className="mx-auto max-w-3xl px-6 py-16">
      <h1 className="font-serif text-3xl font-medium text-stone-900">
        Models, Math &amp; Messy Data
      </h1>
      <p className="mt-3 text-lg text-stone-600">
        Modeling notes, the math behind them, and the messy data in between.
      </p>
      <div className="mt-12">
        <CollectionList
          items={items}
          basePath="/models"
          emptyText="Notes coming soon."
        />
      </div>
    </div>
  );
}
