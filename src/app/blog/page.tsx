import type { Metadata } from "next";
import { PostList } from "@/components/PostList";
import { getBlogPosts } from "@/lib/content";

export const metadata: Metadata = {
  title: "Blog",
  description: "Thoughts, notes, and writing.",
};

export default function BlogPage() {
  const posts = getBlogPosts();

  return (
    <div className="mx-auto max-w-3xl px-6 py-16">
      <h1 className="font-serif text-3xl font-medium text-stone-900">Blog</h1>
      <p className="mt-3 text-lg text-stone-600">
        Thoughts, notes, and things I&apos;m learning along the way.
      </p>
      <div className="mt-12">
        <PostList items={posts} basePath="/blog" />
      </div>
    </div>
  );
}
