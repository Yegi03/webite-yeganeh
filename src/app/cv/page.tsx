import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "CV",
  description: "Curriculum vitae and background.",
};

export default function CvPage() {
  return (
    <div className="mx-auto max-w-3xl px-6 py-16">
      <div className="flex flex-wrap items-baseline justify-between gap-4">
        <h1 className="font-serif text-3xl font-medium text-stone-900">CV</h1>
        <a
          href="/cv.pdf"
          className="rounded-full border border-stone-300 px-4 py-2 text-sm font-medium text-stone-800 transition-colors hover:border-stone-400"
          target="_blank"
          rel="noopener noreferrer"
        >
          Download PDF
        </a>
      </div>
      <p className="mt-3 text-stone-500">
        Add your CV PDF as{" "}
        <code className="rounded bg-stone-100 px-1.5 py-0.5 text-sm text-stone-700">
          public/cv.pdf
        </code>{" "}
        so the download button works.
      </p>

      <div className="mt-12 space-y-10">
        <section>
          <h2 className="font-serif text-xl font-medium text-stone-900">
            Education
          </h2>
          <ul className="mt-3 space-y-3 text-stone-600">
            <li>
              <p className="font-medium text-stone-800">Degree, Institution</p>
              <p className="text-sm text-stone-500">Year — Year</p>
            </li>
          </ul>
        </section>
        <section>
          <h2 className="font-serif text-xl font-medium text-stone-900">
            Experience
          </h2>
          <ul className="mt-3 space-y-3 text-stone-600">
            <li>
              <p className="font-medium text-stone-800">Role, Organization</p>
              <p className="text-sm text-stone-500">Year — Year</p>
            </li>
          </ul>
        </section>
        <section>
          <h2 className="font-serif text-xl font-medium text-stone-900">
            Skills
          </h2>
          <p className="mt-3 text-stone-600">List your key skills here.</p>
        </section>
      </div>
    </div>
  );
}
