"use client"

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { X, Wallet, HandCoins, Ticket, RefreshCw } from 'lucide-react'
import { dummyAccountData } from "@/data/dummy-account"

interface AccountModalProps {
  open: boolean
  onOpenChange: (open: boolean) => void
}

export default function AccountModal({ open, onOpenChange }: AccountModalProps) {
  const accountData = dummyAccountData

  const accountItems = [
    {
      icon: Wallet,
      label: "My assets",
      value: accountData.myAssets,
      showCurrency: true
    },
    {
      icon: HandCoins,
      label: "Today earning",
      value: accountData.todayEarning,
      showCurrency: true
    },
    {
      icon: Ticket,
      label: "Ticket Number",
      value: accountData.ticketNumber,
      showCurrency: false
    },
    {
      icon: RefreshCw,
      label: "Withdrawal amount",
      value: accountData.withdrawalAmount,
      showCurrency: true
    }
  ]

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-md mx-auto p-0 bg-transparent border-none shadow-none">
        <div className="bg-blue-600 rounded-lg p-6 text-white relative">
          <DialogHeader className="text-center mb-6">
            <DialogTitle className="text-xl md:text-2xl font-bold text-white">
              ACCOUNT DETAILS
            </DialogTitle>
          </DialogHeader>
          
          <div className="space-y-4">
            {accountItems.map((item, index) => {
              const IconComponent = item.icon
              return (
                <div key={index} className="flex items-center gap-4 p-3 bg-blue-700/30 rounded-lg">
                  <div className="flex-shrink-0">
                    <IconComponent className="h-6 w-6 md:h-7 md:w-7 text-white" />
                  </div>
                  <div className="flex-1">
                    <div className="text-sm md:text-base text-blue-100 mb-1">
                      {item.label}
                    </div>
                    <div className="text-lg md:text-xl font-bold text-white">
                      {item.showCurrency && item.value > 0 ? accountData.currency : ''}
                      {item.value.toLocaleString()}
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
          
          <div className="flex justify-center mt-8">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => onOpenChange(false)}
              className="h-12 w-12 rounded-full bg-black/20 hover:bg-black/30 text-white border-2 border-white/30"
            >
              <X className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}
