"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import {
  Heart,
  Star,
  Sun,
  Moon,
  Cloud,
  Flower2,
  Music,
  Zap,
  Umbrella,
  Rocket,
  Gift,
  Cake,
  Pizza,
  Crown,
  Diamond,
  Bird,
  type LucideIcon,
} from "lucide-react"
import { toast } from "sonner"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"

type GameState = "menu" | "playing" | "leaderboard"
type Score = { pairs: number; time: number; date: string }

type MemoryCard = {
  id: number
  icon: LucideIcon
  isMatched: boolean
  color: string
}

const ICONS_CONFIG = [
  { icon: Heart, color: "text-rose-500" },
  { icon: Star, color: "text-amber-500" },
  { icon: Sun, color: "text-yellow-500" },
  { icon: Moon, color: "text-purple-500" },
  { icon: Cloud, color: "text-sky-500" },
  { icon: Flower2, color: "text-pink-500" },
  { icon: Music, color: "text-blue-500" },
  { icon: Zap, color: "text-yellow-400" },
  { icon: Umbrella, color: "text-cyan-500" },
  { icon: Rocket, color: "text-orange-500" },
  { icon: Gift, color: "text-red-500" },
  { icon: Cake, color: "text-rose-400" },
  { icon: Pizza, color: "text-amber-400" },
  { icon: Crown, color: "text-yellow-300" },
  { icon: Diamond, color: "text-blue-400" },
  { icon: Bird, color: "text-teal-400" },
]

const createCards = (numPairs: number) => {
  const selectedIcons = ICONS_CONFIG.slice(0, numPairs)
  const cards: MemoryCard[] = []

  selectedIcons.forEach(({ icon, color }, index) => {
    cards.push({ id: index * 2, icon, color, isMatched: false }, { id: index * 2 + 1, icon, color, isMatched: false })
  })

  return cards.sort(() => Math.random() - 0.5)
}

const formatTime = (time: number) => {
  const minutes = Math.floor(time / 60)
  const seconds = time % 60
  return `${minutes}:${seconds.toString().padStart(2, "0")}`
}

const getLeaderboard = (): Score[] => {
  if (typeof window === "undefined") return []
  const saved = localStorage.getItem("memory-game-scores")
  return saved ? JSON.parse(saved) : []
}

const saveScore = (score: Score) => {
  const scores = getLeaderboard()
  scores.push(score)
  scores.sort((a, b) => {
    if (a.pairs !== b.pairs) return b.pairs - a.pairs
    return a.time - b.time
  })
  localStorage.setItem("memory-game-scores", JSON.stringify(scores.slice(0, 10)))
}

