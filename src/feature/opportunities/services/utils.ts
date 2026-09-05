export function formatDaysLeft(daysLeft: number): string {
  if (daysLeft === 1) return "1 day left";
  if (daysLeft < 30) return `${daysLeft} days left`;
  const months = Math.round(daysLeft / 30);
  return months === 1 ? "1 month left" : `${months} months left`;
}

export type MatchTier = "strong" | "possible" | "low";

export function getMatchTier(percent: number): MatchTier {
  if (percent >= 70) return "strong";
  if (percent >= 40) return "possible";
  return "low";
}

export const MATCH_BADGE_CLASSES: Record<MatchTier, string> = {
  strong: "bg-success-600",
  possible: "bg-warning-600",
  low: "bg-neutral-600",
};
