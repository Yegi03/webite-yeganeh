import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Markdown } from "@/components/Markdown";
import { formatDate, getBlogPost, getBlogPosts } from "@/lib/content";

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return getBlogPosts().map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = getBlogPost(slug);
  if (!post) return {};

  return {
    title: post.title,
    description: post.description,
  };
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = getBlogPost(slug);
  if (!post) notFound();

  return (
    <article className="mx-auto max-w-3xl px-6 py-16">
      <Link
        href="/blog"
        className="text-sm text-teal-800 transition-opacity hover:opacity-70"
      >
        ← Back to blog
      </Link>
      <header className="mt-8">
        <time className="text-sm text-stone-500" dateTime={post.date}>
          {formatDate(post.date)}
        </time>
        <h1 className="mt-2 font-serif text-3xl font-medium text-stone-900 sm:text-4xl">
          {post.title}
        </h1>
        {post.tags && post.tags.length > 0 && (
          <ul className="mt-4 flex flex-wrap gap-2">
            {post.tags.map((tag) => (
              <li
                key={tag}
                className="rounded-full bg-stone-100 px-2.5 py-0.5 text-xs text-stone-600"
              >
                {tag}
              </li>
            ))}
          </ul>
        )}
      </header>
      <div className="mt-10">
        <Markdown content={post.content} />
      </div>
    </article>
  );
}
