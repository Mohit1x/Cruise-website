import { Card, CardContent } from "@/components/ui/card";
import { ArrowUpRight } from "lucide-react";

const statisticsData = [
  {
    title: "Total First Deposits",
    value: "2",
    subtitle: "First deposits (today) : 0",
    subtitle2: "First deposits (yesterday) : 0",
    color: "sky-400",
  },
  {
    title: "Total Users",
    value: "50875",
    subtitle: "25 new users added today",
    subtitle2: "331 new users yesterday",
    color: "pink-400",
  },
  {
    title: "Total Orders",
    value: "1126538",
    subtitle: "646 new orders today",
    subtitle2: "6241 new orders yesterday",
    color: "purple-500",
  },
  {
    title: "Total Amount of Orders",
    value: "13552780207",
    subtitle: "New orders (today) : 6153358",
    subtitle2: "New orders (yesterday) : 5658715",
    color: "indigo-600",
  },
  {
    title: "User recharge",
    value: "422500",
    subtitle: "Today's new recharge 0",
    subtitle2: "Yesterday's new recharge 0",
    color: "orange-400",
  },
  {
    title: "Total Top-ups",
    value: "2",
    subtitle: "Today's top-up number 0",
    subtitle2: "Yesterday's top-up number 0",
    color: "yellow-400",
  },
  {
    title: "User withdrawals",
    value: "160954547",
    subtitle: "24051 new withdrawals today",
    subtitle2: "Yesterday's new withdrawals : 549,739",
    color: "red-500",
  },
  {
    title: "Number of withdrawals",
    value: "31865",
    subtitle: "Number of withdrawals today: 5",
    subtitle2: "The number of people withdrawing cash yesterday was",
    color: "orange-500",
  },
  {
    title: "Commission for grabbing orders",
    value: "273222477.13",
    subtitle: "Today's new commission is 43559.7",
    subtitle2: "Yesterday new commission was 386840.25",
    color: "red-800",
  },
  {
    title: "Interest Treasure Transfer",
    value: "0",
    subtitle: "Today's new interest treasure 0",
    subtitle2: "Yesterday's new interest treasure 0",
    color: "green-500",
  },
  {
    title: "Subordinate rebate",
    value: "597498863.79",
    subtitle: "Today's new commission is 15068.19",
    subtitle2: "Yesterday new commission was 178432.08",
    color: "gray-400",
  },
  {
    title: "User's total balance",
    value: "2328479741.1368",
    subtitle: "Today's interest treasure transfer out 0",
    subtitle2: "Today's interest income is 0",
    color: "gray-700",
  },
];

export default function StatisticsGrid() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3 sm:gap-4">
      {statisticsData.map((stat, index) => (
        <Card
          key={index}
          className={`bg-white text-${stat.color} border-0 min-h-[140px] sm:min-h-[160px]`}
        >
          <CardContent className="p-3 sm:p-4 h-full">
            <div className="flex items-start justify-between h-full">
              {/* Left Section */}
              <div className="h-full flex-2 justify-around min-w-0 flex flex-col  pl-2">
                <h3 className="text-gray-500 text-xs sm:text-sm font-medium opacity-90 leading-tight">
                  {stat.title}
                </h3>
                <div className="text-2xl sm:text-3xl lg:text-3xl font-bold break-words">
                  {stat.value}
                </div>
                {(stat.subtitle || stat.subtitle2) && (
                  <div className="text-xs opacity-80 text-gray-500 leading-tight space-y-0.5 mt-2">
                    {stat.subtitle && <div>{stat.subtitle}</div>}
                    {stat.subtitle2 && <div>{stat.subtitle2}</div>}
                  </div>
                )}
              </div>

              {/* Right Icon */}
              <div className={`ml-2 sm:ml-4 opacity-60 flex-shrink-0 bg-black/5 rounded-full p-1 sm:p-2`}>
                <ArrowUpRight className={`w-6 h-6 sm:w-8 sm:h-8 `} />
              </div>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}
