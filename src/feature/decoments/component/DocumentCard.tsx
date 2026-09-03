// // import { FileText, GraduationCap, Mail, Link2, Sparkles } from "lucide-react";
// import { DocCategory, DocumentItem } from "./types";

// import Link from "next/link";
// import { Sparkles } from "lucide-react";






// const categoryIcon: Record<DocCategory, React.ElementType> = {
//   Resume: FileText,
//   Essay: FileText,
//      "Recommendation Letter": Mail,
// };

// export default function DocumentCard({ doc }: { doc: DocumentItem }) {
//   const Icon = categoryIcon[doc.category];
//   const highlighted = Boolean(doc.reviewWithAI);

//   return (
//     <div
//       className={`rounded-xl border bg-white p-5 flex flex-col ${
//         highlighted ? "border-green-700" : "border-stone-200"
//       }`}
//     >
//       <span
//         className={`self-start rounded-full px-3 py-1 text-xs font-medium mb-4 ${
//           highlighted
//             ? "bg-green-800 text-white"
//             : "bg-stone-100 text-stone-500"
//         }`}
//       >
//         {doc.category}
//       </span>

//       <div className="flex items-start gap-3">
//         <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-md bg-stone-100">
//           <Icon className="h-4 w-4 text-stone-600" />
//         </div>
//         <div className="min-w-0">
//           <p className="font-semibold text-stone-900 truncate">
//             {doc.fileName}
//           </p>
//           <p className="text-sm text-stone-400 mt-0.5">
//             Uploaded {doc.uploadedOn}
//           </p>
//         </div>
//       </div>

//       <div className="mt-4 pt-3 border-t border-stone-100 flex items-center gap-1.5 text-sm text-stone-500">
//         <Link2 className="h-3.5 w-3.5" />
//         {doc.linkedTo ? (
//           <span>
//             Linked to: <span className="text-stone-700">{doc.linkedTo}</span>
//           </span>
//         ) : (
//           <span>Not linked</span>
//         )}
//       </div>

//       {doc.reviewWithAI && (
//   <Link
//     href={`/documents/review/${doc.id}`}
//     className="mt-3 flex items-center justify-center gap-2 rounded-lg bg-green-50 py-2.5 text-sm font-medium text-green-800 hover:bg-green-100 transition-colors"
//   >
//     <Sparkles className="h-4 w-4" />
//     Review with AI
//   </Link>
// )}


//     </div>
//   );
// }



import Link from "next/link";
import { Sparkles, FileText, Mail } from "lucide-react";
import type { DocumentItem } from "./types";

interface DocumentCardProps {
  doc: DocumentItem;
}

export default function DocumentCard({ doc }: DocumentCardProps) {
  const categoryIcon: Record<string, React.ElementType> = {
    Resume: FileText,
    Essay: FileText,
    "Recommendation Letter": Mail,
  };

  const IconComponent = categoryIcon[doc.category] || FileText;
  const hasReview = !!doc.review;

  return (
    <div
      className={`p-4 rounded-lg border-2 transition-all ${hasReview
          ? "border-green-500 bg-green-50 dark:bg-green-950"
          : "border-gray-300 bg-white dark:bg-gray-800"
        }`}
    >
      {/* Header مع الأيقونة والفئة */}
      <div className="flex items-center justify-between mb-3">
        <div className="flex items-center gap-2">
          <IconComponent className="w-5 h-5 text-gray-600 dark:text-gray-400" />

          <span className="text-sm font-medium text-gray-600 dark:text-gray-400">
            {doc.category}
          </span>
        </div>

        {hasReview && (
          <span className="text-xs bg-green-500 text-white px-2 py-1 rounded-full">
            تم التقييم ✓
          </span>
        )}
      </div>

      {/* اسم الملف */}
      <h3 className="text-lg font-semibold mb-2 text-gray-900 dark:text-white">
        {doc.fileName}
      </h3>

      {/* الفئة */}
      <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
        {doc.category}
      </p>

      {/* التاريخ */}
      <div className="text-xs text-gray-500 dark:text-gray-500 mb-4">
        {new Date(doc.uploadedOn).toLocaleDateString("ar-SA")}
      </div>
      {/* الزر */}
      <Link
        href={`/documents/review/${doc.id}`}
        className="w-full inline-flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-lg transition-colors"
      >
        <Sparkles className="w-4 h-4" />
        تقييم مع الذكاء الاصطناعي
      </Link>
    </div>
  );
}


