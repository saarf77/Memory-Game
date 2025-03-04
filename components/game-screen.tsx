import { Button } from "@/components/ui/button"
import { MemoryCardComponent } from "./memory-card"
import { Timer } from "./timer"
import type { MemoryCard } from "@/types"
import { getGridConfig } from "@/utils/helpers"
import { Lightbulb } from "lucide-react"
import styles from "./game-screen.module.css"
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
    <div className={styles.container}>
      <div className={styles.header}>
        <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white">Memory Match</h1>
        {userName && <p className={styles.playerName}>Player: {userName}</p>}
        <div className={styles.controls}>
          <p className="text-white">
            Matches: {matches} of {numPairs}
          </p>
          <Timer isRunning={isRunning} onTick={onTimeTick} resetKey={timerKey} />
          <p className="text-white">Moves: {moves}</p>
          <Button onClick={onUseClue} disabled={!canUseClue} className={styles.clueButton} title={clueButtonTooltip}>
            <Lightbulb className={cn(styles.clueIcon, canUseClue ? styles.active : styles.inactive)} />
            Clue ({cluesRemaining})
          </Button>
        </div>
      </div>

      <div
        className={cn(styles.gameGrid, isShuffling && styles.shuffling)}
        style={{
          gridTemplateColumns: `repeat(${cols}, minmax(0, 1fr))`,
          maxWidth: cols <= 6 ? `${cols * 120}px` : "900px",
        }}
      >
        {cards.map((card, index) => (
          <div key={card.id} className={styles.cardWrapper}>
            <MemoryCardComponent
              card={card}
              isFlipped={card.isMatched || flippedIndexes.includes(index)}
              onClick={() => onCardClick(index)}
              size={cardSize}
            />
          </div>
        ))}
      </div>

      <div className={styles.buttonContainer}>
        <Button onClick={onBack} variant="outline" size="lg" className={styles.gameButton}>
          Back to Menu
        </Button>
        <Button onClick={onRestart} variant="outline" size="lg" className={styles.gameButton}>
          Restart Game
        </Button>
      </div>
    </div>
  )
}

