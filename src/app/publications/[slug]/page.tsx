import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ItemArticle } from "@/components/ItemArticle";
import { getCollection, getCollectionItem } from "@/lib/content";

type Props = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
  return getCollection("publications").map((item) => ({ slug: item.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const item = getCollectionItem("publications", slug);
  if (!item) return {};
  return { title: item.title, description: item.description };
}

export default async function PublicationPage({ params }: Props) {
  const { slug } = await params;
  const item = getCollectionItem("publications", slug);
  if (!item) notFound();

  return (
    <ItemArticle
      item={item}
      backHref="/publications"
      backLabel="Back to publications"
    />
  );
}
