import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Markdown } from "@/components/Markdown";
import {
  formatDate,
  getResearchItem,
  getResearchItems,
} from "@/lib/content";

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return getResearchItems().map((item) => ({ slug: item.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const item = getResearchItem(slug);
  if (!item) return {};

  return {
    title: item.title,
    description: item.description,
  };
}

export default async function ResearchItemPage({ params }: Props) {
  const { slug } = await params;
  const item = getResearchItem(slug);
  if (!item) notFound();

  return (
    <article className="mx-auto max-w-3xl px-6 py-16">
      <Link
        href="/research"
        className="text-sm text-teal-800 transition-opacity hover:opacity-70"
      >
        ← Back to research
      </Link>
      <header className="mt-8">
        <time className="text-sm text-stone-500" dateTime={item.date}>
          {formatDate(item.date)}
        </time>
        {item.venue && (
          <p className="mt-1 text-sm font-medium text-teal-800">{item.venue}</p>
        )}
        <h1 className="mt-2 font-serif text-3xl font-medium text-stone-900 sm:text-4xl">
          {item.title}
        </h1>
      </header>
      <div className="mt-10">
        <Markdown content={item.content} />
      </div>
    </article>
  );
}
