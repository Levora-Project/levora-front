import { DocumentItem } from "./types";


export const documents: DocumentItem[] = [
  {
    id: "resume",
    category: "Resume",
    fileName: "levora_resume_v2.pdf",
    uploadedOn: "Oct 12, 2026",
    linkedTo: "MIT Scholarship, Google Internship",
  },
  {
    id: "essay",
    category: "Essay",
    fileName: "Personal_Statement_Final.docx",
    uploadedOn: "Nov 04, 2026",
    linkedTo: "Stanford Fellowship",
    reviewWithAI: true,
  },
  {
    id: "transcript",
    category: "Transcript",
    fileName: "Official_Transcript_Fall2026.pdf",
    uploadedOn: "Sep 28, 2026",
    linkedTo: "3 Applications",
  },
  {
    id: "recommendation",
    category: "Recommendation Letter",
    fileName: "Prof_Smith_Rec.pdf",
    uploadedOn: "Nov 01, 2026",
    linkedTo: null,
  },
];