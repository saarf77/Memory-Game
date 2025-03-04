"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { NameGeneratorService } from "@/services/name-generator"

interface NameScreenProps {
  onNameSubmit: (name: string) => void
}

export function NameScreen({ onNameSubmit }: NameScreenProps) {
  const [name, setName] = useState("")

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const userName = name.trim() || NameGeneratorService.generateName()
    onNameSubmit(userName)
  }

  return (
    <div className="container mx-auto px-4 py-8 flex flex-col items-center justify-center min-h-screen">
      <div className="text-center space-y-8 max-w-md w-full">
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-8">Memory Match</h1>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="space-y-2">
            <Input
              id="name"
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="bg-white/10 border-white/20 text-white placeholder:text-white/50 h-12 text-lg text-center"
              placeholder="Enter your name (or leave blank for a surprise!)"
            />
          </div>
          <Button
            type="submit"
            className="w-full h-12 bg-white/20 hover:bg-white/30 text-white font-medium border-2 border-white/30 hover:border-white/50 text-lg"
          >
            Start Playing
          </Button>
        </form>
      </div>
    </div>
  )
}

