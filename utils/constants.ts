import {
  Heart,
  Star,
  Sun,
  Moon,
  Cloud,
  Flower2,
  Music,
  Zap,
  Umbrella,
  Rocket,
  Gift,
  Cake,
  Pizza,
  Crown,
  Diamond,
  Bird,
} from "lucide-react"

export const ICONS_CONFIG = [
  { icon: Heart, color: "text-rose-500" },
  { icon: Star, color: "text-amber-500" },
  { icon: Sun, color: "text-yellow-500" },
  { icon: Moon, color: "text-purple-500" },
  { icon: Cloud, color: "text-sky-500" },
  { icon: Flower2, color: "text-pink-500" },
  { icon: Music, color: "text-blue-500" },
  { icon: Zap, color: "text-yellow-400" },
  { icon: Umbrella, color: "text-cyan-500" },
  { icon: Rocket, color: "text-orange-500" },
  { icon: Gift, color: "text-red-500" },
  { icon: Cake, color: "text-rose-400" },
  { icon: Pizza, color: "text-amber-400" },
  { icon: Crown, color: "text-yellow-300" },
  { icon: Diamond, color: "text-blue-400" },
  { icon: Bird, color: "text-teal-400" },
]

export const DIFFICULTY_CONFIG = {
  easy: {
    timeBonus: 30,
    label: "Easy",
    pairs: [3, 4, 6, 8],
    shuffleCards: false,
    scoreMultiplier: 1,
  },
  medium: {
    timeBonus: 20,
    label: "Medium",
    pairs: [9, 10, 11, 12],
    shuffleCards: false,
    scoreMultiplier: 2,
  },
  hard: {
    timeBonus: 10,
    label: "Hard",
    pairs: [13, 14, 15, 16],
    shuffleCards: true,
    scoreMultiplier: 3,
  },
}

export const SOUNDS = {
  flip: "/flip.mp3",
  match: "/match.mp3",
  victory: "/victory.mp3",
  shuffle: "/shuffle.mp3",
  clue: "/clue.mp3",
}

