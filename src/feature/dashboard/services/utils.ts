import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import { DeadlineTone } from "../types/status";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function getDeadlineTone(daysLeft: number): DeadlineTone {
  if (daysLeft <= 2) return "danger";
  if (daysLeft <= 7) return "warning";
  return "info";
}

export function formatDeadline(daysLeft: number): string {
  if (daysLeft <= 0) return "Ends today";
  if (daysLeft === 1) return "Ends tomorrow";
  return `Ends in ${daysLeft} days`;
}
