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
  content: string;
};

const contentRoot = path.join(process.cwd(), "content");

function getMarkdownFiles(dir: string): string[] {
  if (!fs.existsSync(dir)) return [];
  return fs
    .readdirSync(dir)
    .filter((file) => file.endsWith(".md"))
    .map((file) => file.replace(/\.md$/, ""));
}

function parseFile(
  directory: string,
  slug: string,
  extraFields: string[] = [],
): ContentItem | null {
  const filePath = path.join(directory, `${slug}.md`);
  if (!fs.existsSync(filePath)) return null;

  const raw = fs.readFileSync(filePath, "utf8");
  const { data, content } = matter(raw);

  const item: ContentItem = {
    slug,
    title: String(data.title ?? slug),
    date: String(data.date ?? ""),
    description: String(data.description ?? ""),
    tags: Array.isArray(data.tags) ? data.tags.map(String) : undefined,
    draft: Boolean(data.draft),
    content,
  };

  if (extraFields.includes("venue") && data.venue) {
    item.venue = String(data.venue);
  }

  return item;
}

function getAllItems(
  type: "blog" | "research",
  extraFields: string[] = [],
): ContentItem[] {
  const dir = path.join(contentRoot, type);
  return getMarkdownFiles(dir)
    .map((slug) => parseFile(dir, slug, extraFields))
    .filter((item): item is ContentItem => item !== null && !item.draft)
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
}

export function getBlogPosts() {
  return getAllItems("blog");
}

export function getBlogPost(slug: string) {
  const dir = path.join(contentRoot, "blog");
  const item = parseFile(dir, slug);
  if (!item || item.draft) return null;
  return item;
}

export function getResearchItems() {
  return getAllItems("research", ["venue"]);
}

export function getResearchItem(slug: string) {
  const dir = path.join(contentRoot, "research");
  const item = parseFile(dir, slug, ["venue"]);
  if (!item || item.draft) return null;
  return item;
}

export function formatDate(date: string) {
  return new Date(date).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}
