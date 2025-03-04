"use client"

import { motion, AnimatePresence } from "framer-motion"
import { Card } from "@/components/ui/card"
import type { MemoryCard } from "@/types"
import styles from "./memory-card.module.css"
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

  return (
    <div className={styles.cardContainer}>
      <motion.div
        initial={{ rotateY: 0 }}
        animate={{
          rotateY: isFlipped ? 180 : 0,
          scale: card.isHighlighted ? 1.1 : 1,
        }}
        transition={{ duration: 0.3 }}
        className={styles.cardInner}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        <Card
          className={cn(
            styles.card,
            styles[size],
            card.isMatched && styles.matched,
            isFlipped && styles.flipped,
            !isFlipped && !card.isMatched && styles.default,
            card.isHighlighted && styles.highlighted,
          )}
          onClick={handleClick}
        >
          <div className={cn(styles.cardOverlay, card.isHighlighted && styles.pulse)} />
          <AnimatePresence>
            {isFlipped && (
              <motion.div
                initial={{ opacity: 0, rotateY: 180 }}
                animate={{ opacity: 1, rotateY: 180 }}
                exit={{ opacity: 0, rotateY: 180 }}
                className={styles.iconWrapper}
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

