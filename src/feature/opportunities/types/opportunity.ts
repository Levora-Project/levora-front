export type OpportunityType = "Scholarship" | "Internship" | "Fellowship";

export interface OpportunitySummary {
  id: string;
  title: string;
  description: string;
  type: OpportunityType;
  matchScore: number;
  daysLeft: number;
  location: string;
  fieldOfStudy: string;
  imageUrl: string;
}
