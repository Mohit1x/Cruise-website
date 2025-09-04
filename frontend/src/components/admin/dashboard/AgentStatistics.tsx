import { useState } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import { Search } from 'lucide-react'

const agentData = [
  {
    name: 'stark',
    cumulativeUsers: 292,
    teamBalance: '1098817085.94',
    todaysRecharge: 0,
    accumulatedRecharge: 0,
    todaysWithdrawal: 0,
    cumulativeWithdrawals: 1542231
  },
  {
    name: 'kumar',
    cumulativeUsers: 2656,
    teamBalance: '139481.1',
    todaysRecharge: 0,
    accumulatedRecharge: 0,
    todaysWithdrawal: 0,
    cumulativeWithdrawals: 9961328
  },
  {
    name: 'obito',
    cumulativeUsers: 2365,
    teamBalance: '-523371.15',
    todaysRecharge: 0,
    accumulatedRecharge: 0,
    todaysWithdrawal: 0,
    cumulativeWithdrawals: 7271514
  }
]

export default function AgentStatistics() {
  const [searchTerm, setSearchTerm] = useState('')
  const [timeFilter, setTimeFilter] = useState('')

  return (
    <Card className='rounded-none'>
      <CardHeader className="p-3 sm:pb-6 flex flex-col sm:flex-row sm:items-center sm:justify-between space-y-3 sm:space-y-0">
        <CardTitle className="text-base sm:text-lg">Agent Statistics</CardTitle>
        <div className="flex flex-col sm:flex-row items-start sm:items-center space-y-3 sm:space-y-0 sm:space-x-4">
          <div className="flex items-center space-x-2 w-full sm:w-auto">
            <span className="text-xs sm:text-sm whitespace-nowrap">Statistical time</span>
            <Select value={timeFilter} onValueChange={setTimeFilter}>
              <SelectTrigger className="w-full sm:w-48 h-8 sm:h-10 text-xs sm:text-sm">
                <SelectValue placeholder="Please select statistical" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="today">Today</SelectItem>
                <SelectItem value="yesterday">Yesterday</SelectItem>
                <SelectItem value="week">This Week</SelectItem>
                <SelectItem value="month">This Month</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div className="flex items-center space-x-2 w-full sm:w-auto">
            <Input
              placeholder="Search..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full sm:w-48 h-8 sm:h-10 text-xs sm:text-sm"
            />
            <Button size="sm" className="h-8 sm:h-10 px-2 sm:px-3">
              <Search className="h-3 w-3 sm:h-4 sm:w-4" />
            </Button>
          </div>
        </div>
      </CardHeader>
      <CardContent className="p-0 sm:p-6 sm:pt-0">
        {/* Mobile Card View */}
        <div className="sm:hidden space-y-3 p-3">
          {agentData.map((agent, index) => (
            <Card key={index} className="p-3">
              <div className="space-y-2">
                <div className="flex justify-between items-center">
                  <span className="font-medium text-sm">{agent.name}</span>
                  <span className={`text-sm font-medium ${agent.teamBalance.startsWith('-') ? 'text-red-500' : 'text-green-600'}`}>
                    {agent.teamBalance}
                  </span>
                </div>
                <div className="grid grid-cols-2 gap-2 text-xs text-gray-600">
                  <div>
                    <div className="font-medium">Users: {agent.cumulativeUsers}</div>
                    <div>Today Recharge: {agent.todaysRecharge}</div>
                    <div>Acc. Recharge: {agent.accumulatedRecharge}</div>
                  </div>
                  <div>
                    <div>Today Withdrawal: {agent.todaysWithdrawal}</div>
                    <div>Cum. Withdrawals: {agent.cumulativeWithdrawals}</div>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>

        <div className="hidden sm:block overflow-x-auto">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="text-xs sm:text-sm">Name</TableHead>
                <TableHead className="text-xs sm:text-sm">Cumulative users</TableHead>
                <TableHead className="text-xs sm:text-sm">Team Balance</TableHead>
                <TableHead className="text-xs sm:text-sm">Today's Recharge</TableHead>
                <TableHead className="text-xs sm:text-sm">Accumulated recharge</TableHead>
                <TableHead className="text-xs sm:text-sm">Today's Withdrawal</TableHead>
                <TableHead className="text-xs sm:text-sm">Cumulative withdrawals</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {agentData.map((agent, index) => (
                <TableRow key={index}>
                  <TableCell className="font-medium text-xs sm:text-sm">{agent.name}</TableCell>
                  <TableCell className="text-xs sm:text-sm">{agent.cumulativeUsers}</TableCell>
                  <TableCell className={`text-xs sm:text-sm ${agent.teamBalance.startsWith('-') ? 'text-red-500' : ''}`}>
                    {agent.teamBalance}
                  </TableCell>
                  <TableCell className="text-xs sm:text-sm">{agent.todaysRecharge}</TableCell>
                  <TableCell className="text-xs sm:text-sm">{agent.accumulatedRecharge}</TableCell>
                  <TableCell className="text-xs sm:text-sm">{agent.todaysWithdrawal}</TableCell>
                  <TableCell className="text-xs sm:text-sm">{agent.cumulativeWithdrawals}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </CardContent>
    </Card>
  )
}
