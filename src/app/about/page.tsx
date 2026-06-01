import type { Metadata } from "next";
import Link from "next/link";
import { researchAreas, siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "About Me",
  description: `About ${siteConfig.author} — ${siteConfig.role}.`,
};

export default function AboutPage() {
  return (
    <div className="mx-auto max-w-3xl px-6 py-16">
      <p className="text-sm font-medium uppercase tracking-[0.2em] text-teal-800">
        About Me
      </p>
      <h1 className="mt-4 font-serif text-3xl font-medium tracking-tight text-stone-900 sm:text-4xl">
        {siteConfig.fullName}
      </h1>
      <p className="mt-2 text-stone-500">
        {siteConfig.role} · {siteConfig.location}
      </p>

      <div className="mt-8 space-y-5 text-lg leading-relaxed text-stone-600">
        <p>
          I&apos;m a researcher working at the intersection of machine learning,
          computational modeling, and data science. I&apos;m drawn to problems
          where the data is messy, the stakes are real, and the model has to
          earn trust — health, human signals, and information integrity.
        </p>
        <p>
          My recent work spans <strong>multimodal misinformation detection</strong>
          {" "}— building models that reason across text and images and stay
          robust as stories evolve — and <strong>affective computing</strong>,
          where I design EEG and physiological-signal models for emotion and
          fatigue recognition that generalize to people they&apos;ve never seen.
          Alongside that, I build <strong>mechanistic and Bayesian models</strong>
          {" "}for oncology and nanoparticle transport, and explainable pipelines
          for medical imaging and clinical data.
        </p>
        <p>
          A thread that runs through all of it: I care less about chasing
          leaderboard numbers and more about whether a model is calibrated,
          interpretable, and honest about what it doesn&apos;t know — especially
          when the answer could affect a patient or a public conversation.
        </p>
        <p>
          This site is where I keep my research, projects, writing, and the
          things I&apos;m currently obsessed with. Take a look at{" "}
          <Link
            href="/research"
            className="text-teal-800 hover:underline"
          >
            what I&apos;m chasing
          </Link>{" "}
          or browse my{" "}
          <Link href="/projects" className="text-teal-800 hover:underline">
            projects
          </Link>
          .
        </p>
      </div>

      <div className="mt-12">
        <h2 className="font-serif text-xl font-medium text-stone-900">
          Research interests
        </h2>
        <div className="mt-5 grid gap-4 sm:grid-cols-2">
          {researchAreas.map((area) => (
            <div
              key={area.title}
              className="rounded-xl border border-stone-200 p-5"
            >
              <h3 className="font-serif text-base font-medium text-stone-900">
                {area.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-stone-600">
                {area.description}
              </p>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-12">
        <h2 className="font-serif text-xl font-medium text-stone-900">
          Connect
        </h2>
        <ul className="mt-4 space-y-2 text-stone-600">
          <li>
            <a
              href={siteConfig.links.email}
              className="text-teal-800 hover:underline"
            >
              yeganeh.ab03@gmail.com
            </a>{" "}
            (
            <a
              href={siteConfig.links.emailAlt}
              className="text-teal-800 hover:underline"
            >
              yegi@msu.edu
            </a>
            )
          </li>
          <li>
            <a
              href={siteConfig.links.scholar}
              className="text-teal-800 hover:underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              Google Scholar
            </a>
          </li>
          <li>
            <a
              href={siteConfig.links.github}
              className="text-teal-800 hover:underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub
            </a>
          </li>
          <li>
            <a
              href={siteConfig.links.linkedin}
              className="text-teal-800 hover:underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}
