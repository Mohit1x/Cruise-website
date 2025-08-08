import { Card, CardContent } from '@/components/ui/card'
import { Users, ShoppingCart, DollarSign, CreditCard, TrendingUp, TrendingDown, Percent, Wallet } from 'lucide-react'
import { useSidebar } from '@/components/ui/custom-sidebar' // Import useSidebar

const statisticsData = [
  {
    title: 'Number of first deposits',
    value: '2',
    subtitle: "Today's first deposit number 0",
    subtitle2: "Yesterday's first deposit number 0",
    color: 'bg-sky-400',
    icon: CreditCard
  },
  {
    title: 'Total number of users',
    value: '50875',
    subtitle: '25 new users added today',
    subtitle2: '331 new users yesterday',
    color: 'bg-pink-400',
    icon: Users
  },
  {
    title: 'Total order volume',
    value: '1126538',
    subtitle: '646 new orders today',
    subtitle2: '6241 new orders yesterday',
    color: 'bg-purple-500',
    icon: ShoppingCart
  },
  {
    title: 'Total order amount',
    value: '13552780207',
    subtitle: 'The total amount of new orders today is 6153358',
    subtitle2: 'The total amount of new orders yesterday was 5658715',
    color: 'bg-indigo-600',
    icon: DollarSign
  },
  {
    title: 'User recharge',
    value: '422500',
    subtitle: "Today's new recharge 0",
    subtitle2: "Yesterday's new recharge 0",
    color: 'bg-orange-400',
    icon: TrendingUp
  },
  {
    title: 'Number of people who recharged',
    value: '2',
    subtitle: "Today's top-up number 0",
    subtitle2: "Yesterday's top-up number 0",
    color: 'bg-yellow-400',
    icon: Users
  },
  {
    title: 'User withdrawals',
    value: '160954547',
    subtitle: '24051 new withdrawals today',
    subtitle2: "Yesterday's new withdrawals : 549,739",
    color: 'bg-red-500',
    icon: TrendingDown
  },
  {
    title: 'Number of withdrawals',
    value: '31865',
    subtitle: 'Number of withdrawals today: 5',
    subtitle2: 'The number of people withdrawing cash yesterday was',
    color: 'bg-orange-500',
    icon: Wallet
  },
  {
    title: 'Commission for grabbing orders',
    value: '273222477.13',
    subtitle: "Today's new commission is 43559.7",
    subtitle2: 'Yesterday new commission was 386840.25',
    color: 'bg-red-800',
    icon: Percent
  },
  {
    title: 'Interest Treasure Transfer',
    value: '0',
    subtitle: "Today's new interest treasure 0",
    subtitle2: "Yesterday's new interest treasure 0",
    color: 'bg-green-500',
    icon: DollarSign
  },
  {
    title: 'Subordinate rebate',
    value: '597498863.79',
    subtitle: "Today's new commission is 15068.19",
    subtitle2: 'Yesterday new commission was 178432.08',
    color: 'bg-gray-400',
    icon: Percent
  },
  {
    title: "User's total balance",
    value: '2328479741.1368',
    subtitle: "Today's interest treasure transfer out 0",
    subtitle2: "Today's interest income is 0",
    color: 'bg-gray-700',
    icon: Wallet
  }
]

export default function StatisticsGrid() {
  const { isMobile } = useSidebar() 

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3 sm:gap-4">
      {statisticsData.map((stat, index) => (
        <Card key={index} className={`${stat.color} text-white border-0 min-h-[140px] sm:min-h-[160px]`}>
          <CardContent className="p-3 sm:p-4 h-full">
            <div className="flex items-start justify-between h-full">
              <div className="flex-1 min-w-0">
                <h3 className="text-xs sm:text-sm font-medium mb-2 opacity-90 leading-tight">
                  {stat.title}
                </h3>
                <div className="text-lg sm:text-xl lg:text-2xl font-bold mb-2 break-words">
                  {stat.value}
                </div>
                {!isMobile && (
                  <div className="text-xs opacity-80 space-y-1">
                    <div className="leading-tight">{stat.subtitle}</div>
                    <div className="leading-tight">{stat.subtitle2}</div>
                  </div>
                )}
              </div>
              <div className="ml-2 sm:ml-4 opacity-60 flex-shrink-0">
                <stat.icon size={24} className="sm:w-8 sm:h-8" />
              </div>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}
