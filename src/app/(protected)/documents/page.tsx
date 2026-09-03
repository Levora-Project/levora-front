import { AiAssistantCard } from "@/feature/dashboard/components/AiAssistantCard";
import { DeadlinesCard } from "@/feature/dashboard/components/DeadlinesCard";
import { OpportunitiesSection } from "@/feature/dashboard/components/OpportunitiesSection";
import { OverviewPanel } from "@/feature/dashboard/components/OverviewPanel";
import { ProfileProgressCard } from "@/feature/dashboard/components/ProfileProgressCard";

export default function DashboardPage() {
  return (
    <div className="gap-6 grid grid-cols-1 xl:grid-cols-[minmax(0,1fr)_350px]">
      <div className="flex flex-col gap-4">
        <div className="gap-4 grid grid-cols-1 xl:grid-cols-[minmax(0,1fr)_350px]">
          <OverviewPanel />
          <AiAssistantCard />
        </div>

        <OpportunitiesSection />
      </div>

      <div className="flex flex-col gap-4 h-full">
        <ProfileProgressCard />
        <DeadlinesCard />
      </div>
    </div>
  );
}
