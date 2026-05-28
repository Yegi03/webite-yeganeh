import Link from "next/link";
import { getBlogPosts } from "@/lib/content";
import { formatDate } from "@/lib/content";
import { siteConfig } from "@/lib/site";

export default function Home() {
  const recentPosts = getBlogPosts().slice(0, 3);

  return (
    <div className="mx-auto max-w-3xl px-6 py-16">
      <section className="space-y-6">
        <p className="text-sm font-medium uppercase tracking-widest text-teal-800">
          Personal site
        </p>
        <h1 className="font-serif text-4xl font-medium leading-tight tracking-tight text-stone-900 sm:text-5xl">
          Hi, I&apos;m {siteConfig.name}.
        </h1>
        <p className="max-w-xl text-lg leading-relaxed text-stone-600">
          I work on research, write about ideas I&apos;m exploring, and build
          things at the intersection of science and technology. This is where I
          share my work, thoughts, and projects.
        </p>
        <div className="flex flex-wrap gap-4 pt-2">
          <Link
            href="/about"
            className="rounded-full bg-stone-900 px-5 py-2.5 text-sm font-medium text-stone-50 transition-opacity hover:opacity-85"
          >
            About me
          </Link>
          <Link
            href="/research"
            className="rounded-full border border-stone-300 px-5 py-2.5 text-sm font-medium text-stone-800 transition-colors hover:border-stone-400"
          >
            Research
          </Link>
        </div>
      </section>

      {recentPosts.length > 0 && (
        <section className="mt-20">
          <div className="flex items-baseline justify-between gap-4">
            <h2 className="font-serif text-2xl font-medium text-stone-900">
              Recent writing
            </h2>
            <Link
              href="/blog"
              className="text-sm text-teal-800 transition-opacity hover:opacity-70"
            >
              View all →
            </Link>
          </div>
          <ul className="mt-8 divide-y divide-stone-200/80">
            {recentPosts.map((post) => (
              <li key={post.slug} className="py-6 first:pt-0">
                <time className="text-sm text-stone-500" dateTime={post.date}>
                  {formatDate(post.date)}
                </time>
                <h3 className="mt-1 font-serif text-lg font-medium">
                  <Link
                    href={`/blog/${post.slug}`}
                    className="text-stone-900 transition-opacity hover:opacity-70"
                  >
                    {post.title}
                  </Link>
                </h3>
                <p className="mt-1 text-stone-600">{post.description}</p>
              </li>
            ))}
          </ul>
        </section>
      )}
    </div>
  );
}
