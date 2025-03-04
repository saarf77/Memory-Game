import { NextResponse } from "next/server"
import { promises as fs } from "fs"
import path from "path"
import type { Score } from "@/types"

const dataFile = path.join(process.cwd(), "data", "scores.json")

// Ensure the data directory exists
async function ensureDataDir() {
  const dir = path.join(process.cwd(), "data")
  try {
    await fs.access(dir)
  } catch {
    await fs.mkdir(dir)
  }
}

// Initialize scores file if it doesn't exist
async function initScoresFile() {
  try {
    await fs.access(dataFile)
  } catch {
    await fs.writeFile(dataFile, "[]")
  }
}

// GET /api/leaderboard
export async function GET() {
  try {
    await ensureDataDir()
    await initScoresFile()

    const data = await fs.readFile(dataFile, "utf8")
    const scores: Score[] = JSON.parse(data)

    return NextResponse.json(scores)
  } catch (error) {
    console.error("Error reading leaderboard:", error)
    return NextResponse.json({ error: "Failed to fetch leaderboard" }, { status: 500 })
  }
}

// POST /api/leaderboard
export async function POST(request: Request) {
  try {
    await ensureDataDir()
    await initScoresFile()

    const score: Score = await request.json()
    const data = await fs.readFile(dataFile, "utf8")
    const scores: Score[] = JSON.parse(data)

    scores.push(score)
    scores.sort((a, b) => {
      if (a.pairs !== b.pairs) return b.pairs - a.pairs
      return a.time - b.time
    })

    // Keep only top 100 scores
    const topScores = scores.slice(0, 100)
    await fs.writeFile(dataFile, JSON.stringify(topScores, null, 2))

    return NextResponse.json(topScores)
  } catch (error) {
    console.error("Error saving score:", error)
    return NextResponse.json({ error: "Failed to save score" }, { status: 500 })
  }
}

