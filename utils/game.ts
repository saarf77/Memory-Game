import type { MemoryCard } from "@/types"
import { DIFFICULTY_CONFIG } from "./constants"

export const shuffleUnmatchedCards = (cards: MemoryCard[]): MemoryCard[] => {
  // Separate matched and unmatched cards
  const matchedCards = cards.filter((card) => card.isMatched)
  const unmatchedCards = cards.filter((card) => !card.isMatched)

  // Shuffle unmatched cards
  const shuffledUnmatched = [...unmatchedCards]
    .sort(() => Math.random() - 0.5)
    .map((card, index) => ({
      ...card,
      id: unmatchedCards[index].id, // Preserve original IDs for matching
    }))

  // Combine matched and shuffled unmatched cards
  return [...matchedCards, ...shuffledUnmatched]
}

export const calculateScore = (
  pairs: number,
  time: number,
  moves: number,
  difficulty: keyof typeof DIFFICULTY_CONFIG,
): number => {
  const config = DIFFICULTY_CONFIG[difficulty]
  const perfectMoves = pairs * 2
  const expectedTime = perfectMoves * 2

  // Base score calculation
  const moveScore = Math.max(0, 1000 * (perfectMoves / moves))
  const timeScore = Math.max(0, 1000 * (expectedTime / time))
  const pairBonus = pairs * 100

  // Apply difficulty multiplier
  const baseScore = (moveScore + timeScore + pairBonus) * config.scoreMultiplier

  return Math.round(baseScore)
}

export const findMatchingCard = (cards: MemoryCard[], selectedCard: MemoryCard): number => {
  return cards.findIndex(
    (card) => !card.isMatched && !card.isHighlighted && card.id !== selectedCard.id && card.icon === selectedCard.icon,
  )
}

