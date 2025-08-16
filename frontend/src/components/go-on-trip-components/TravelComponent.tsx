"use client"

import { Button } from "@/components/ui/button"
import { useState } from "react"
import HistoryComponent from "./HistoryComponent"
import SlideToAction from "./SlideToAction"
import AccountModal from "./AccountModal"

export default function TravelComponent() {
  const [showHistory, setShowHistory] = useState(false)
  const [showAccountModal, setShowAccountModal] = useState(false)

  if (showHistory) {
    return <HistoryComponent onBack={() => setShowHistory(false)} />
  }

  return (
    <div className="bg-white flex flex-col px-4 py-2">
      <div className="w-full max-w-md mx-auto text-center md:max-w-lg lg:max-w-xl">
        <div className="">
          <h1 className="text-2xl md:text-3xl font-bold text-blue-500 tracking-wide">
            Cruise
          </h1>
        </div>

        <div className="space-y-3">
          <h2 className="text-xl md:text-2xl lg:text-3xl font-bold text-gray-900 leading-tight">
            Start Traveling Now
          </h2>
          <p className="text-sm md:text-base text-gray-600 leading-relaxed px-2">
            Get flights and hotels worldwide for your trip with the best deals
          </p>
        </div>

        <div className="flex gap-4 justify-center pt-4">
          <Button 
          onClick={()=>setShowAccountModal(true)}
            variant="outline" 
            className="px-6 py-2 md:px-8 md:py-3 rounded-full border-2 border-gray-300 text-gray-700 hover:bg-gray-50 font-medium"
          >
            Account
          </Button>
          <Button 
            variant="outline" 
            className="px-6 py-2 md:px-8 md:py-3 rounded-full border-2 border-gray-300 text-gray-700 hover:bg-gray-50 font-medium"
            onClick={() => setShowHistory(true)}
          >
            History
          </Button>
        </div>

        <div className="pt-8 pb-4">
          <div className="relative w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 mx-auto rounded-full">
            <img 
              src="giphy.gif"
              alt="Rotating globe with airplane"
              className="w-full h-full object-contain rounded-full"
            />
          </div>
        </div>
        <div className="pt-4">
          <SlideToAction 
            onComplete={() => {
              console.log('Slide action completed - API call would be made here')
            }}
          />
        </div>

          <AccountModal 
          open={showAccountModal} 
          onOpenChange={setShowAccountModal} 
        />
      </div>
    </div>
  )
}
