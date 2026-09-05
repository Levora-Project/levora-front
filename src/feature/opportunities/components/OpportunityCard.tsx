import Image from "next/image";
import { Bookmark, Calendar } from "lucide-react";

import MatchBadge from "./MatchBadge";
import { OpportunitySummary } from "../types/opportunity";
import { formatDaysLeft } from "../services/utils";

export function OpportunityCard({
  opportunity,
}: {
  opportunity: OpportunitySummary;
}) {
  return (
    <div className="flex flex-col bg-white shadow-card rounded-lg overflow-hidden">
      <div className="relative w-full h-40">
        <Image
          src={opportunity.imageUrl}
          alt={opportunity.title}
          fill
          sizes="(min-width: 640px) 50vw, 100vw"
          className="object-cover"
        />
        <div className="top-0 absolute inset-x-0 flex justify-between items-start p-3">
          <MatchBadge percent={opportunity.matchScore} />
          <button
            type="button"
            aria-label="Save opportunity"
            className="flex justify-center items-center bg-white shadow-card rounded-md w-8 h-8 text-neutral-600 hover:text-primary-800 transition-colors shrink-0"
          >
            <Bookmark size={16} strokeWidth={1.75} />
          </button>
        </div>
      </div>

      <div className="flex flex-col gap-3 p-5">
        <div>
          <h3 className="text-h3">{opportunity.title}</h3>
          <p className="mt-1 text-neutral-600 text-small line-clamp-2">
            {opportunity.description}
          </p>
        </div>

        <div className="flex justify-between items-center text-small">
          <span className="flex items-center gap-1.5 text-neutral-600">
            <Calendar size={14} strokeWidth={1.75} />
            {formatDaysLeft(opportunity.daysLeft)}
          </span>
          <span className="font-medium text-neutral-700">
            {opportunity.location}
          </span>
        </div>
      </div>
    </div>
  );
}
