"use client";

import { useState } from "react";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router";

type TabType = "deposit" | "withdraw" | "commission";

interface Transaction {
  id: string;
  date: string; 
  amount: number;
  status: string; 
}


const depositData: Transaction[] = [
  { id: "1", date: "2025-07-11 19:04:00", amount: 1000000, status: "pending" },
  { id: "2", date: "2025-07-05 21:29:03", amount: 100000, status: "pending" },
  { id: "3", date: "2025-07-05 21:25:48", amount: 11500, status: "pending" },
  { id: "4", date: "2025-07-04 22:47:11", amount: 800000, status: "pending" },
  { id: "5", date: "2025-06-24 23:30:04", amount: 100000, status: "pending" },
  { id: "6", date: "2025-03-21 19:10:59", amount: 1235678, status: "pending" },
  { id: "7", date: "2024-10-15 21:46:38", amount: 11500, status: "pending" },
];

const withdrawData: Transaction[] = [
  { id: "1", date: "2025-07-10 14:12:00", amount: -50000, status: "pending" },
  { id: "2", date: "2025-07-02 09:45:15", amount: -150000, status: "pending" },
  { id: "3", date: "2025-06-28 16:20:33", amount: -75000, status: "pending" },
];

const commissionData: Transaction[] = [
  { id: "1", date: "2025-07-09 11:10:45", amount: 1200, status: "pending" },
  { id: "2", date: "2025-07-01 10:05:20", amount: 950, status: "pending" },
  { id: "3", date: "2025-06-25 08:25:00", amount: 1320, status: "pending" },
];

export default function AccountHistory() {
  const [activeTab, setActiveTab] = useState<TabType>("deposit");

  const getData = () => {
    switch (activeTab) {
      case "deposit":
        return depositData;
      case "withdraw":
        return withdrawData;
      case "commission":
        return commissionData;
      default:
        return [];
    }
  };

  const getAmountColor = (_amount: number) => {
    if (activeTab === "withdraw") return "text-red-500";
    if (activeTab === "commission") return "text-blue-500";
    return "text-green-500";
  };

  const formatAmount = (amount: number) => {
    const formatted = amount.toLocaleString("en-IN", {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    });
    return activeTab === "withdraw" ? `-₹${Math.abs(amount)}` : `+₹${formatted}`;
  };

  const data = getData();

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <div className="sticky top-0 bg-white border-b border-gray-200 z-10">
        <div className="flex items-center justify-between p-4 max-w-md mx-auto">
        <Link to={"/account"}>
        <Button
            variant="ghost"
            size="sm"
            className="p-2 hover:bg-gray-100 rounded-full"
          >
            <ArrowLeft className="h-5 w-5" />
          </Button>
        </Link>
          <h1 className="text-lg font-bold text-gray-900">Account Details</h1>
          <div className="w-9" />
        </div>

        {/* Tabs */}
        <div className="bg-black">
          <div className="max-w-md mx-auto flex">
            {(["deposit", "withdraw", "commission"] as TabType[]).map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`flex-1 py-3 text-sm font-medium capitalize ${
                  activeTab === tab
                    ? "text-white border-b-2 border-white"
                    : "text-gray-400 hover:text-gray-200"
                }`}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="max-w-md mx-auto p-4 space-y-3">
        {data.length === 0 ? (
          <div className="text-center text-gray-500 py-6">No records found</div>
        ) : (
          data.map((item) => (
            <div
              key={item.id}
              className="flex justify-between items-center border border-gray-200 rounded-lg px-4 py-3"
            >
              <span className="text-gray-600 text-sm">{item.date}</span>
              <div className="flex items-center gap-2">
                <span className={`font-medium ${getAmountColor(item.amount)}`}>
                  {formatAmount(item.amount)}
                </span>
                <span className="text-green-600 text-sm font-medium">
                  (Pending)
                </span>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
}
