import { ApplicationsStatus } from "./ApplicationsStatus";

export function OverviewPanel() {
  return (
    <div className="bg-transparent shadow-none p-0 border-0">
      <div className="space-y-5">
        <div>
          <h1 className="font-semibold text-neutral-900 text-5xl leading-none tracking-[-0.04em]">
            Hello Abdallah
          </h1>
          <p className="mt-1 text-gray-500 text-md">
            Track your applications, deadlines, and progress at a glance.
          </p>
        </div>
        <ApplicationsStatus />
      </div>
    </div>
  );
}
