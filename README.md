# 🤖 Agent Dashboard

Real-time trading agent performance dashboard. Visualizes the performance of 15 trend-following trading agents running on simulated capital.

## Features

- 🏆 **Live Leaderboard** — Top 3 agents with medals and performance metrics
- 📊 **Performance Stats** — Summary metrics (total agents, runs, ROI)
- 📈 **Full Rankings** — Complete leaderboard with win rates and P&L
- 🔄 **Auto-Refresh** — Updates every 60 seconds
- 🎨 **Apple-Level Design** — Glassmorphism, smooth animations, dark mode

## Tech Stack

- **Frontend:** React 18 + Vite
- **Styling:** Modern CSS with animations and gradients
- **Backend:** Express.js API
- **Data:** JSON performance logs

## Setup

### Install

```bash
npm install
```

### Development

```bash
npm run dev
```

Runs on `http://localhost:5173`

### Build

```bash
npm run build
```

Produces optimized bundle in `dist/`

### Run Server

```bash
npm run server
```

Or combined:

```bash
npm run start
```

Server runs on `http://localhost:3001` with frontend served as static files.

## API

### GET `/api/dashboard`

Returns current agent performance data.

## Deployment

Deployed on Vercel (frontend) + Render (backend).

---

**Status:** 🟢 Active  
**Repo:** https://github.com/SuryaNickil/portfolio-interactive
