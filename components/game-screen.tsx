import { Button } from "@/components/ui/button"
import { MemoryCardComponent } from "./memory-card"
import { Timer } from "./timer"
import type { MemoryCard } from "@/types"
import { getGridConfig } from "@/utils/helpers"
import { Lightbulb } from "lucide-react"
import { cn } from "@/lib/utils"

interface GameScreenProps {
  cards: MemoryCard[]
  flippedIndexes: number[]
  matches: number
  numPairs: number
  onCardClick: (index: number) => void
  onBack: () => void
  onRestart: () => void
  isRunning: boolean
  onTimeTick: (time: number) => void
  timerKey: number
  userName?: string
  difficulty: string
  moves: number
  onUseClue: () => void
  cluesRemaining: number
  isShuffling?: boolean
}

export function GameScreen({
  cards,
  flippedIndexes,
  matches,
  numPairs,
  onCardClick,
  onBack,
  onRestart,
  isRunning,
  onTimeTick,
  timerKey,
  userName,
  difficulty,
  moves,
  onUseClue,
  cluesRemaining,
  isShuffling = false,
}: GameScreenProps) {
  const { cols } = getGridConfig(cards.length)
  const cardSize = cols > 6 ? "small" : cols > 4 ? "medium" : "large"
  const canUseClue = flippedIndexes.length === 1 && cluesRemaining > 0
  const clueButtonTooltip = !cluesRemaining
    ? "No clues remaining"
    : flippedIndexes.length === 0
      ? "Flip a card first to use clue"
      : flippedIndexes.length === 2
        ? "Cannot use clue while checking match"
        : "Click to reveal matching card"

  return (
    <div className="container mx-auto px-4 py-6 md:py-8 text-center space-y-8 md:space-y-10">
      <div className="space-y-4">
        <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white">Memory Match</h1>
        {userName && <p className="text-lg md:text-xl text-white/90">Player: {userName}</p>}
        <div className="flex flex-col md:flex-row items-center justify-center gap-4 text-base md:text-lg">
          <p className="text-white">
            Matches: {matches} of {numPairs}
          </p>
          <Timer isRunning={isRunning} onTick={onTimeTick} resetKey={timerKey} />
          <p className="text-white">Moves: {moves}</p>
          <Button
            onClick={onUseClue}
            disabled={!canUseClue}
            className="bg-white/20 hover:bg-white/30 text-white font-medium border border-white/30 hover:border-white/50"
            title={clueButtonTooltip}
          >
            <Lightbulb className={cn("w-4 h-4 mr-2", canUseClue ? "text-yellow-400" : "text-white/50")} />
            Clue ({cluesRemaining})
          </Button>
        </div>
      </div>

      <div
        className={cn(
          "grid gap-2 md:gap-4 p-4 md:p-6 rounded-xl bg-white/10 backdrop-blur-sm mx-auto",
          isShuffling && "scale-95 opacity-90",
        )}
        style={{
          gridTemplateColumns: `repeat(${cols}, minmax(0, 1fr))`,
          maxWidth: cols <= 6 ? `${cols * 120}px` : "900px",
        }}
      >
        {cards.map((card, index) => (
          <div key={card.id} className="flex items-center justify-center">
            <MemoryCardComponent
              card={card}
              isFlipped={card.isMatched || flippedIndexes.includes(index)}
              onClick={() => onCardClick(index)}
              size={cardSize}
            />
          </div>
        ))}
      </div>

      <div className="flex flex-col md:flex-row gap-6 justify-center items-center">
        <Button
          onClick={onBack}
          variant="outline"
          size="lg"
          className="w-full md:w-auto h-12 px-8 bg-white/20 hover:bg-white/30 text-white font-medium border-2 border-white/30 hover:border-white/50"
        >
          Back to Menu
        </Button>
        <Button
          onClick={onRestart}
          variant="outline"
          size="lg"
          className="w-full md:w-auto h-12 px-8 bg-white/20 hover:bg-white/30 text-white font-medium border-2 border-white/30 hover:border-white/50"
        >
          Restart Game
        </Button>
      </div>
    </div>
  )
}

