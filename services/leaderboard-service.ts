import type { Score } from "@/types"

export class LeaderboardService {
  private static STORAGE_KEY = "memory-game-scores"

  static async getScores(): Promise<Score[]> {
    try {
      // In a static deployment, we'll only use localStorage
      if (typeof window === "undefined") return []

      const saved = localStorage.getItem(this.STORAGE_KEY)
      return saved ? JSON.parse(saved) : []
    } catch (error) {
      console.error("Error fetching scores:", error)
      return []
    }
  }

  static async saveScore(score: Score): Promise<void> {
    try {
      // In a static deployment, we'll only use localStorage
      if (typeof window === "undefined") return

      const currentScores = await this.getScores()
      currentScores.push(score)

      // Sort scores by score (descending) and then by time (ascending)
      currentScores.sort((a, b) => {
        if (a.score !== b.score) return b.score - a.score
        return a.time - b.time
      })

      // Keep only top 100 scores
      const topScores = currentScores.slice(0, 100)
      localStorage.setItem(this.STORAGE_KEY, JSON.stringify(topScores))
    } catch (error) {
      console.error("Error saving score:", error)
    }
  }
}

