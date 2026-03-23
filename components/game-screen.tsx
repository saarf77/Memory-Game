import { Button } from "@/components/ui/button"
import { MemoryCardComponent } from "./memory-card"
import { Timer } from "./timer"
import type { MemoryCard } from "@/types"
import { getGridConfig } from "@/utils/helpers"
import { Lightbulb, RotateCcw, ArrowLeft, Clock, Zap, Star } from "lucide-react"
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

  const progressPct = numPairs > 0 ? (matches / numPairs) * 100 : 0

  return (
    <div className="container mx-auto px-4 py-6 text-center max-w-4xl">
      {/* Header */}
      <div className="mb-5 space-y-1">
        <h1 className="text-2xl md:text-3xl font-extrabold text-white tracking-tight">Mind Pairs</h1>
        {userName && <p className="text-white/70 text-sm">Player: <span className="text-white font-semibold">{userName}</span></p>}
      </div>

      {/* HUD bar */}
      <div className="flex flex-wrap items-center justify-center gap-2 mb-5">
        {/* Pairs matched */}
        <div className="flex items-center gap-1.5 bg-white/10 border border-white/20 rounded-2xl px-3 py-2" title="Pairs found">
          <Star className="w-4 h-4 text-yellow-300" />
          <span className="text-white font-bold text-sm">{matches}/{numPairs}</span>
        </div>

        {/* Timer */}
        <div className="flex items-center gap-1.5 bg-white/10 border border-white/20 rounded-2xl px-3 py-2" title="Time elapsed">
          <Clock className="w-4 h-4 text-sky-300" />
          <Timer isRunning={isRunning} onTick={onTimeTick} resetKey={timerKey} />
        </div>

        {/* Moves */}
        <div className="flex items-center gap-1.5 bg-white/10 border border-white/20 rounded-2xl px-3 py-2" title="Moves made">
          <Zap className="w-4 h-4 text-orange-300" />
          <span className="text-white font-bold text-sm">{moves}</span>
        </div>

        {/* Clue button */}
        <button
          onClick={onUseClue}
          disabled={!canUseClue}
          title={clueButtonTooltip}
          className={cn(
            "flex items-center gap-1.5 rounded-2xl px-3 py-2 border font-semibold text-sm transition-all duration-200",
            canUseClue
              ? "bg-yellow-500/20 border-yellow-400/40 text-yellow-200 hover:bg-yellow-500/30 hover:border-yellow-300/60"
              : "bg-white/5 border-white/15 text-white/35 cursor-not-allowed",
          )}
        >
          <Lightbulb className={cn("w-4 h-4", canUseClue ? "text-yellow-300" : "text-white/30")} />
          <span>{cluesRemaining}</span>
        </button>
      </div>

      {/* Progress bar */}
      <div className="w-full max-w-xs mx-auto mb-5 h-2 rounded-full bg-white/10 overflow-hidden">
        <div
          className="h-full rounded-full bg-white/50 transition-all duration-500"
          style={{ width: `${progressPct}%` }}
        />
      </div>

      {/* Card grid */}
      <div
        className={cn(
          "grid gap-2 md:gap-3 p-4 md:p-5 rounded-2xl bg-white/10 backdrop-blur-sm mx-auto transition-all duration-300",
          isShuffling && "scale-95 opacity-80",
        )}
        style={{
          gridTemplateColumns: `repeat(${cols}, minmax(0, 1fr))`,
          maxWidth: cols <= 6 ? `${cols * 140}px` : "1000px",
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

      {/* Action buttons */}
      <div className="flex gap-3 justify-center items-center mt-6">
        <Button
          onClick={onBack}
          variant="outline"
          className="h-11 px-5 bg-white/10 hover:bg-white/20 text-white font-medium border border-white/25 hover:border-white/45 rounded-xl"
        >
          <ArrowLeft className="w-4 h-4 mr-1.5" />
          Menu
        </Button>
        <Button
          onClick={onRestart}
          variant="outline"
          className="h-11 px-5 bg-white/10 hover:bg-white/20 text-white font-medium border border-white/25 hover:border-white/45 rounded-xl"
        >
          <RotateCcw className="w-4 h-4 mr-1.5" />
          Restart
        </Button>
      </div>
    </div>
  )
}

