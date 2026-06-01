import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Research I'm Chasing",
  description: "The questions and directions I'm currently exploring.",
};

const themes = [
  {
    title: "Can a model tell a true story from a convincing one?",
    body: "Misinformation is multimodal and it moves. I build models that read text and images together, model how a narrative drifts over time, and stay robust when they meet a dataset — or an event — they were never trained on.",
  },
  {
    title: "What do brains and bodies reveal that words don't?",
    body: "EEG and physiological signals carry honest traces of emotion, attention, and fatigue. My goal is recognition that generalizes across people, not just across recordings of the same person — the hard, deployment-relevant setting.",
  },
  {
    title: "How do we model a disease we can only partially observe?",
    body: "I combine mechanistic differential-equation models with Bayesian inference and machine learning to study tumor dynamics and nanoparticle-based therapy — quantifying uncertainty instead of hiding it.",
  },
  {
    title: "Why did the model decide that — and should we believe it?",
    body: "Across imaging and clinical data, I work on calibration, saliency, and uncertainty so a prediction comes with an explanation and an honest confidence, especially when a person's care is on the line.",
  },
];

export default function ResearchPage() {
  return (
    <div className="mx-auto max-w-3xl px-6 py-16">
      <p className="text-sm font-medium uppercase tracking-[0.2em] text-teal-800">
        Research
      </p>
      <h1 className="mt-4 font-serif text-3xl font-medium tracking-tight text-stone-900 sm:text-4xl">
        Research I&apos;m Chasing
      </h1>
      <p className="mt-6 max-w-2xl text-lg leading-relaxed text-stone-600">
        These are the questions that keep me up at night. They sit in different
        fields, but they rhyme: each one is really about building machine
        learning you can trust when the data is incomplete and the answer
        matters.
      </p>

      <div className="mt-12 space-y-10">
        {themes.map((theme, i) => (
          <div key={theme.title} className="flex gap-5">
            <span className="select-none font-serif text-2xl font-medium text-teal-800/60">
              {String(i + 1).padStart(2, "0")}
            </span>
            <div>
              <h2 className="font-serif text-xl font-medium leading-snug text-stone-900">
                {theme.title}
              </h2>
              <p className="mt-2 leading-relaxed text-stone-600">
                {theme.body}
              </p>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-14 rounded-2xl border border-stone-200 bg-stone-50 p-6">
        <p className="text-stone-600">
          For formal outputs, see my{" "}
          <Link href="/publications" className="text-teal-800 hover:underline">
            publications
          </Link>
          . For things I&apos;m building and breaking, see{" "}
          <Link href="/projects" className="text-teal-800 hover:underline">
            projects &amp; experiments
          </Link>
          .
        </p>
      </div>
    </div>
  );
}
