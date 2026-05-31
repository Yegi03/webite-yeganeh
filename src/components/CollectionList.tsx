import Link from "next/link";
import { Reveal } from "@/components/Reveal";
import type { ContentItem } from "@/lib/content";
import { formatDate } from "@/lib/content";

export function CollectionList({
  items,
  basePath,
  emptyText = "Nothing here yet — check back soon.",
}: {
  items: ContentItem[];
  basePath: string;
  emptyText?: string;
}) {
  if (items.length === 0) {
    return <p className="text-stone-500">{emptyText}</p>;
  }

  return (
    <ul className="divide-y divide-stone-200/80">
      {items.map((item, i) => (
        <li key={item.slug} className="py-8 first:pt-0 last:pb-0">
          <Reveal delay={Math.min(i * 0.05, 0.3)}>
          <article className="group">
            {item.date && (
              <time className="text-sm text-stone-500" dateTime={item.date}>
                {formatDate(item.date)}
              </time>
            )}
            <h2 className="mt-1 font-serif text-xl font-medium text-stone-900">
              <Link
                href={`${basePath}/${item.slug}`}
                className="transition-opacity hover:opacity-70"
              >
                {item.title}
              </Link>
            </h2>
            {item.venue && (
              <p className="mt-1 text-sm text-teal-800">{item.venue}</p>
            )}
            <p className="mt-2 text-stone-600">{item.description}</p>
            {item.tags && item.tags.length > 0 && (
              <ul className="mt-3 flex flex-wrap gap-2">
                {item.tags.map((tag) => (
                  <li
                    key={tag}
                    className="rounded-full bg-stone-100 px-2.5 py-0.5 text-xs text-stone-600"
                  >
                    {tag}
                  </li>
                ))}
              </ul>
            )}
          </article>
          </Reveal>
        </li>
      ))}
    </ul>
  );
}
