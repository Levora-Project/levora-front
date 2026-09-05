// Mirrors the 4-step onboarding wizard (FR-2.1): Education, Background &
// Goals, Skills & Language, Documents.
export const PROFILE_COMPLETION = 70;

export const PROFILE_SECTIONS: { label: string; complete: boolean }[] = [
  { label: "Education", complete: true },
  { label: "Background & goals", complete: true },
  { label: "Skills & language", complete: false },
  { label: "Documents", complete: false },
];

export interface OpportunitySummary {
  id: string;
  title: string;
  description: string;
  type: "Scholarship" | "Internship" | "Fellowship";
  matchScore: number;
  daysLeft: number;
  location: string;
  imageUrl: string;
}

// Recommended opportunities (FR-3.5/3.6) — not yet saved or applied to,
// distinct from APPLICATIONS above which tracks the user's own applications.
export const RECOMMENDED_OPPORTUNITIES: OpportunitySummary[] = [
  {
    id: "o1",
    title: "Qatar Foundation Academic Excellence Scholarship",
    description:
      "Comprehensive scholarship for outstanding students pursuing degrees in science and engineering.",
    type: "Scholarship",
    matchScore: 98,
    daysLeft: 12,
    location: "Doha, Qatar",
    imageUrl:
      "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?w=800&q=80&auto=format&fit=crop",
  },
  {
    id: "o3",
    title: "Young Leaders Scholarship 2024",
    description:
      "International program empowering Arab youth in leadership and social impact.",
    type: "Scholarship",
    matchScore: 89,
    daysLeft: 30,
    location: "Dubai, UAE",
    imageUrl:
      "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?w=800&q=80&auto=format&fit=crop",
  },
];
