# Mind Pairs 🦁

A kids-friendly animal memory card game built with **Next.js 14**, **Tailwind CSS**, and **Framer Motion**.

---

## Getting Started

### Prerequisites

- Node.js 18+
- npm / yarn / pnpm

### Install & Run

```bash
# Install dependencies
npm install

# Start the development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Other commands

```bash
npm run build   # Build for production
npm run start   # Run the production build
npm run lint    # Lint the codebase
```

---

## How It Works

### Flow

1. **Name Screen** — Enter your name (or leave blank for a randomly generated one).
2. **Menu Screen** — Pick a difficulty and the number of pairs you want to play with.
3. **Game Screen** — Flip cards to find matching animal pairs before time runs out.
4. **Game Completed** — See your score, time, and moves. Play again or return to menu.
5. **Leaderboard** — View the top scores across all players and difficulties.

### Gameplay

- Flip two cards on each turn. If they show the same animal — it's a match!
- Matched pairs stay face-up. Find all pairs to win.
- A **progress bar** shows how many pairs you've found.
- Use the **Clue** button (once per game) after flipping a card to highlight its match.
- Your **score** is based on time, moves, and difficulty multiplier.

---

## Difficulty Levels

| Level  | Pairs options | Time bonus per pair | Special rule         |
|--------|--------------|---------------------|----------------------|
| Easy   | 3, 4, 6, 8   | +30s                | —                    |
| Medium | 9–12         | +20s                | —                    |
| Hard   | 13–16        | +10s                | Cards shuffle every minute |

---

## Project Structure

```
├── app/
│   ├── page.tsx              # Root page — game state machine
│   ├── layout.tsx
│   ├── globals.css
│   └── api/leaderboard/      # Leaderboard API route
├── components/
│   ├── name-screen.tsx       # Player name entry
│   ├── menu-screen.tsx       # Difficulty & pair selector
│   ├── game-screen.tsx       # Main game UI + HUD
│   ├── memory-card.tsx       # Flip card component
│   ├── game-completed.tsx    # Win screen with stats
│   ├── leaderboard-screen.tsx
│   └── timer.tsx
├── services/
│   ├── game-service.ts       # Card creation & match logic
│   ├── leaderboard-service.ts
│   └── name-generator.ts
├── utils/
│   ├── constants.ts          # Animal emojis & difficulty config
│   ├── game-utils.ts         # Shuffle, score, clue helpers
│   └── helpers.ts
└── types/
    └── index.ts              # Shared TypeScript types
```

---

## Tech Stack

| Technology | Purpose |
|------------|---------|
| Next.js 14 | Framework (App Router) |
| TypeScript | Type safety |
| Tailwind CSS | Styling |
| Framer Motion | Card flip & entrance animations |
| Radix UI / shadcn | Accessible UI primitives |
| Lucide React | Icons |

---

## Animals in the Game

🦁 Lion · 🐺 Wolf · 🦒 Giraffe · 🐻 Bear · 🐔 Chicken · 🐱 Cat · 🐯 Tiger · 🐘 Elephant · 🐸 Frog · 🦊 Fox · 🐧 Penguin · 🦋 Butterfly · 🐬 Dolphin · 🦄 Unicorn · 🐙 Octopus · 🦓 Zebra
