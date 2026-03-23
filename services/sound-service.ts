/**
 * Generates all game sounds using the Web Audio API.
 * No MP3 files needed.
 */

let ctx: AudioContext | null = null

function getCtx(): AudioContext {
  if (!ctx) ctx = new AudioContext()
  return ctx
}

function resume() {
  const c = getCtx()
  if (c.state === "suspended") c.resume()
  return c
}

// ── helpers ──────────────────────────────────────────────────────────────────

function playTone(
  freq: number,
  type: OscillatorType,
  startGain: number,
  endGain: number,
  duration: number,
  startTime: number,
) {
  const c = resume()
  const osc = c.createOscillator()
  const gain = c.createGain()
  osc.connect(gain)
  gain.connect(c.destination)
  osc.type = type
  osc.frequency.setValueAtTime(freq, startTime)
  gain.gain.setValueAtTime(startGain, startTime)
  gain.gain.exponentialRampToValueAtTime(Math.max(endGain, 0.001), startTime + duration)
  osc.start(startTime)
  osc.stop(startTime + duration)
}

// ── sounds ───────────────────────────────────────────────────────────────────

export const SoundService = {
  /** Soft, quick "tick" when a card flips */
  flip() {
    const c = resume()
    const now = c.currentTime
    playTone(520, "sine", 0.18, 0.001, 0.08, now)
  },

  /** Two rising notes when a match is found */
  match() {
    const c = resume()
    const now = c.currentTime
    playTone(520, "sine", 0.22, 0.001, 0.12, now)
    playTone(780, "sine", 0.22, 0.001, 0.16, now + 0.1)
  },

  /** Happy ascending arpeggio for game win */
  victory() {
    const c = resume()
    const now = c.currentTime
    const notes = [523, 659, 784, 1047]
    notes.forEach((freq, i) => {
      playTone(freq, "sine", 0.28, 0.001, 0.22, now + i * 0.13)
    })
    // final long chord
    ;[523, 659, 784].forEach((freq) => {
      playTone(freq, "sine", 0.2, 0.001, 0.6, now + notes.length * 0.13)
    })
  },

  /** Wobbly shuffle sound */
  shuffle() {
    const c = resume()
    const now = c.currentTime
    for (let i = 0; i < 6; i++) {
      const freq = 300 + Math.random() * 200
      playTone(freq, "triangle", 0.12, 0.001, 0.07, now + i * 0.055)
    }
  },

  /** Soft chime for the clue hint */
  clue() {
    const c = resume()
    const now = c.currentTime
    playTone(880, "sine", 0.2, 0.001, 0.18, now)
    playTone(1100, "sine", 0.15, 0.001, 0.22, now + 0.1)
  },
}
