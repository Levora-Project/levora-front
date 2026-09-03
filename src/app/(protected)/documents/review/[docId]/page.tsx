import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, FileText, ZoomIn, ZoomOut } from "lucide-react";

import ReviewSidebar from "@/feature/decoments/component/review/ReviewSidebar";
import { documents } from "@/feature/decoments/component/documents.data";

export default async function DocumentReviewPage({
  params,
}: {
  params: Promise<{ docId: string }>;
}) {
  const { docId } = await params;
  const doc = documents.find((d) => d.id === docId);

  if (!doc || !doc.review) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-[#FAF8F3]">
      <main className="mx-auto max-w-6xl px-6 py-8">
        <Link
          href="/documents"
          className="inline-flex items-center gap-1.5 text-sm text-stone-600 hover:text-stone-900 transition-colors"
        >
          <ArrowLeft className="h-4 w-4" />
          Back to Documents
        </Link>

        <div className="flex items-center gap-3 mt-3 mb-6">
          <h1 className="text-2xl font-bold text-stone-900">
            {doc.fileName}
          </h1>

          <span className="flex items-center gap-1.5 rounded-full bg-stone-100 px-3 py-1 text-xs font-medium text-stone-600">
            <FileText className="h-3.5 w-3.5" />
            {doc.category}
          </span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-[1fr_360px] gap-6">
          <div className="rounded-xl border border-stone-200 bg-white overflow-hidden">
            <div className="flex items-center justify-between border-b border-stone-200 px-5 py-3">
              <span className="text-sm font-medium text-stone-700">
                Document Preview
              </span>

              <div className="flex items-center gap-3 text-stone-500">
                <button
                  type="button"
                  aria-label="Zoom in"
                  className="hover:text-stone-900 transition-colors"
                >
                  <ZoomIn className="h-4 w-4" />
                </button>

                <button
                  type="button"
                  aria-label="Zoom out"
                  className="hover:text-stone-900 transition-colors"
                >
                  <ZoomOut className="h-4 w-4" />
                </button>
              </div>
            </div>

            <div className="p-6">
              <div className="mx-auto max-w-2xl rounded-md border border-stone-200 bg-white p-6 shadow-sm">
                <pre className="whitespace-pre-wrap font-sans text-sm leading-relaxed text-stone-800">
                  {doc.review.content}
                </pre>
              </div>
            </div>
          </div>

          <ReviewSidebar review={doc.review} />
        </div>

        <p className="text-center text-xs text-stone-400 mt-8">
          AI guidance is intended to assist your writing and does not guarantee
          application outcomes.
        </p>
      </main>
    </div>
  );
}