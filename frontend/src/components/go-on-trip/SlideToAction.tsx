"use client"

import { useState } from 'react'
import { motion, type PanInfo } from 'framer-motion'

interface SlideToActionProps {
  onComplete: () => void
}

export default function SlideToAction({ onComplete }: SlideToActionProps) {
  const [isCompleted, setIsCompleted] = useState(false)
  const [dragX, setDragX] = useState(0)

  const sliderWidth = 280 // Total slider width
  const buttonSize = 56 // Button diameter
  const trackWidth = sliderWidth - buttonSize - 8 // Available track width (minus padding)

  const handleDragEnd = (info: any) => {
    const threshold = trackWidth * 0.8 // 80% completion threshold

    if (info.point.x >= threshold) {
      // Completed
      setIsCompleted(true)
      setDragX(trackWidth)
      onComplete()

      // Reset after 2 seconds
      setTimeout(() => {
        setIsCompleted(false)
        setDragX(0)
      }, 2000)
    } else {
      // Snap back
      setDragX(0)
    }
  }

  return (
    <div className="flex justify-center">
      <div
        className="relative bg-gray-900 rounded-full flex items-center overflow-hidden"
        style={{ width: sliderWidth, height: 64 }}
      >
        {/* Background track with progress */}
        <motion.div
          className="absolute left-0 top-0 h-full bg-red-600 rounded-full opacity-20"
          initial={{ width: buttonSize + 8 }}
          animate={{
            width: isCompleted ? sliderWidth : Math.max(buttonSize + 8, dragX + buttonSize + 8)
          }}
          transition={{ duration: 0.2 }}
        />

        {/* Slide button */}
        <motion.div
          className={`absolute left-1 top-1 rounded-full flex items-center justify-center cursor-grab active:cursor-grabbing z-10 ${isCompleted ? 'bg-green-600' : 'bg-red-600'
            }`}
          style={{ width: buttonSize, height: buttonSize }}
          drag="x"
          dragConstraints={{ left: 0, right: trackWidth }}
          dragElastic={0.1}
          dragMomentum={false}

          onDrag={(_event, info: PanInfo) => {
            setDragX(Math.max(0, Math.min(info.point.x, trackWidth)));
          }}
          onDragEnd={handleDragEnd}
          animate={{
            x: dragX,
            scale: isCompleted ? 1.1 : 1
          }}
          transition={{
            x: { duration: isCompleted ? 0.3 : 0.5, ease: "easeOut" },
            scale: { duration: 0.2 }
          }}
          whileDrag={{ scale: 1.05 }}
        >
          <span>{'>'}</span>
        </motion.div>

        {/* Text content */}
        <div className="flex-1 flex items-center justify-between px-20">
          <span className="text-white font-medium text-base">
            {isCompleted ? 'Completed!' : 'Set out immediately'}
          </span>

          <div className="flex items-center space-x-0.5">
          </div>
        </div>
      </div>
    </div>
  )
}
