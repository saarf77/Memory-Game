"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import type { Score } from "@/types"
import { formatTime } from "@/utils/helpers"
import { Loader2, Trophy, Medal, Award } from "lucide-react"

interface LeaderboardScreenProps {
  scores: Score[]
  onBack: () => void
}

export function LeaderboardScreen({ scores: initialScores, onBack }: LeaderboardScreenProps) {
  const [scores, setScores] = useState<Score[]>([])
  const [sortBy, setSortBy] = useState<"score" | "date">("score")
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const fetchScores = async () => {
      try {
        const response = await fetch("/api/leaderboard")
        if (!response.ok) throw new Error("Failed to fetch scores")
        const data = await response.json()
        setScores(data || []) // Ensure we always have an array
      } catch (err) {
        setError("Failed to load leaderboard")
        console.error("Error fetching scores:", err)
        // Fallback to initial scores if API fails
        setScores(initialScores || [])
      } finally {
        setIsLoading(false)
      }
    }

    fetchScores()
  }, [initialScores])

  const sortedScores = [...(scores || [])].sort((a, b) => {
    if (sortBy === "score") {
      // First sort by score, then by time if scores are equal
      if (b.score !== a.score) {
        return b.score - a.score
      }
      return a.time - b.time
    }
    // Sort by date using timestamp comparison
    return new Date(b.date).getTime() - new Date(a.date).getTime()
  })

  const difficultyColors = {
    easy: "bg-emerald-900/80 text-emerald-100",
    medium: "bg-amber-900/80 text-amber-100",
    hard: "bg-red-900/80 text-red-100",
  }

  const getRankIcon = (index: number) => {
    switch (index) {
      case 0:
        return <Trophy className="w-5 h-5 text-yellow-400" />
      case 1:
        return <Medal className="w-5 h-5 text-gray-300" />
      case 2:
        return <Award className="w-5 h-5 text-amber-600" />
      default:
        return null
    }
  }

  if (error) {
    return (
      <div className="bg-white/10 p-6 rounded-xl backdrop-blur-sm max-w-2xl w-full text-center">
        <h2 className="text-3xl font-bold text-white mb-4">Oops!</h2>
        <p className="text-white mb-4">{error}</p>
        <Button
          onClick={onBack}
          className="bg-white/20 hover:bg-white/30 text-white font-medium border-2 border-white/30 hover:border-white/50"
        >
          Back to Menu
        </Button>
      </div>
    )
  }

  return (
    <div className="bg-white/10 p-6 rounded-xl backdrop-blur-sm max-w-4xl w-full">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-3xl font-bold text-white">Leaderboard</h2>
        <div className="flex gap-2">
          <Button
            onClick={() => setSortBy("score")}
            className={`${
              sortBy === "score" ? "bg-white/30 border-white/50" : "bg-white/20 hover:bg-white/30 border-white/30"
            } text-white`}
          >
            By Score
          </Button>
          <Button
            onClick={() => setSortBy("date")}
            className={`${
              sortBy === "date" ? "bg-white/30 border-white/50" : "bg-white/20 hover:bg-white/30 border-white/30"
            } text-white`}
          >
            By Date
          </Button>
        </div>
      </div>

      {isLoading ? (
        <div className="flex justify-center items-center py-8">
          <Loader2 className="w-8 h-8 text-white animate-spin" />
        </div>
      ) : (
        <div className="overflow-x-auto">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="text-white font-medium">Rank</TableHead>
                <TableHead className="text-white font-medium">Player</TableHead>
                <TableHead className="text-white font-medium">Difficulty</TableHead>
                <TableHead className="text-white font-medium">Pairs</TableHead>
                <TableHead className="text-white font-medium">Time</TableHead>
                <TableHead className="text-white font-medium">Moves</TableHead>
                <TableHead className="text-white font-medium">Score</TableHead>
                <TableHead className="text-white font-medium">Date</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {sortedScores.map((score, i) => (
                <TableRow key={i}>
                  <TableCell className="text-white font-medium">
                    <div className="flex items-center gap-2">
                      {getRankIcon(i)}#{i + 1}
                    </div>
                  </TableCell>
                  <TableCell className="text-white">{score.userName}</TableCell>
                  <TableCell>
                    <span
                      className={`px-2 py-1 rounded-full text-sm font-medium ${difficultyColors[score.difficulty]}`}
                    >
                      {score.difficulty.charAt(0).toUpperCase() + score.difficulty.slice(1)}
                    </span>
                  </TableCell>
                  <TableCell className="text-white">{score.pairs}</TableCell>
                  <TableCell className="text-white">{formatTime(score.time)}</TableCell>
                  <TableCell className="text-white">{score.moves}</TableCell>
                  <TableCell className="text-white font-bold">{score.score.toLocaleString()}</TableCell>
                  <TableCell className="text-white">{score.date}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      )}

      <Button
        onClick={onBack}
        className="mt-6 bg-white/20 hover:bg-white/30 text-white border-2 border-white/30 hover:border-white/50"
      >
        Back to Menu
      </Button>
    </div>
  )
}

