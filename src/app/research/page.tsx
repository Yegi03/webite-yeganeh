import type { Metadata } from "next";
import { PostList } from "@/components/PostList";
import { getResearchItems } from "@/lib/content";

export const metadata: Metadata = {
  title: "Research",
  description: "Papers, projects, and research work.",
};

export default function ResearchPage() {
  const items = getResearchItems();

  return (
    <div className="mx-auto max-w-3xl px-6 py-16">
      <h1 className="font-serif text-3xl font-medium text-stone-900">
        Research
      </h1>
      <p className="mt-3 text-lg text-stone-600">
        Papers, projects, and work I&apos;m involved in.
      </p>
      <div className="mt-12">
        <PostList items={items} basePath="/research" />
      </div>
    </div>
  );
}
