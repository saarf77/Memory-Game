import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { DIFFICULTY_CONFIG } from "@/utils/constants"
import type { Difficulty } from "@/types"
import { Home, Trophy } from "lucide-react"

interface MenuScreenProps {
  userName?: string
  onStartGame: (pairs: number, difficulty: Difficulty) => void
  onShowLeaderboard: () => void
  onReturnHome: () => void
}

const DIFFICULTY_STYLES: Record<Difficulty, { card: string; btn: string; badge: string }> = {
  easy: {
    card: "from-emerald-700/80 to-emerald-900/90 border-emerald-500/40",
    btn: "bg-emerald-600/40 hover:bg-emerald-500/50 border-emerald-400/40 hover:border-emerald-300/60",
    badge: "bg-emerald-500/30 text-emerald-100",
  },
  medium: {
    card: "from-amber-600/80 to-amber-900/90 border-amber-500/40",
    btn: "bg-amber-600/40 hover:bg-amber-500/50 border-amber-400/40 hover:border-amber-300/60",
    badge: "bg-amber-500/30 text-amber-100",
  },
  hard: {
    card: "from-red-700/80 to-red-900/90 border-red-500/40",
    btn: "bg-red-600/40 hover:bg-red-500/50 border-red-400/40 hover:border-red-300/60",
    badge: "bg-red-500/30 text-red-100",
  },
}

const DIFFICULTY_ICONS: Record<Difficulty, string> = {
  easy: "🌟",
  medium: "🔥",
  hard: "⚡",
}

const DIFFICULTY_DESC: Record<Difficulty, string> = {
  easy: "Perfect for beginners",
  medium: "A real challenge",
  hard: "Cards shuffle too!",
}

export function MenuScreen({ userName, onStartGame, onShowLeaderboard, onReturnHome }: MenuScreenProps) {
  return (
    <div className="container mx-auto px-4 py-10 text-center max-w-5xl">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        className="mb-8 space-y-1"
      >
        <h1 className="text-4xl md:text-5xl font-extrabold text-white drop-shadow-lg tracking-tight">Mind Pairs</h1>
        {userName && (
          <p className="text-xl text-white/90 font-medium">
            Welcome back, <span className="text-white font-bold">{userName}</span>!
          </p>
        )}
        <button
          onClick={onReturnHome}
          className="inline-flex items-center gap-1.5 mt-2 text-white/55 hover:text-white/90 text-sm transition-colors"
        >
          <Home className="w-3.5 h-3.5" />
          Change Player
        </button>
      </motion.div>

      {/* Difficulty cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-5 mb-8">
        {(Object.entries(DIFFICULTY_CONFIG) as [Difficulty, typeof DIFFICULTY_CONFIG.easy][]).map(
          ([difficulty, config], colIdx) => {
            const styles = DIFFICULTY_STYLES[difficulty]
            return (
              <motion.div
                key={difficulty}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: colIdx * 0.1, duration: 0.4 }}
                className={`rounded-2xl bg-gradient-to-br border-2 ${styles.card} p-5 flex flex-col gap-3`}
              >
                {/* Difficulty header */}
                <div className="space-y-1">
                  <div className="text-4xl">{DIFFICULTY_ICONS[difficulty]}</div>
                  <h2 className="text-xl font-bold text-white">{config.label}</h2>
                  <p className="text-white/65 text-sm">{DIFFICULTY_DESC[difficulty]}</p>
                  <span className={`inline-block px-2.5 py-0.5 rounded-full text-xs font-semibold ${styles.badge}`}>
                    +{config.timeBonus}s bonus per pair
                  </span>
                </div>

                {/* Pair buttons */}
                <div className="grid grid-cols-2 gap-2 mt-1">
                  {config.pairs.map((pairs) => (
                    <button
                      key={pairs}
                      onClick={() => onStartGame(pairs, difficulty)}
                      className={`h-11 rounded-xl border text-white font-semibold text-sm transition-all duration-200 hover:scale-105 active:scale-95 ${styles.btn}`}
                      aria-label={`Start ${config.label} game with ${pairs} pairs`}
                    >
                      {pairs} Pairs
                    </button>
                  ))}
                </div>
              </motion.div>
            )
          },
        )}
      </div>

      {/* Leaderboard button */}
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.4 }}>
        <Button
          onClick={onShowLeaderboard}
          className="h-12 px-8 bg-white/15 hover:bg-white/25 text-white font-semibold border-2 border-white/30 hover:border-white/50 rounded-2xl text-base transition-all duration-200"
        >
          <Trophy className="w-4 h-4 mr-2" />
          View Leaderboard
        </Button>
      </motion.div>
    </div>
  )
}