export default function MemoryGame() {
  const [gameState, setGameState] = useState<GameState>("menu")
  const [numPairs, setNumPairs] = useState(3)
  const [cards, setCards] = useState<MemoryCard[]>([])
  const [flippedIndexes, setFlippedIndexes] = useState<number[]>([])
  const [matches, setMatches] = useState(0)
  const [isChecking, setIsChecking] = useState(false)
  const [time, setTime] = useState(0)
  const [isRunning, setIsRunning] = useState(false)
  const [leaderboard, setLeaderboard] = useState<Score[]>([])

  useEffect(() => {
    setLeaderboard(getLeaderboard())
  }, [])

  useEffect(() => {
    let interval: NodeJS.Timeout
    if (isRunning) {
      interval = setInterval(() => {
        setTime((t) => t + 1)
      }, 1000)
    }
    return () => clearInterval(interval)
  }, [isRunning])

  const startGame = (pairs: number) => {
    setNumPairs(pairs)
    setCards(createCards(pairs))
    setFlippedIndexes([])
    setMatches(0)
    setTime(0)
    setIsRunning(true)
    setGameState("playing")
  }

  const handleCardClick = (clickedIndex: number) => {
    if (isChecking || cards[clickedIndex].isMatched) return
    if (flippedIndexes.includes(clickedIndex)) return
    if (flippedIndexes.length === 2) return

    const newFlipped = [...flippedIndexes, clickedIndex]
    setFlippedIndexes(newFlipped)

    if (newFlipped.length === 2) {
      setIsChecking(true)
      const [firstIndex, secondIndex] = newFlipped
      const firstCard = cards[firstIndex]
      const secondCard = cards[secondIndex]

      if (firstCard.icon === secondCard.icon) {
        setTimeout(() => {
          setCards(
            cards.map((card, index) =>
              index === firstIndex || index === secondIndex ? { ...card, isMatched: true } : card,
            ),
          )
          setFlippedIndexes([])
          setMatches((m) => {
            const newMatches = m + 1
            if (newMatches === numPairs) {
              setIsRunning(false)
              const score = { pairs: numPairs, time, date: new Date().toLocaleDateString() }
              saveScore(score)
              setLeaderboard(getLeaderboard())
              toast("🎉 Congratulations! You've completed the game! 🎈", {
                className: "bg-orange-900 text-orange-100 border-orange-700",
              })
            }
            return newMatches
          })
          setIsChecking(false)
        }, 500)
      } else {
        setTimeout(() => {
          setFlippedIndexes([])
          setIsChecking(false)
        }, 1000)
      }
    }
  }

  if (gameState === "menu") {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen p-4 space-y-8 bg-gradient-to-br from-orange-500 via-rose-500 to-pink-500">
        <div className="text-center space-y-4">
          <h1 className="text-5xl font-bold text-white mb-8">Memory Match</h1>
          <div className="grid grid-cols-2 gap-4 md:grid-cols-4 max-w-2xl">
            {[3, 4, 6, 8, 10, 12, 14, 16].map((pairs) => (
              <Button
                key={pairs}
                onClick={() => startGame(pairs)}
                className="bg-white/10 hover:bg-white/20 text-white border-2 border-white/20 hover:border-white/40"
              >
                {pairs} Pairs
              </Button>
            ))}
          </div>
          <Button
            onClick={() => setGameState("leaderboard")}
            className="mt-4 bg-white/10 hover:bg-white/20 text-white border-2 border-white/20 hover:border-white/40"
          >
            View Leaderboard
          </Button>
        </div>
      </div>
    )
  }

  if (gameState === "leaderboard") {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen p-4 space-y-8 bg-gradient-to-br from-orange-500 via-rose-500 to-pink-500">
        <div className="bg-white/10 p-6 rounded-xl backdrop-blur-sm max-w-2xl w-full">
          <h2 className="text-3xl font-bold text-white mb-4">Leaderboard</h2>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="text-white">Pairs</TableHead>
                <TableHead className="text-white">Time</TableHead>
                <TableHead className="text-white">Date</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {leaderboard.map((score, i) => (
                <TableRow key={i}>
                  <TableCell className="text-white">{score.pairs}</TableCell>
                  <TableCell className="text-white">{formatTime(score.time)}</TableCell>
                  <TableCell className="text-white">{score.date}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
          <Button
            onClick={() => setGameState("menu")}
            className="mt-4 bg-white/10 hover:bg-white/20 text-white border-2 border-white/20 hover:border-white/40"
          >
            Back to Menu
          </Button>
        </div>
      </div>
    )
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-4 space-y-8 bg-gradient-to-br from-orange-500 via-rose-500 to-pink-500">
      <div className="text-center space-y-4">
        <h1 className="text-4xl font-bold text-white">Memory Match</h1>
        <div className="flex items-center justify-center gap-4">
          <p className="text-white">
            Matches: {matches} of {numPairs}
          </p>
          <p className="text-white">Time: {formatTime(time)}</p>
        </div>
      </div>

      <div
        className={`grid grid-cols-${Math.min(6, numPairs * 2)} gap-3 md:gap-4 p-4 md:p-6 rounded-xl bg-white/10 backdrop-blur-sm`}
      >
        {cards.map((card, index) => (
          <motion.div
            key={card.id}
            initial={{ rotateY: 0 }}
            animate={{
              rotateY: card.isMatched || flippedIndexes.includes(index) ? 180 : 0,
            }}
            transition={{ duration: 0.3 }}
            className="perspective-1000"
          >
            <Card
              className={`relative w-16 h-16 md:w-20 md:h-20 cursor-pointer transform-style-3d transition-all duration-300 ${
                card.isMatched
                  ? "bg-white/20 border-white/30"
                  : flippedIndexes.includes(index)
                    ? "bg-white/15 border-white/25"
                    : "bg-white/10 border-white/20 hover:bg-white/15 hover:border-white/30"
              }`}
              onClick={() => handleCardClick(index)}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-transparent via-white/5 to-white/10" />
              <AnimatePresence>
                {(card.isMatched || flippedIndexes.includes(index)) && (
                  <motion.div
                    initial={{ opacity: 0, rotateY: 180 }}
                    animate={{ opacity: 1, rotateY: 180 }}
                    exit={{ opacity: 0, rotateY: 180 }}
                    className="absolute inset-0 flex items-center justify-center backface-hidden"
                  >
                    <card.icon
                      className={`w-8 h-8 md:w-10 md:h-10 ${
                        card.isMatched ? `${card.color} filter drop-shadow-[0_0_8px_rgba(255,255,255,0.3)]` : card.color
                      }`}
                    />
                  </motion.div>
                )}
              </AnimatePresence>
            </Card>
          </motion.div>
        ))}
      </div>

      <div className="flex gap-4">
        <Button
          onClick={() => setGameState("menu")}
          variant="outline"
          size="lg"
          className="bg-white/10 hover:bg-white/20 text-white border-2 border-white/20 hover:border-white/40"
        >
          Back to Menu
        </Button>
        <Button
          onClick={() => startGame(numPairs)}
          variant="outline"
          size="lg"
          className="bg-white/10 hover:bg-white/20 text-white border-2 border-white/20 hover:border-white/40"
        >
          Restart Game
        </Button>
      </div>
    </div>
  )
}

