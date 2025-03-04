"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Trophy, Clock, Zap, RotateCcw, Home } from "lucide-react"
import type { GameStats } from "@/types"
import { formatTime } from "@/utils/helpers"
import { DIFFICULTY_CONFIG } from "@/utils/constants"
import { calculatePerformance, getFeedbackMessage } from "@/utils/feedback"

interface GameCompletedProps {
  stats: GameStats
  onPlayAgain: () => void
  onBackToMenu: () => void
}

export function GameCompleted({ stats, onPlayAgain, onBackToMenu }: GameCompletedProps) {
  const timeBonus = DIFFICULTY_CONFIG[stats.difficulty].timeBonus
  const finalScore = Math.max(0, timeBonus * stats.pairs - stats.time)
  const performance = calculatePerformance(stats.pairs, stats.time, stats.moves)
  const feedback = getFeedbackMessage(performance)

  const containerVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.5,
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  }

  return (
    <motion.div initial="hidden" animate="visible" variants={containerVariants} className="text-center space-y-6 p-4">
      <motion.div variants={itemVariants} className="space-y-2">
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{
            type: "spring",
            stiffness: 260,
            damping: 20,
            delay: 0.3,
          }}
          className="text-6xl mb-4"
        >
          {feedback.emoji}
        </motion.div>
        <h2 className="text-4xl font-bold text-white">{feedback.title}</h2>
        <p className="text-xl text-white/90">{feedback.message}</p>
      </motion.div>

      <Card className="bg-white/10 p-6 backdrop-blur-sm space-y-6 max-w-md mx-auto">
        <motion.div variants={itemVariants} className="grid grid-cols-2 gap-4">
          <div className="space-y-2">
            <Trophy className="w-8 h-8 text-yellow-400 mx-auto" />
            <p className="text-white text-sm">Pairs Found</p>
            <p className="text-white text-2xl font-bold">{stats.pairs}</p>
          </div>
          <div className="space-y-2">
            <Clock className="w-8 h-8 text-blue-400 mx-auto" />
            <p className="text-white text-sm">Time</p>
            <p className="text-white text-2xl font-bold">{formatTime(stats.time)}</p>
          </div>
          <div className="space-y-2">
            <Zap className="w-8 h-8 text-yellow-500 mx-auto" />
            <p className="text-white text-sm">Moves</p>
            <p className="text-white text-2xl font-bold">{stats.moves}</p>
          </div>
          <div className="space-y-2">
            <Trophy className="w-8 h-8 text-purple-400 mx-auto" />
            <p className="text-white text-sm">Score</p>
            <p className="text-white text-2xl font-bold">{finalScore}</p>
          </div>
        </motion.div>

        <motion.div variants={itemVariants} className="flex gap-4 justify-center pt-4">
          <Button
            onClick={onPlayAgain}
            className="bg-white/10 hover:bg-white/20 text-white border-2 border-white/20 hover:border-white/40"
          >
            <RotateCcw className="w-4 h-4 mr-2" />
            Play Again
          </Button>
          <Button
            onClick={onBackToMenu}
            className="bg-white/10 hover:bg-white/20 text-white border-2 border-white/20 hover:border-white/40"
          >
            <Home className="w-4 h-4 mr-2" />
            Menu
          </Button>
        </motion.div>
      </Card>
    </motion.div>
  )
}

