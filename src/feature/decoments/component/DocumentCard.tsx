import { FileText, GraduationCap, Mail, Link2, Sparkles } from "lucide-react";
import { DocCategory, DocumentItem } from "./types";


const categoryIcon: Record<DocCategory, React.ElementType> = {
  Resume: FileText,
  Essay: FileText,
  Transcript: GraduationCap,
  "Recommendation Letter": Mail,
};

export default function DocumentCard({ doc }: { doc: DocumentItem }) {
  const Icon = categoryIcon[doc.category];
  const highlighted = Boolean(doc.reviewWithAI);

  return (
    <div
      className={`rounded-xl border bg-white p-5 flex flex-col ${
        highlighted ? "border-green-700" : "border-stone-200"
      }`}
    >
      <span
        className={`self-start rounded-full px-3 py-1 text-xs font-medium mb-4 ${
          highlighted
            ? "bg-green-800 text-white"
            : "bg-stone-100 text-stone-500"
        }`}
      >
        {doc.category}
      </span>

      <div className="flex items-start gap-3">
        <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-md bg-stone-100">
          <Icon className="h-4 w-4 text-stone-600" />
        </div>
        <div className="min-w-0">
          <p className="font-semibold text-stone-900 truncate">
            {doc.fileName}
          </p>
          <p className="text-sm text-stone-400 mt-0.5">
            Uploaded {doc.uploadedOn}
          </p>
        </div>
      </div>

      <div className="mt-4 pt-3 border-t border-stone-100 flex items-center gap-1.5 text-sm text-stone-500">
        <Link2 className="h-3.5 w-3.5" />
        {doc.linkedTo ? (
          <span>
            Linked to: <span className="text-stone-700">{doc.linkedTo}</span>
          </span>
        ) : (
          <span>Not linked</span>
        )}
      </div>

      {doc.reviewWithAI && (
        <button
          type="button"
          className="mt-3 flex items-center justify-center gap-2 rounded-lg bg-green-50 py-2.5 text-sm font-medium text-green-800 hover:bg-green-100 transition-colors"
        >
          <Sparkles className="h-4 w-4" />
          Review with AI
        </button>
      )}
    </div>
  );
}