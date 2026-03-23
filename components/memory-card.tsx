"use client"

import { motion, AnimatePresence } from "framer-motion"
import type { MemoryCard } from "@/types"
import { cn } from "@/lib/utils"
import { ANIMAL_COMPONENTS } from "./animals"

interface MemoryCardProps {
  card: MemoryCard
  isFlipped: boolean
  onClick: () => void
  onFlip?: () => void
  size?: "small" | "medium" | "large"
}

const SPARKLE_POSITIONS = [
  { angle: 0 }, { angle: 45 }, { angle: 90 }, { angle: 135 },
  { angle: 180 }, { angle: 225 }, { angle: 270 }, { angle: 315 },
]
const SPARKLE_GLYPHS = ["✦", "★", "✦", "★", "✦", "★", "✦", "★"]

function Sparkle({ index }: { index: number }) {
  const rad = (SPARKLE_POSITIONS[index].angle * Math.PI) / 180
  const dist = 52
  const tx = Math.cos(rad) * dist
  const ty = Math.sin(rad) * dist
  const colors = ["text-yellow-300", "text-pink-300", "text-sky-300", "text-green-300",
                  "text-purple-300", "text-orange-300", "text-red-300", "text-teal-300"]
  return (
    <motion.span
      className={cn("absolute text-sm select-none pointer-events-none font-bold", colors[index])}
      style={{ left: "50%", top: "50%", marginLeft: "-0.4em", marginTop: "-0.4em" }}
      initial={{ opacity: 0, x: 0, y: 0, scale: 0 }}
      animate={{ opacity: [0, 1, 1, 0], x: tx, y: ty, scale: [0, 1.5, 1.2, 0] }}
      transition={{ duration: 0.65, ease: "easeOut", delay: index * 0.03 }}
    >
      {SPARKLE_GLYPHS[index]}
    </motion.span>
  )
}

const svgSize = { small: 52, medium: 64, large: 80 }
const cardSize = {
  small: "w-[72px] h-[90px] md:w-[84px] md:h-[104px]",
  medium: "w-[88px] h-[108px] md:w-[100px] md:h-[124px]",
  large: "w-[104px] h-[128px] md:w-[120px] md:h-[148px]",
}
const labelSize = { small: "text-[9px]", medium: "text-[10px]", large: "text-xs" }

export function MemoryCardComponent({ card, isFlipped, onClick, onFlip, size = "medium" }: MemoryCardProps) {
  const handleClick = () => { onClick(); onFlip?.() }
  const AnimalSVG = ANIMAL_COMPONENTS[card.animalId]
  const animalSize = svgSize[size]

  return (
    <div className="relative" style={{ perspective: "800px" }}>
      <motion.div
        animate={{
          rotateY: isFlipped ? 180 : 0,
          scale: card.isHighlighted ? 1.08 : 1,
        }}
        transition={{ duration: 0.35, ease: "easeInOut" }}
        style={{ transformStyle: "preserve-3d" }}
        whileHover={!isFlipped ? { scale: 1.06, y: -3 } : {}}
        whileTap={{ scale: 0.94 }}
        className={cn("relative cursor-pointer", cardSize[size])}
        onClick={handleClick}
      >
        {/* ── CARD BACK ── */}
        <div
          className={cn(
            "absolute inset-0 rounded-2xl border-2 flex flex-col items-center justify-center overflow-hidden shadow-lg",
            "bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 border-white/30",
            card.isHighlighted && "ring-4 ring-yellow-400 shadow-yellow-400/40",
          )}
          style={{ backfaceVisibility: "hidden" }}
        >
          {/* Pattern */}
          <div className="absolute inset-0 opacity-20"
            style={{ backgroundImage: "radial-gradient(circle, white 1px, transparent 1px)", backgroundSize: "12px 12px" }}
          />
          <span className="text-3xl select-none drop-shadow">🐾</span>
        </div>

        {/* ── CARD FRONT ── */}
        <div
          className={cn(
            "absolute inset-0 rounded-2xl border-2 flex flex-col items-center justify-center overflow-hidden shadow-lg",
            card.isMatched
              ? "bg-gradient-to-b from-green-50 to-emerald-100 border-emerald-400"
              : "bg-gradient-to-b from-white to-slate-50 border-slate-200",
          )}
          style={{ backfaceVisibility: "hidden", transform: "rotateY(180deg)" }}
        >
          {/* Illustration area */}
          <div className="flex-1 flex items-center justify-center w-full px-1 pt-1">
            <motion.div
              animate={card.isMatched
                ? { scale: [1, 1.35, 0.9, 1.12, 1], rotate: [0, -10, 10, -5, 0] }
                : {}}
              transition={card.isMatched ? { duration: 0.5, ease: "easeOut" } : {}}
            >
              {AnimalSVG && <AnimalSVG size={animalSize} />}
            </motion.div>
          </div>
          {/* Name label */}
          <div className={cn(
            "w-full text-center font-bold tracking-wide py-1 px-1 rounded-b-2xl",
            labelSize[size],
            card.isMatched
              ? "bg-emerald-400 text-white"
              : "bg-slate-100 text-slate-600",
          )}>
            {card.label}
          </div>
        </div>
      </motion.div>

      {/* Sparkles on match */}
      <AnimatePresence>
        {card.isMatched && SPARKLE_POSITIONS.map((_, i) => <Sparkle key={i} index={i} />)}
      </AnimatePresence>
    </div>
  )
}

