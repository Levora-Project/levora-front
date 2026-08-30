export type ApplicationStatus =
  | "not_started"
  | "in_progress"
  | "submitted"
  | "in_review"
  | "accepted"
  | "rejected";

export const APPLICATION_STATUSES: ApplicationStatus[] = [
  "not_started",
  "in_progress",
  "submitted",
  "in_review",
  "accepted",
  "rejected",
];

export const STATUS_LABEL: Record<ApplicationStatus, string> = {
  not_started: "Not started",
  in_progress: "In progress",
  submitted: "Submitted",
  in_review: "In review",
  accepted: "Accepted",
  rejected: "Rejected",
};

export const STATUS_PROGRESS: Record<ApplicationStatus, number> = {
  not_started: 0,
  in_progress: 40,
  submitted: 75,
  in_review: 90,
  accepted: 100,
  rejected: 100,
};

export const STATUS_BADGE_CLASSES: Record<ApplicationStatus, string> = {
  not_started: "bg-neutral-50 text-neutral-800",
  in_progress: "bg-info-50 text-info-800",
  submitted: "bg-primary-50 text-primary-800",
  in_review: "bg-warning-50 text-warning-800",
  accepted: "bg-success-50 text-success-800",
  rejected: "bg-danger-50 text-danger-800",
};

export type MatchTier = "strong" | "possible" | "low";

export function getMatchTier(scorePercent: number): MatchTier {
  if (scorePercent >= 70) return "strong";
  if (scorePercent >= 40) return "possible";
  return "low";
}

export const MATCH_TIER_LABEL: Record<MatchTier, string> = {
  strong: "Strong match",
  possible: "Possible match",
  low: "Low match",
};

export const MATCH_TIER_BADGE_CLASSES: Record<MatchTier, string> = {
  strong: "bg-success-50 text-success-800",
  possible: "bg-warning-50 text-warning-800",
  low: "bg-neutral-50 text-neutral-800",
};

export type DeadlineTone = "danger" | "warning" | "info";
