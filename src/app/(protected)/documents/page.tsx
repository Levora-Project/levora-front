import { FilePlus2 } from "lucide-react";


import Navbar from "@/src/feature/layout/components/Navbar";
import { documents } from "@/src/feature/decoments/component/documents.data";
import DocumentCard from "@/src/feature/decoments/component/DocumentCard";

export default function DocumentsPage() {
  return (
    <div className="min-h-screen bg-[#FAF8F3]">

      <Navbar />

      <main className="mx-auto max-w-6xl px-6 py-10">
        <div className="flex items-start justify-between gap-4 mb-8">
          <div>
            <h1 className="text-3xl font-bold text-stone-900">
              My Documents
            </h1>
            <p className="text-stone-500 mt-1">
              Manage and organize your application materials.
            </p>
          </div>
          <button
            type="button"
            className="flex items-center gap-2 rounded-lg bg-green-800 px-4 py-2.5 text-sm font-medium text-white hover:bg-green-900 transition-colors shrink-0"
          >
            <FilePlus2 className="h-4 w-4" />
            Upload new document
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {documents.map((doc) => (
            <DocumentCard key={doc.id} doc={doc} />
          ))}
        </div>
      </main>
    </div>
  );
}