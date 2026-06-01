import Link from "next/link";
import { AnimatedHeading } from "@/components/AnimatedHeading";
import { Counter } from "@/components/Counter";
import { ExploreCards } from "@/components/ExploreCards";
import { HeroCanvas } from "@/components/HeroCanvas";
import { Reveal } from "@/components/Reveal";
import { SpotlightCard } from "@/components/SpotlightCard";
import { formatDate, getCollection } from "@/lib/content";
import { researchAreas, siteConfig } from "@/lib/site";

export default function Home() {
  const allNotes = getCollection("notes");
  const allPublications = getCollection("publications");
  const allProjects = getCollection("projects");

  const recentNotes = allNotes.slice(0, 3);
  const featuredPublications = allPublications.slice(0, 3);
  const featuredProjects = allProjects.slice(0, 4);

  const stats = [
    { value: allPublications.length, label: "Publications" },
    { value: allProjects.length, label: "Open-source projects" },
    { value: researchAreas.length, label: "Research areas" },
  ];

  return (
    <div>
      {/* Hero */}
      <section className="relative overflow-hidden border-b border-stone-200/70">
        <div className="hero-glow pointer-events-none absolute inset-0 -z-10" />
        <HeroCanvas />
        <div className="relative mx-auto max-w-3xl px-6 pb-20 pt-20 sm:pt-24">
          <p className="text-sm font-medium uppercase tracking-[0.2em] text-teal-800">
            {siteConfig.role}
          </p>
          <AnimatedHeading
            text={siteConfig.fullName}
            className="mt-4 font-serif text-4xl font-medium leading-[1.1] tracking-tight text-stone-900 sm:text-6xl"
          />
          <p className="mt-6 max-w-2xl text-xl leading-relaxed text-stone-700">
            {siteConfig.tagline}
          </p>
          <p className="mt-5 max-w-2xl text-lg leading-relaxed text-stone-600">
            I&apos;m a researcher at {siteConfig.location} working at the
            intersection of machine learning, computational modeling, and data
            science. My work spans trustworthy multimodal ML, EEG and
            physiological signal analysis, and mathematical models for medicine
            — with a steady focus on making models that are accurate,
            calibrated, and explainable.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <Link
              href="/research"
              className="rounded-full bg-stone-900 px-5 py-2.5 text-sm font-medium text-stone-50 transition-opacity hover:opacity-85"
            >
              Research I&apos;m chasing
            </Link>
            <Link
              href="/publications"
              className="rounded-full border border-stone-300 bg-white/40 px-5 py-2.5 text-sm font-medium text-stone-800 backdrop-blur-sm transition-colors hover:border-stone-400"
            >
              Publications
            </Link>
            <Link
              href="/cv"
              className="rounded-full border border-stone-300 bg-white/40 px-5 py-2.5 text-sm font-medium text-stone-800 backdrop-blur-sm transition-colors hover:border-stone-400"
            >
              CV
            </Link>
          </div>

          <div className="mt-7 flex flex-wrap gap-x-5 gap-y-2 text-sm text-stone-500">
            <a
              href={siteConfig.links.scholar}
              target="_blank"
              rel="noopener noreferrer"
              className="transition-colors hover:text-teal-800"
            >
              Google Scholar
            </a>
            <a
              href={siteConfig.links.github}
              target="_blank"
              rel="noopener noreferrer"
              className="transition-colors hover:text-teal-800"
            >
              GitHub
            </a>
            <a
              href={siteConfig.links.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="transition-colors hover:text-teal-800"
            >
              LinkedIn
            </a>
            <a
              href={siteConfig.links.email}
              className="transition-colors hover:text-teal-800"
            >
              Email
            </a>
          </div>

          {/* Stats */}
          <div className="mt-12 flex flex-wrap gap-x-12 gap-y-6 border-t border-stone-200/70 pt-8">
            {stats.map((stat) => (
              <div key={stat.label}>
                <div className="font-serif text-3xl font-medium text-stone-900 sm:text-4xl">
                  <Counter value={stat.value} suffix="+" />
                </div>
                <div className="mt-1 text-sm text-stone-500">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="mx-auto max-w-3xl px-6">
        {/* Research focus */}
        <Reveal className="mt-20">
          <h2 className="font-serif text-2xl font-medium text-stone-900">
            What I work on
          </h2>
          <div className="mt-6 grid gap-4 sm:grid-cols-2">
            {researchAreas.map((area) => (
              <SpotlightCard key={area.title}>
                <div className="p-6">
                  <h3 className="font-serif text-lg font-medium text-stone-900">
                    {area.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-stone-600">
                    {area.description}
                  </p>
                </div>
              </SpotlightCard>
            ))}
          </div>
        </Reveal>

        {/* Featured publications */}
        {featuredPublications.length > 0 && (
          <Reveal className="mt-20">
            <div className="flex items-baseline justify-between gap-4">
              <h2 className="font-serif text-2xl font-medium text-stone-900">
                Selected publications
              </h2>
              <Link
                href="/publications"
                className="shrink-0 text-sm text-teal-800 transition-opacity hover:opacity-70"
              >
                View all →
              </Link>
            </div>
            <ul className="mt-8 divide-y divide-stone-200/80">
              {featuredPublications.map((pub) => (
                <li key={pub.slug} className="py-6 first:pt-0">
                  {pub.venue && (
                    <p className="text-sm text-teal-800">{pub.venue}</p>
                  )}
                  <h3 className="mt-1 font-serif text-lg font-medium leading-snug">
                    <Link
                      href={`/publications/${pub.slug}`}
                      className="text-stone-900 transition-opacity hover:opacity-70"
                    >
                      {pub.title}
                    </Link>
                  </h3>
                  {pub.description && (
                    <p className="mt-1 text-sm text-stone-500">
                      {pub.description}
                    </p>
                  )}
                </li>
              ))}
            </ul>
          </Reveal>
        )}

        {/* Featured projects */}
        {featuredProjects.length > 0 && (
          <Reveal className="mt-20">
            <div className="flex items-baseline justify-between gap-4">
              <h2 className="font-serif text-2xl font-medium text-stone-900">
                Featured projects
              </h2>
              <Link
                href="/projects"
                className="shrink-0 text-sm text-teal-800 transition-opacity hover:opacity-70"
              >
                View all →
              </Link>
            </div>
            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              {featuredProjects.map((project) => (
                <SpotlightCard key={project.slug} className="h-full">
                  <Link
                    href={`/projects/${project.slug}`}
                    className="flex h-full flex-col p-5"
                  >
                    <h3 className="font-serif text-base font-medium leading-snug text-stone-900">
                      {project.title}
                    </h3>
                    <p className="mt-2 flex-1 text-sm leading-relaxed text-stone-600">
                      {project.description}
                    </p>
                    {project.tags && project.tags.length > 0 && (
                      <ul className="mt-4 flex flex-wrap gap-1.5">
                        {project.tags.slice(0, 3).map((tag) => (
                          <li
                            key={tag}
                            className="rounded-full bg-stone-100 px-2 py-0.5 text-xs text-stone-500"
                          >
                            {tag}
                          </li>
                        ))}
                      </ul>
                    )}
                  </Link>
                </SpotlightCard>
              ))}
            </div>
          </Reveal>
        )}

        {/* Explore */}
        <Reveal className="mt-20">
          <h2 className="font-serif text-2xl font-medium text-stone-900">
            Explore the rest
          </h2>
          <ExploreCards />
        </Reveal>

        {/* Recent notes */}
        {recentNotes.length > 0 && (
          <Reveal className="mb-20 mt-20">
            <div className="flex items-baseline justify-between gap-4">
              <h2 className="font-serif text-2xl font-medium text-stone-900">
                Recent notes
              </h2>
              <Link
                href="/notes"
                className="shrink-0 text-sm text-teal-800 transition-opacity hover:opacity-70"
              >
                View all →
              </Link>
            </div>
            <ul className="mt-8 divide-y divide-stone-200/80">
              {recentNotes.map((note) => (
                <li key={note.slug} className="py-6 first:pt-0">
                  <time className="text-sm text-stone-500" dateTime={note.date}>
                    {formatDate(note.date)}
                  </time>
                  <h3 className="mt-1 font-serif text-lg font-medium">
                    <Link
                      href={`/notes/${note.slug}`}
                      className="text-stone-900 transition-opacity hover:opacity-70"
                    >
                      {note.title}
                    </Link>
                  </h3>
                  <p className="mt-1 text-stone-600">{note.description}</p>
                </li>
              ))}
            </ul>
          </Reveal>
        )}
      </div>
    </div>
  );
}
