import type { MemoryCard } from "@/types"
import { ICONS_CONFIG } from "@/utils/constants"

export class GameService {
  static createCards(numPairs: number): MemoryCard[] {
    const selectedIcons = ICONS_CONFIG.slice(0, numPairs)
    const cards: MemoryCard[] = []

    selectedIcons.forEach(({ icon, color }, index) => {
      cards.push({ id: index * 2, icon, color, isMatched: false }, { id: index * 2 + 1, icon, color, isMatched: false })
    })

    return cards.sort(() => Math.random() - 0.5)
  }

  static checkForMatch(firstCard: MemoryCard, secondCard: MemoryCard): boolean {
    return firstCard.icon === secondCard.icon
  }
}

