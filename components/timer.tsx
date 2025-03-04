"use client"

import { useEffect, useRef } from "react"
import { formatTime } from "@/utils/helpers"

interface TimerProps {
  isRunning: boolean
  onTick: (time: number) => void
  resetKey?: number
}

export function Timer({ isRunning, onTick, resetKey }: TimerProps) {
  const timeRef = useRef(0)
  const intervalRef = useRef<NodeJS.Timeout>()

  useEffect(() => {
    // Reset timer when resetKey changes
    timeRef.current = 0
    onTick(0)
  }, [resetKey, onTick]) // Added onTick to dependencies

  useEffect(() => {
    if (isRunning) {
      intervalRef.current = setInterval(() => {
        timeRef.current += 1
        onTick(timeRef.current)
      }, 1000)
    }

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current)
      }
    }
  }, [isRunning, onTick])

  return <div className="text-white">Time: {formatTime(timeRef.current)}</div>
}

