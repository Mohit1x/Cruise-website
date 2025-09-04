"use client"

import { X } from "lucide-react"
import { Dialog, DialogContent } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"

interface CreditScoreModalProps {
  isOpen: boolean
  onClose: () => void
  creditScore: number
}

export function CreditScoreModal({ isOpen, onClose, creditScore }: CreditScoreModalProps) {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-md max-w-[90vw] p-0 bg-transparent border-none">
        <div className="bg-gray-900 rounded-2xl p-6 relative overflow-hidden">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-yellow-400/20 to-transparent rounded-full"></div>
            <div className="absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-tr from-yellow-400/20 to-transparent rounded-full"></div>
          </div>

          <div className="text-center mb-8 relative z-10">
            <h2 className="text-white text-xl font-bold tracking-wider">CREDIT SCORE</h2>
          </div>

          <div className="flex justify-center mb-8 relative z-10">
            <div className="relative">
              <div className="relative w-64 h-48 flex items-center justify-center">
                <img
                  src="/credit-score.png"
                  alt="Credit Score Badge"
                  className="w-full h-full object-contain drop-shadow-2xl"
                />

                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-6xl font-bold text-white drop-shadow-lg">{creditScore}</div>
                </div>
              </div>
            </div>
          </div>

          <div className="mb-6 relative z-10">
            <div className="flex justify-between text-white text-sm mb-2">
              <span>0</span>
              <span>100</span>
            </div>
            <div className="w-full bg-gray-700 rounded-full h-2">
              <div
                className="bg-gradient-to-r from-yellow-500 to-yellow-400 h-2 rounded-full transition-all duration-500"
                style={{ width: `${creditScore}%` }}
              ></div>
            </div>
          </div>

          <div className="relative z-10 mb-8">
            <h3 className="text-yellow-400 font-semibold text-center mb-3">Credit point rule</h3>
            <p className="text-white/80 text-sm leading-relaxed text-center px-2">
              Regularly check your credit points to ensure that your credit point status effectively helps each user to
              withdraw money and take the initiative. Contact the customer service to communicate if there are any
              enquiries.
            </p>
          </div>

          <div className="flex justify-center relative z-10">
            <Button
              onClick={onClose}
              variant="ghost"
              size="icon"
              className="w-12 h-12 rounded-full border-2 border-white/30 hover:border-white/50 hover:bg-white/10"
            >
              <X className="h-6 w-6 text-white" />
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}
