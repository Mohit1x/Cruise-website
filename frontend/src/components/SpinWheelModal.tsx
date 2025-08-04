"use client"

import { useState, useRef } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Confetti } from "./confetti"

interface Prize {
  id: number
  label: string
  color: string
  textColor: string
}

interface SpinWheelModalProps {
  isOpen: boolean
  onClose: () => void
}

export function SpinWheelModal({ isOpen, onClose }: SpinWheelModalProps) {
  const [isSpinning, setIsSpinning] = useState(false)
  const [selectedPrize, setSelectedPrize] = useState<Prize | null>(null)
  const [showConfetti, setShowConfetti] = useState(false)
  const [rotation, setRotation] = useState(0)
  const wheelRef = useRef<HTMLDivElement>(null)

  const prizes: Prize[] = [
    { id: 1, label: "1st Prize", color: "#FFD700", textColor: "#8B4513" },
    { id: 2, label: "2nd Prize", color: "#FF6B6B", textColor: "#FFFFFF" },
    { id: 3, label: "3rd Prize", color: "#4ECDC4", textColor: "#FFFFFF" },
    { id: 4, label: "4th Prize", color: "#45B7D1", textColor: "#FFFFFF" },
    { id: 5, label: "5th Prize", color: "#96CEB4", textColor: "#FFFFFF" },
    { id: 6, label: "6th Prize", color: "#FFEAA7", textColor: "#8B4513" },
    { id: 7, label: "7th Prize", color: "#DDA0DD", textColor: "#FFFFFF" },
    { id: 8, label: "8th Prize", color: "#98D8C8", textColor: "#FFFFFF" },
  ]

  const segmentAngle = 360 / prizes.length

  const handleSpin = () => {
    if (isSpinning) return

    setIsSpinning(true)
    setSelectedPrize(null)

    // Random number of full rotations (3-6) plus random final position
    const randomRotations = Math.floor(Math.random() * 4) + 3
    const randomFinalAngle = Math.random() * 360
    const totalRotation = randomRotations * 360 + randomFinalAngle

    // Calculate which prize is selected based on final angle
    const normalizedAngle = (360 - (randomFinalAngle % 360)) % 360
    const selectedIndex = Math.floor(normalizedAngle / segmentAngle)
    const winner = prizes[selectedIndex]

    setRotation((prev) => prev + totalRotation)

    // Show result after spin completes
    setTimeout(() => {
      setIsSpinning(false)
      setSelectedPrize(winner)
      setShowConfetti(true)
    }, 3000)
  }

  const handleClose = () => {
    if (!isSpinning) {
      setSelectedPrize(null)
      setShowConfetti(false)
      onClose()
    }
  }

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={handleClose}
          />

          <motion.div
            className="fixed inset-0 flex items-center justify-center z-50 p-4"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            transition={{ type: "spring", damping: 20, stiffness: 300 }}
          >
            <div className="bg-gradient-to-br from-red-800 to-red-900 rounded-2xl p-6 max-w-md w-full shadow-2xl">
              {/* Header */}
              <div className="text-center mb-6">
                <h2 className="text-2xl font-bold text-white mb-2">Deposit Amount</h2>
                <h3 className="text-3xl font-bold text-yellow-300">Rewards</h3>
              </div>

              {/* Spin Wheel */}
              <div className="relative flex justify-center mb-6">
                <div className="relative">
                  {/* Wheel Base */}
                  <div className="w-80 h-80 rounded-full bg-gradient-to-br from-yellow-400 to-orange-500 p-4 shadow-2xl">
                    <motion.div
                      ref={wheelRef}
                      className="w-full h-full rounded-full relative overflow-hidden bg-white shadow-inner"
                      animate={{ rotate: rotation }}
                      transition={{
                        duration: isSpinning ? 3 : 0,
                        ease: isSpinning ? "easeOut" : "linear",
                      }}
                    >
                      {/* Wheel Segments */}
                      {prizes.map((prize, index) => {
                        const angle = index * segmentAngle
                        return (
                          <div
                            key={prize.id}
                            className="absolute w-full h-full"
                            style={{
                              transform: `rotate(${angle}deg)`,
                              clipPath: `polygon(50% 50%, 50% 0%, ${50 + 50 * Math.cos((segmentAngle * Math.PI) / 180)}% ${50 - 50 * Math.sin((segmentAngle * Math.PI) / 180)}%)`,
                            }}
                          >
                            <div
                              className="w-full h-full flex items-start justify-center pt-4"
                              style={{ backgroundColor: prize.color }}
                            >
                              <span
                                className="text-sm font-bold transform -rotate-90 origin-center"
                                style={{
                                  color: prize.textColor,
                                  transform: `rotate(${segmentAngle / 2}deg)`,
                                  marginTop: "50px",
                                  marginLeft: "50px",
                                }}
                              >
                                {prize.label}
                              </span>
                            </div>
                          </div>
                        )
                      })}

                      {/* Center Button */}
                      <div className="absolute inset-0 flex items-center justify-center">
                        <Button
                          onClick={handleSpin}
                          disabled={isSpinning}
                          className="w-16 h-16 rounded-full bg-gradient-to-br from-red-500 to-red-600 hover:from-red-600 hover:to-red-700 text-white font-bold text-lg shadow-lg border-4 border-white disabled:opacity-50"
                        >
                          {isSpinning ? (
                            <motion.div
                              animate={{ rotate: 360 }}
                              transition={{ duration: 1, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
                              className="w-4 h-4 border-2 border-white border-t-transparent rounded-full"
                            />
                          ) : (
                            "GO"
                          )}
                        </Button>
                      </div>
                    </motion.div>
                  </div>

                  {/* Pointer */}
                  <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-2">
                    <div className="w-0 h-0 border-l-4 border-r-4 border-b-8 border-l-transparent border-r-transparent border-b-red-600"></div>
                  </div>
                </div>
              </div>

              {/* Result Display */}
              <AnimatePresence>
                {selectedPrize && (
                  <motion.div
                    className="text-center mb-4"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                  >
                    <div className="bg-white rounded-lg p-4 shadow-lg">
                      <h4 className="text-lg font-bold text-gray-800 mb-2">🎉 Congratulations! 🎉</h4>
                      <p className="text-2xl font-bold" style={{ color: selectedPrize.color }}>
                        You won {selectedPrize.label}!
                      </p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Close Button */}
              <div className="flex justify-center">
                <Button
                  onClick={handleClose}
                  disabled={isSpinning}
                  variant="outline"
                  size="icon"
                  className="rounded-full bg-white/20 border-white/30 text-white hover:bg-white/30"
                >
                  <X className="w-5 h-5" />
                </Button>
              </div>
            </div>
          </motion.div>

          <Confetti isActive={showConfetti} onComplete={() => setShowConfetti(false)} />
        </>
      )}
    </AnimatePresence>
  )
}
