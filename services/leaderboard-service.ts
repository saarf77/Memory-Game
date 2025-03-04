import type { Score } from "@/types"

export class LeaderboardService {
  private static STORAGE_KEY = "memory-game-scores"
  private static API_URL = "/api/leaderboard"

  static async getScores(): Promise<Score[]> {
    try {
      const response = await fetch(this.API_URL)
      if (!response.ok) throw new Error("Failed to fetch scores")
      return response.json()
    } catch (error) {
      console.error("Error fetching scores:", error)
      // Fallback to local storage if API fails
      if (typeof window === "undefined") return []
      const saved = localStorage.getItem(this.STORAGE_KEY)
      return saved ? JSON.parse(saved) : []
    }
  }

  static async saveScore(score: Score): Promise<void> {
    try {
      const response = await fetch(this.API_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(score),
      })

      if (!response.ok) throw new Error("Failed to save score")

      // Update local storage as backup
      const scores = await response.json()
      localStorage.setItem(this.STORAGE_KEY, JSON.stringify(scores))
    } catch (error) {
      console.error("Error saving score:", error)
      // Fallback to local storage if API fails
      const scores = this.getScores()
      scores.then((currentScores) => {
        currentScores.push(score)
        currentScores.sort((a, b) => {
          if (a.pairs !== b.pairs) return b.pairs - a.pairs
          return a.time - b.time
        })
        localStorage.setItem(this.STORAGE_KEY, JSON.stringify(currentScores.slice(0, 10)))
      })
    }
  }
}

