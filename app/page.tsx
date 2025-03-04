"use client"

import { useState, useCallback, useRef, useEffect } from "react"
import { NameScreen } from "@/components/name-screen"
import { MenuScreen } from "@/components/menu-screen"
import { GameScreen } from "@/components/game-screen"
import { GameCompleted } from "@/components/game-completed"
import { LeaderboardScreen } from "@/components/leaderboard-screen"
import { GameService } from "@/services/game-service"
import { LeaderboardService } from "@/services/leaderboard-service"
import { NameGeneratorService } from "@/services/name-generator"
import type { GameState, MemoryCard, Score, User, Difficulty, GameStats } from "@/types"
import { SOUNDS, DIFFICULTY_CONFIG } from "@/utils/constants"
import { shuffleUnmatchedCards, findMatchingCard, calculateScore } from "@/utils/game-utils"
import { toast } from "@/components/ui/toast"

export default function MemoryGame() {
  const [gameState, setGameState] = useState<GameState>("name")
  const [user, setUser] = useState<User | null>(null)
  const [numPairs, setNumPairs] = useState(3)
  const [difficulty, setDifficulty] = useState<Difficulty>("easy")
  const [cards, setCards] = useState<MemoryCard[]>([])
  const [flippedIndexes, setFlippedIndexes] = useState<number[]>([])
  const [matches, setMatches] = useState(0)
  const [moves, setMoves] = useState(0)
  const [isChecking, setIsChecking] = useState(false)
  const [isRunning, setIsRunning] = useState(false)
  const [currentTime, setCurrentTime] = useState(0)
  const [scores, setScores] = useState<Score[]>([])
  const [timerKey, setTimerKey] = useState(0)
  const [cluesRemaining, setCluesRemaining] = useState(1)
  const [isShuffling, setIsShuffling] = useState(false)
  const shuffleTimeoutRef = useRef<NodeJS.Timeout>()
  const audioRef = useRef<{ [key: string]: HTMLAudioElement }>({})

  useEffect(() => {
    // Initialize audio elements
    const audioElements: { [key: string]: HTMLAudioElement } = {}
    Object.entries(SOUNDS).forEach(([key, src]) => {
      audioElements[key] = new Audio(src)
    })
    audioRef.current = audioElements

    // Initial scores fetch
    LeaderboardService.getScores().then(setScores)
  }, [])

  const playSound = useCallback((soundName: keyof typeof SOUNDS) => {
    try {
      const sound = audioRef.current[soundName]
      if (sound) {
        sound.currentTime = 0
        sound.play().catch(() => {
          // Ignore audio play errors
        })
      }
    } catch (error) {
      console.error("Failed to play sound:", error)
    }
  }, [])

  const handleNameSubmit = (name: string) => {
    const userId = NameGeneratorService.generateId()
    setUser({ id: userId, name })
    setGameState("menu")
  }

  const startGame = useCallback((pairs: number, diff: Difficulty) => {
    setNumPairs(pairs)
    setDifficulty(diff)
    setCards(GameService.createCards(pairs))
    setFlippedIndexes([])
    setMatches(0)
    setMoves(0)
    setCurrentTime(0)
    setIsRunning(true)
    setTimerKey((key) => key + 1)
    setCluesRemaining(1)
    setGameState("playing")
  }, [])

  const handleCardClick = useCallback(
    (clickedIndex: number) => {
      if (isChecking || cards[clickedIndex].isMatched) return
      if (flippedIndexes.includes(clickedIndex)) return
      if (flippedIndexes.length === 2) return

      playSound("flip")

      const newFlipped = [...flippedIndexes, clickedIndex]
      setFlippedIndexes(newFlipped)
      setMoves((m) => m + 1)

      if (newFlipped.length === 2) {
        setIsChecking(true)
        const [firstIndex, secondIndex] = newFlipped
        const firstCard = cards[firstIndex]
        const secondCard = cards[secondIndex]

        if (GameService.checkForMatch(firstCard, secondCard)) {
          playSound("match")
          setTimeout(() => {
            setCards(
              cards.map((card, index) =>
                index === firstIndex || index === secondIndex ? { ...card, isMatched: true } : card,
              ),
            )
            setFlippedIndexes([])
            setMatches((m) => {
              const newMatches = m + 1
              if (newMatches === numPairs) {
                setIsRunning(false)
                playSound("victory")
                const finalScore = calculateScore(numPairs, currentTime, moves, difficulty)
                const score = {
                  userId: user?.id || "anonymous",
                  userName: user?.name || "Anonymous",
                  pairs: numPairs,
                  time: currentTime,
                  moves,
                  score: finalScore,
                  difficulty,
                  date: new Date().toLocaleDateString(),
                }
                LeaderboardService.saveScore(score)
                setScores(LeaderboardService.getScores())
                setGameState("completed")
              }
              return newMatches
            })
            setIsChecking(false)
          }, 500)
        } else {
          setTimeout(() => {
            setFlippedIndexes([])
            setIsChecking(false)
          }, 1000)
        }
      }
    },
    [cards, flippedIndexes, isChecking, numPairs, currentTime, user, difficulty, moves, playSound],
  )

  const handleTimeTick = useCallback((time: number) => {
    setCurrentTime(time)
  }, [])

  const handleUseClue = useCallback(() => {
    if (cluesRemaining === 0 || flippedIndexes.length !== 1) {
      if (flippedIndexes.length === 0) {
        toast("❗ Flip a card first to use the clue", {
          className: "bg-orange-900 text-orange-100 border-orange-700",
        })
      }
      return
    }

    playSound("clue")
    const selectedCard = cards[flippedIndexes[0]]
    const matchingCardIndex = findMatchingCard(cards, selectedCard)

    if (matchingCardIndex !== -1) {
      setCards(cards.map((card, index) => (index === matchingCardIndex ? { ...card, isHighlighted: true } : card)))

      setTimeout(() => {
        setCards(cards.map((card) => ({ ...card, isHighlighted: false })))
      }, 1000)
    }

    setCluesRemaining(0)
  }, [cards, flippedIndexes, cluesRemaining, playSound])

  useEffect(() => {
    if (shuffleTimeoutRef.current) {
      clearTimeout(shuffleTimeoutRef.current)
    }

    // Only set up shuffle for hard difficulty when game is running
    if (isRunning && difficulty === "hard" && DIFFICULTY_CONFIG[difficulty].shuffleCards) {
      const setupShuffle = () => {
        shuffleTimeoutRef.current = setTimeout(() => {
          if (!isChecking) {
            setIsShuffling(true)
            const newCards = shuffleUnmatchedCards(cards)
            setCards(newCards)
            playSound("shuffle")

            toast("🔄 Cards shuffled! Keep track of your cards!", {
              className: "bg-orange-900 text-orange-100 border-orange-700",
            })

            setTimeout(() => {
              setIsShuffling(false)
              // Set up next shuffle
              setupShuffle()
            }, 1000)
          } else {
            // If checking, try again in a second
            setTimeout(setupShuffle, 1000)
          }
        }, 60000) // Shuffle every minute
      }

      // Start the shuffle cycle
      setupShuffle()
    }

    return () => {
      if (shuffleTimeoutRef.current) {
        clearTimeout(shuffleTimeoutRef.current)
      }
    }
  }, [isRunning, difficulty, cards, isChecking, playSound])

  const gameStats: GameStats = {
    moves,
    time: currentTime,
    pairs: numPairs,
    difficulty,
    score: calculateScore(numPairs, currentTime, moves, difficulty),
  }

  const returnHome = () => {
    setUser(null)
    setGameState("name")
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen texture-overlay">
      <div className="w-full min-h-screen bg-gradient-to-br from-rose-800/80 via-orange-700/80 to-amber-700/80 backdrop-blur-sm">
        {gameState === "name" && <NameScreen onNameSubmit={handleNameSubmit} />}

        {gameState === "menu" && (
          <MenuScreen
            userName={user?.name}
            onStartGame={startGame}
            onShowLeaderboard={() => setGameState("leaderboard")}
            onReturnHome={returnHome}
          />
        )}

        {gameState === "leaderboard" && <LeaderboardScreen scores={scores} onBack={() => setGameState("menu")} />}

        {gameState === "playing" && (
          <GameScreen
            cards={cards}
            flippedIndexes={flippedIndexes}
            matches={matches}
            numPairs={numPairs}
            onCardClick={handleCardClick}
            onBack={() => setGameState("menu")}
            onRestart={() => startGame(numPairs, difficulty)}
            isRunning={isRunning}
            onTimeTick={handleTimeTick}
            timerKey={timerKey}
            userName={user?.name}
            difficulty={difficulty}
            moves={moves}
            onUseClue={handleUseClue}
            cluesRemaining={cluesRemaining}
            isShuffling={isShuffling}
          />
        )}

        {gameState === "completed" && (
          <GameCompleted
            stats={gameStats}
            onPlayAgain={() => startGame(numPairs, difficulty)}
            onBackToMenu={() => setGameState("menu")}
          />
        )}
      </div>
    </div>
  )
}

