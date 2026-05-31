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
          href="/yegi-cv.pdf"
          className="rounded-full bg-stone-900 px-4 py-2 text-sm font-medium text-stone-50 transition-opacity hover:opacity-85"
          target="_blank"
          rel="noopener noreferrer"
          download
        >
          Download PDF
        </a>
      </div>
      <p className="mt-3 text-stone-500">
        My full curriculum vitae — view below or download a copy.
      </p>

      <div className="mt-8 overflow-hidden rounded-xl border border-stone-200 bg-stone-50">
        <object
          data="/yegi-cv.pdf"
          type="application/pdf"
          className="h-[80vh] w-full"
        >
          <div className="p-8 text-center text-stone-600">
            Your browser can&apos;t display the PDF inline.{" "}
            <a
              href="/yegi-cv.pdf"
              className="text-teal-800 hover:underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              Open it in a new tab
            </a>
            .
          </div>
        </object>
      </div>
    </div>
  );
}
