import StatisticsGrid from "@/components/admin/dashboard/StatisticsGrid";
import AgentStatistics from "@/components/admin/dashboard/AgentStatistics";

export default function Dashboard() {
  return (
    <div className="space-y-4 sm:space-y-6  bg-neutral-50">
      <div className=" p-4 sm:p-6">
        <div className="text-xs sm:text-sm text-gray-500 mb-2 sm:mb-4">
          Local time: 2025-08-08 11:11:49
        </div>
        <h2 className="text-base sm:text-lg font-semibold mb-3 sm:mb-4">
          Dashboard Overview
        </h2>
        <StatisticsGrid />
      </div>

      <AgentStatistics />
    </div>
  );
}
