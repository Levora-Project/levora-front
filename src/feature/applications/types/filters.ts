import type { ApplicationStatus } from "./status";
import type { ApplicationSummary } from "./application";

// "submitted" is a valid ApplicationStatus but never appears in the
// product's status set shown to users (see STATUS_LABEL) — left out of
// the filter options for the same reason.
export const FILTERABLE_STATUSES: ApplicationStatus[] = [
  "not_started",
  "in_progress",
  "in_review",
  "accepted",
  "rejected",
];

export const FILTERABLE_TYPES: ApplicationSummary["type"][] = [
  "Scholarship",
  "Internship",
];

export interface ApplicationFilterState {
  search: string;
  status: ApplicationStatus | "all";
  type: ApplicationSummary["type"] | "all";
}

export const DEFAULT_APPLICATION_FILTERS: ApplicationFilterState = {
  search: "",
  status: "all",
  type: "all",
};
