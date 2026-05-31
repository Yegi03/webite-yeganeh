import Link from "next/link";
import { Markdown } from "@/components/Markdown";
import type { ContentItem } from "@/lib/content";
import { formatDate } from "@/lib/content";

export function ItemArticle({
  item,
  backHref,
  backLabel,
}: {
  item: ContentItem;
  backHref: string;
  backLabel: string;
}) {
  return (
    <article className="mx-auto max-w-3xl px-6 py-16">
      <Link
        href={backHref}
        className="text-sm text-teal-800 transition-opacity hover:opacity-70"
      >
        ← {backLabel}
      </Link>
      <header className="mt-8">
        {item.date && (
          <time className="text-sm text-stone-500" dateTime={item.date}>
            {formatDate(item.date)}
          </time>
        )}
        {item.venue && (
          <p className="mt-1 text-sm font-medium text-teal-800">
            {item.venue}
          </p>
        )}
        <h1 className="mt-2 font-serif text-3xl font-medium text-stone-900 sm:text-4xl">
          {item.title}
        </h1>
        {item.link && (
          <p className="mt-3">
            <a
              href={item.link}
              className="text-teal-800 hover:underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              View resource →
            </a>
          </p>
        )}
        {item.tags && item.tags.length > 0 && (
          <ul className="mt-4 flex flex-wrap gap-2">
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
      </header>
      <div className="mt-10">
        <Markdown content={item.content} />
      </div>
    </article>
  );
}
