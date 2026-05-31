import fs from "fs";
import path from "path";
import matter from "gray-matter";

export type ContentItem = {
  slug: string;
  title: string;
  date: string;
  description: string;
  tags?: string[];
  draft?: boolean;
  venue?: string;
  link?: string;
  content: string;
};

export type CollectionName =
  | "publications"
  | "projects"
  | "models"
  | "notes";

const contentRoot = path.join(process.cwd(), "content");

function getMarkdownSlugs(dir: string): string[] {
  if (!fs.existsSync(dir)) return [];
  return fs
    .readdirSync(dir)
    .filter((file) => file.endsWith(".md"))
    .map((file) => file.replace(/\.md$/, ""));
}

function parseFile(directory: string, slug: string): ContentItem | null {
  const filePath = path.join(directory, `${slug}.md`);
  if (!fs.existsSync(filePath)) return null;

  const raw = fs.readFileSync(filePath, "utf8");
  const { data, content } = matter(raw);

  return {
    slug,
    title: String(data.title ?? slug),
    date: String(data.date ?? ""),
    description: String(data.description ?? ""),
    tags: Array.isArray(data.tags) ? data.tags.map(String) : undefined,
    draft: Boolean(data.draft),
    venue: data.venue ? String(data.venue) : undefined,
    link: data.link ? String(data.link) : undefined,
    content,
  };
}

export function getCollection(name: CollectionName): ContentItem[] {
  const dir = path.join(contentRoot, name);
  return getMarkdownSlugs(dir)
    .map((slug) => parseFile(dir, slug))
    .filter((item): item is ContentItem => item !== null && !item.draft)
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
}

export function getCollectionItem(
  name: CollectionName,
  slug: string,
): ContentItem | null {
  const dir = path.join(contentRoot, name);
  const item = parseFile(dir, slug);
  if (!item || item.draft) return null;
  return item;
}

export function formatDate(date: string) {
  if (!date) return "";
  return new Date(date).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}
