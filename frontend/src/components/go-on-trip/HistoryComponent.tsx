"use client"

import { useState } from "react"
import { ArrowLeft } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { dummyTickets } from "../../data/dummy-tickets"
import type { TabType, Ticket } from "@/types/Ticket"

interface HistoryComponentProps {
  onBack: () => void
}

export default function HistoryComponent({ onBack }: HistoryComponentProps) {
  const [activeTab, setActiveTab] = useState<TabType>('all')

  const getFilteredTickets = (): Ticket[] => {
    switch (activeTab) {
      case 'completed':
        return dummyTickets.filter(ticket => ticket.status === 'completed')
      case 'pending':
        return dummyTickets.filter(ticket => ticket.status === 'pending')
      case 'all':
      default:
        return dummyTickets
    }
  }

  const filteredTickets = getFilteredTickets()

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'completed':
        return 'text-green-500'
      case 'pending':
        return 'text-orange-500'
      case 'cancelled':
        return 'text-red-500'
      default:
        return 'text-gray-500'
    }
  }

  const getStatusText = (status: string) => {
    return status.charAt(0).toUpperCase() + status.slice(1)
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <div className="sticky top-0 bg-white border-b border-gray-200 z-10">
        <div className="flex items-center justify-between p-4 max-w-md mx-auto md:max-w-2xl lg:max-w-4xl">
          <Button
            variant="ghost"
            size="sm"
            onClick={onBack}
            className="p-2 hover:bg-gray-100 rounded-full"
          >
            <ArrowLeft className="h-5 w-5" />
          </Button>
          <h1 className="text-lg md:text-xl font-bold text-gray-900">History</h1>
          <div className="w-9" /> {/* Spacer for centering */}
        </div>

        {/* Tabs */}
        <div className="bg-black">
          <div className="max-w-md mx-auto md:max-w-2xl lg:max-w-4xl">
            <div className="flex">
              {(['all', 'pending', 'completed'] as TabType[]).map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`flex-1 py-3 px-4 text-sm md:text-base font-medium capitalize transition-colors ${
                    activeTab === tab
                      ? 'text-white border-b-2 border-white'
                      : 'text-gray-400 hover:text-gray-200'
                  }`}
                >
                  {tab}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="p-4 max-w-md mx-auto md:max-w-2xl lg:max-w-4xl">
        {filteredTickets.length === 0 ? (
          <div className="text-center py-12">
            <div className="text-gray-400 text-lg md:text-xl mb-2">No Data</div>
            <div className="text-gray-500 text-sm md:text-base">
              {activeTab === 'pending' 
                ? 'No pending tickets found' 
                : `No ${activeTab} tickets found`}
            </div>
          </div>
        ) : (
          <div className="space-y-4">
            {filteredTickets.map((ticket) => (
              <Card key={ticket.id} className="shadow-sm border border-gray-200">
                <CardContent className="p-4 md:p-6">
                  <div className="flex justify-between items-start mb-3">
                    <div>
                      <h3 className="font-bold text-gray-900 text-base md:text-lg">
                        {ticket.type}
                      </h3>
                      <p className="text-gray-600 text-sm md:text-base">
                        {ticket.route.from} → {ticket.route.to}
                      </p>
                    </div>
                    <span className={`text-sm md:text-base font-medium ${getStatusColor(ticket.status)}`}>
                      {getStatusText(ticket.status)}
                    </span>
                  </div>
                  
                  <div className="space-y-1 text-sm md:text-base text-gray-700">
                    <div className="flex justify-between">
                      <span>Ticket number:</span>
                      <span className="font-medium">{ticket.ticketNumber}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Total amount:</span>
                      <span className="font-medium">
                        {ticket.currency}{ticket.totalAmount.toFixed(2)}
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span>Total commission:</span>
                      <span className="font-medium">
                        {ticket.currency}{ticket.totalCommission.toFixed(2)}
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span>Date:</span>
                      <span className="font-medium">{ticket.date}</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}
