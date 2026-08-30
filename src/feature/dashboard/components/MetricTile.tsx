import type { LucideIcon } from "lucide-react";
import { cn } from "../services/utils";

export interface MetricTileProps {
  icon: LucideIcon;
  label: string;
  value: number | string;
  className?: string;
  iconContainerClassName?: string;
  iconClassName?: string;
}

export function MetricTile({
  icon: Icon,
  label,
  value,
  className,
  iconContainerClassName,
  iconClassName,
}: MetricTileProps) {
  return (
    <div
      className={cn(
        "flex flex-col justify-between bg-white shadow-sm hover:shadow-md p-4 sm:p-5 border border-gray-200 rounded-lg transition-all hover:-translate-y-0.5 duration-200 ease-out",
        className,
      )}
    >
      <div className="flex items-center gap-3">
        <div
          className={cn(
            "flex justify-center items-center bg-primary-50 rounded-lg w-10 h-10 text-primary-800",
            iconContainerClassName,
          )}
        >
          <Icon
            className={cn("w-5 h-5", iconClassName)}
            strokeWidth={2}
            aria-hidden="true"
          />
        </div>
        <span className="font-semibold text-neutral-800 text-small">
          {label}
        </span>
      </div>
      <div className="mt-5 sm:mt-6">
        <p className="font-bold text-neutral-900 text-2xl sm:text-3xl md:text-4xl tracking-normal">
          {value}
        </p>
      </div>
    </div>
  );
}
