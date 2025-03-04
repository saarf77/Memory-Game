type Performance = "excellent" | "great" | "good" | "keepTrying"

export const calculatePerformance = (pairs: number, time: number, moves: number): Performance => {
  // Perfect moves would be 2 * pairs (each pair needs 2 card flips)
  const perfectMoves = pairs * 2
  const moveEfficiency = moves / perfectMoves // Lower is better

  // Expected time is roughly 2 seconds per move in perfect play
  const expectedTime = perfectMoves * 2
  const timeEfficiency = time / expectedTime // Lower is better

  // Combined score (lower is better)
  const score = (moveEfficiency + timeEfficiency) / 2

  if (score <= 1.2) return "excellent"
  if (score <= 1.5) return "great"
  if (score <= 2.0) return "good"
  return "keepTrying"
}

export const getFeedbackMessage = (
  performance: Performance,
): {
  title: string
  message: string
  emoji: string
} => {
  switch (performance) {
    case "excellent":
      return {
        title: "Outstanding!",
        message: "Your memory is absolutely incredible!",
        emoji: "🏆",
      }
    case "great":
      return {
        title: "Amazing Work!",
        message: "You have a fantastic memory!",
        emoji: "⭐",
      }
    case "good":
      return {
        title: "Well Done!",
        message: "You completed the challenge successfully!",
        emoji: "🎉",
      }
    case "keepTrying":
      return {
        title: "Good Effort!",
        message: "Practice makes perfect - keep going!",
        emoji: "💪",
      }
  }
}

