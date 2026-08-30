import {
  CheckCircle2,
  ClipboardList,
  Clock3,
  type LucideIcon,
} from "lucide-react";
import { cn } from "../services/utils";

const metrics: Array<{
  label: string;
  value: string;
  tone: string;
  icon: LucideIcon;
}> = [
  {
    label: "Applications",
    value: "23",
    tone: "bg-[#f4e6c9]",
    icon: ClipboardList,
  },
  {
    label: "Submitted",
    value: "12",
    tone: "bg-[#dfeaf8]",
    icon: CheckCircle2,
  },
  {
    label: "In progress",
    value: "11",
    tone: "bg-[#e7e4e2]",
    icon: Clock3,
  },
];

export function ApplicationsStatus() {
  return (
    <>
      <div className="md:hidden gap-4 grid">
        <div className="flex flex-col gap-3 bg-[#f4e6c9] shadow-card p-4 rounded-[22px]">
          {metrics.map((metric) => {
            const Icon = metric.icon;

            return (
              <div
                key={metric.label}
                className="flex justify-between items-center gap-3 bg-white/20 px-3 py-2 rounded-[18px]"
              >
                <div className="flex items-center gap-3">
                  <div className="flex justify-center items-center bg-neutral-900 rounded-full w-9 h-9 text-white">
                    <Icon className="w-4 h-4" strokeWidth={2.25} />
                  </div>
                  <div>
                    <div className="text-gray-700 text-xs uppercase tracking-[0.08em]">
                      {metric.label}
                    </div>
                    <div className="font-semibold text-neutral-900 text-2xl leading-none">
                      {metric.value}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <div className="hidden gap-4 md:grid md:grid-cols-3">
        {metrics.map((metric) => {
          const Icon = metric.icon;

          return (
            <div
              key={metric.label}
              className={cn(
                "relative flex flex-col justify-between shadow-card px-5 pt-5 pb-4 rounded-[22px] min-h-[170px]",
                metric.tone,
              )}
            >
              <div className="flex justify-between items-start gap-3">
                <span className="font-medium text-neutral-800 text-lg leading-tight">
                  {metric.label}
                </span>
              </div>

              <div className="flex justify-between items-end gap-2">
                <div>
                  <div className="font-semibold text-neutral-900 text-4xl leading-none tracking-[-0.05em]">
                    {metric.value}
                  </div>
                  <div className="mt-2 text-neutral-700 text-sm">
                    {metric.label}
                  </div>
                </div>

                <div className="-right-2 -bottom-2 absolute bg-background p-2 rounded-full w-14 h-14">
                  <button
                    type="button"
                    className="flex justify-center items-center bg-neutral-900 shadow-sm rounded-full w-10 h-10 text-white round shrink-0"
                    aria-label={`View ${metric.label}`}
                  >
                    <Icon className="w-4 h-4" strokeWidth={2.25} />
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
}
