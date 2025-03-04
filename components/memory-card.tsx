"use client"

import { motion, AnimatePresence } from "framer-motion"
import { Card } from "@/components/ui/card"
import type { MemoryCard } from "@/types"
import { cn } from "@/lib/utils"

interface MemoryCardProps {
  card: MemoryCard
  isFlipped: boolean
  onClick: () => void
  onFlip?: () => void
  size?: "small" | "medium" | "large"
}

export function MemoryCardComponent({ card, isFlipped, onClick, onFlip, size = "medium" }: MemoryCardProps) {
  const handleClick = () => {
    onClick()
    onFlip?.()
  }

  // Size classes
  const sizeClasses = {
    small: "w-14 h-14 md:w-16 md:h-16",
    medium: "w-16 h-16 md:w-20 md:h-20",
    large: "w-20 h-20 md:w-24 md:h-24",
  }

  // Card state classes
  const cardStateClasses = card.isMatched
    ? "bg-white/20 border-white/30"
    : isFlipped
      ? "bg-white/15 border-white/25"
      : "bg-white/10 border-white/20 hover:bg-white/15 hover:border-white/30"

  return (
    <div className="relative perspective-1000">
      <motion.div
        initial={{ rotateY: 0 }}
        animate={{
          rotateY: isFlipped ? 180 : 0,
          scale: card.isHighlighted ? 1.1 : 1,
        }}
        transition={{ duration: 0.3 }}
        className="preserve-3d"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        <Card
          className={cn(
            "relative cursor-pointer transition-all duration-300 preserve-3d w-full h-full",
            sizeClasses[size],
            cardStateClasses,
            card.isHighlighted && "ring-4 ring-yellow-400/50 shadow-lg shadow-yellow-400/20",
          )}
          onClick={handleClick}
        >
          <div
            className={cn(
              "absolute inset-0 bg-gradient-to-br from-transparent via-white/5 to-white/10",
              card.isHighlighted && "animate-pulse",
            )}
          />
          <AnimatePresence>
            {isFlipped && (
              <motion.div
                initial={{ opacity: 0, rotateY: 180 }}
                animate={{ opacity: 1, rotateY: 180 }}
                exit={{ opacity: 0, rotateY: 180 }}
                className="absolute inset-0 flex items-center justify-center backface-hidden"
              >
                <card.icon
                  className={cn(
                    "w-8 h-8 md:w-10 md:h-10",
                    card.color,
                    card.isMatched && "filter drop-shadow-[0_0_8px_rgba(255,255,255,0.3)]",
                  )}
                />
              </motion.div>
            )}
          </AnimatePresence>
        </Card>
      </motion.div>
    </div>
  )
}

