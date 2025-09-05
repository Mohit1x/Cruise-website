"use client"

import { useNavigate } from "react-router-dom"
import { ArrowLeft } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function VipLevelPage() {
  const navigate = useNavigate()

  return (
    <div className="min-h-screen bg-gray-100 p-4">
      <div className="flex items-center justify-center relative mb-8 pt-4">
        <Button
          variant="ghost"
          size="sm"
          onClick={() => navigate("/")}
          className="absolute left-0 p-2 hover:bg-gray-200"
        >
          <ArrowLeft className="w-5 h-5 text-gray-700" />
        </Button>
        <h1 className="text-lg font-semibold text-gray-800">VIP level</h1>
      </div>

      <div className="max-w-sm mx-auto">
        <div className="bg-white rounded-2xl shadow-lg overflow-hidden mb-6">
          <div
            className="relative h-48 bg-cover bg-center"
            style={{
              backgroundImage: `linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)), url('/auth-bg.png')`,
            }}
          >
            <div className="absolute inset-0 flex flex-col justify-center items-start p-6">
              <div className="text-white">
                <p className="text-sm opacity-90 mb-1">Your current level</p>
                <h2 className="text-2xl font-bold">VIP6</h2>
              </div>
            </div>

            <div className="absolute bottom-0 left-0 right-0 bg-black/50 p-4">
              <p className="text-white text-sm mb-2">135000 more to upgrade to VIP7</p>
              <div className="flex items-center gap-2">
                <div className="flex-1 bg-gray-600 rounded-full h-2">
                  <div className="bg-yellow-400 h-2 rounded-full" style={{ width: "10%" }}></div>
                </div>
                <span className="text-white text-xs">15000/150000</span>
              </div>
            </div>
          </div>

          <div className="p-6">
            <h3 className="text-gray-800 font-semibold mb-4">VIP6 Benefits:</h3>
            <div className="space-y-3">
              <div className="flex justify-between items-center">
                <span className="text-gray-600">Total ticket:</span>
                <span className="text-gray-800 font-medium">20</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-gray-600">Profit rate:</span>
                <span className="text-gray-800 font-medium">1.8%</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-gray-600">Point period:</span>
                <span className="text-gray-800 font-medium">365 days</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
