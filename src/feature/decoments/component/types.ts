export type DocCategory =
  | "Resume"
  | "Essay"
  | "Transcript"
  | "Recommendation Letter";

export type DocumentItem = {
  id: string;
  category: DocCategory;
  fileName: string;
  uploadedOn: string;
  linkedTo: string | null;
  reviewWithAI?: boolean;
};