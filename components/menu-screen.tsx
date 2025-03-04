import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { DIFFICULTY_CONFIG } from "@/utils/constants"
import type { Difficulty } from "@/types"
import { Home } from "lucide-react"

interface MenuScreenProps {
  userName?: string
  onStartGame: (pairs: number, difficulty: Difficulty) => void
  onShowLeaderboard: () => void
  onReturnHome: () => void
}

export function MenuScreen({ userName, onStartGame, onShowLeaderboard, onReturnHome }: MenuScreenProps) {
  const difficultyColors = {
    easy: "from-emerald-800/90 to-emerald-900/90 hover:from-emerald-700/90 hover:to-emerald-800/90 border-emerald-600/50",
    medium: "from-amber-800/90 to-amber-900/90 hover:from-amber-700/90 hover:to-amber-800/90 border-amber-600/50",
    hard: "from-red-800/90 to-red-900/90 hover:from-red-700/90 hover:to-red-800/90 border-red-600/50",
  }

  const difficultyIcons = {
    easy: "🌟",
    medium: "🔥",
    hard: "⚡",
  }

  return (
    <div className="container mx-auto px-4 py-8 text-center space-y-6">
      <div className="flex flex-col items-center space-y-2">
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">Memory Match</h1>
        {userName && <p className="text-xl md:text-2xl text-white mb-4">Welcome, {userName}!</p>}
        <Button
          onClick={onReturnHome}
          variant="ghost"
          className="text-white/70 hover:text-white hover:bg-white/10 mb-4"
        >
          <Home className="w-4 h-4 mr-2" />
          Change Player
        </Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 max-w-6xl mx-auto">
        {(Object.entries(DIFFICULTY_CONFIG) as [Difficulty, typeof DIFFICULTY_CONFIG.easy][]).map(
          ([difficulty, config]) => (
            <Card
              key={difficulty}
              className={`bg-gradient-to-br border-2 transition-all duration-300 ${difficultyColors[difficulty]}`}
              role="region"
              aria-label={`${config.label} difficulty level`}
            >
              <CardHeader className="p-4 md:p-6">
                <CardTitle className="text-lg md:text-xl text-white flex items-center justify-center gap-2">
                  <span aria-hidden="true">{difficultyIcons[difficulty]}</span>
                  {config.label}
                </CardTitle>
                <CardDescription className="text-white/90 font-medium text-sm md:text-base">
                  Time Bonus: {config.timeBonus}s per pair
                </CardDescription>
              </CardHeader>
              <CardContent className="p-4 md:p-6 space-y-2">
                {config.pairs.map((pairs) => (
                  <Button
                    key={pairs}
                    onClick={() => onStartGame(pairs, difficulty)}
                    className="w-full h-10 md:h-12 bg-white/20 hover:bg-white/30 text-white font-medium border border-white/30 hover:border-white/50 text-sm md:text-base"
                    aria-label={`Start ${config.label} game with ${pairs} pairs`}
                  >
                    {pairs} Pairs
                  </Button>
                ))}
              </CardContent>
            </Card>
          ),
        )}
      </div>

      <Button
        onClick={onShowLeaderboard}
        className="mt-6 md:mt-8 h-12 px-6 bg-white/20 hover:bg-white/30 text-white font-medium border-2 border-white/30 hover:border-white/50 text-base md:text-lg"
      >
        View Leaderboard
      </Button>
    </div>
  )
}

