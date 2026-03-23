"use client"

import type React from "react"
import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Input } from "@/components/ui/input"
import { NameGeneratorService } from "@/services/name-generator"

interface NameScreenProps {
  onNameSubmit: (name: string) => void
}

const ANIMAL_ROW = ["🦁", "🐯", "🐘", "🦒", "🐻", "🦊", "🐬", "🦄"]

export function NameScreen({ onNameSubmit }: NameScreenProps) {
  const [showNameInput, setShowNameInput] = useState(false)
  const [name, setName] = useState("")

  const handlePlay = () => {
    onNameSubmit(NameGeneratorService.generateName())
  }

  const handleNameSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    onNameSubmit(name.trim() || NameGeneratorService.generateName())
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen px-4">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.45 }}
        className="text-center space-y-8 max-w-sm w-full"
      >
        {/* Animal row */}
        <div className="flex justify-center gap-2 flex-wrap">
          {ANIMAL_ROW.map((emoji, i) => (
            <motion.span
              key={i}
              className="text-4xl select-none"
              initial={{ opacity: 0, y: -12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.06, duration: 0.35 }}
              whileHover={{ scale: 1.35, rotate: 12 }}
            >
              {emoji}
            </motion.span>
          ))}
        </div>

        {/* Title */}
        <div className="space-y-1">
          <h1 className="text-6xl font-extrabold text-white drop-shadow-lg tracking-tight">Mind Pairs</h1>
          <p className="text-white/65 text-lg">The animal memory game</p>
        </div>

        {/* Big Play button */}
        <motion.button
          onClick={handlePlay}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.96 }}
          className="w-full h-16 rounded-2xl bg-white/30 hover:bg-white/40 border-2 border-white/50 text-white text-2xl font-extrabold shadow-xl transition-colors duration-200"
        >
          Play Now! 🎮
        </motion.button>

        {/* Optional name toggle */}
        <AnimatePresence>
          {!showNameInput ? (
            <motion.button
              key="toggle"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setShowNameInput(true)}
              className="text-white/50 hover:text-white/80 text-sm underline underline-offset-2 transition-colors"
            >
              Want to enter your name?
            </motion.button>
          ) : (
            <motion.form
              key="form"
              onSubmit={handleNameSubmit}
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="space-y-3 overflow-hidden"
            >
              <Input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="bg-white/15 border-white/30 text-white placeholder:text-white/45 h-13 text-lg text-center rounded-2xl focus:bg-white/20 focus:border-white/50"
                placeholder="Your name..."
                maxLength={24}
                autoFocus
              />
              <button
                type="submit"
                className="w-full h-12 rounded-2xl bg-white/20 hover:bg-white/30 border border-white/35 text-white font-bold text-base transition-colors duration-200"
              >
                Play as {name.trim() || "…"}
              </button>
            </motion.form>
          )}
        </AnimatePresence>
      </motion.div>
    </div>
  )
}

