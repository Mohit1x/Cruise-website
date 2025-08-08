import StatisticsGrid from '@/components/dashboard/StatisticsGrid'
import AgentStatistics from '@/components/dashboard/AgentStatistics'

export default function Dashboard() {
  return (
    <div className="space-y-4 sm:space-y-6">
      <div className="text-xs sm:text-sm text-gray-500 mb-2 sm:mb-4">
        Local time: 2025-08-08 11:11:49
      </div>
      
      <div>
        <h2 className="text-base sm:text-lg font-semibold mb-3 sm:mb-4">Mall Statistics</h2>
        <StatisticsGrid />
      </div>
      
      <AgentStatistics />
    </div>
  )
}
