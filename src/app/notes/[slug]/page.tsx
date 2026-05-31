import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ItemArticle } from "@/components/ItemArticle";
import { getCollection, getCollectionItem } from "@/lib/content";

type Props = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
  return getCollection("notes").map((item) => ({ slug: item.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const item = getCollectionItem("notes", slug);
  if (!item) return {};
  return { title: item.title, description: item.description };
}

export default async function NotePage({ params }: Props) {
  const { slug } = await params;
  const item = getCollectionItem("notes", slug);
  if (!item) notFound();

  return (
    <ItemArticle item={item} backHref="/notes" backLabel="Back to notes" />
  );
}
