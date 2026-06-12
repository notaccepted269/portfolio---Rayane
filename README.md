# KERNEL v2.0 — Developer Portfolio

> A terminal-style developer portfolio themed as a Linux cockpit.  
> Built with Vite.js + Vanilla TypeScript, deployed on Vercel.

```
 ██████╗  █████╗ ██╗   ██╗ █████╗ ███╗   ██╗███████╗
 ██╔══██╗██╔══██╗╚██╗ ██╔╝██╔══██╗████╗  ██║██╔════╝
 ██████╔╝███████║ ╚████╔╝ ███████║██╔██╗ ██║█████╗
 ██╔══██╗██╔══██║  ╚██╔╝  ██╔══██║██║╚██╗██║██╔══╝
 ██║  ██║██║  ██║   ██║   ██║  ██║██║ ╚████║███████╗
 ╚═╝  ╚═╝╚═╝  ╚═╝   ╚═╝   ╚═╝  ╚═╝╚═╝  ╚═══╝╚══════╝
```

---

## Table of contents

- [Overview](#overview)
- [Features](#features)
- [Tech stack](#tech-stack)
- [Project structure](#project-structure)
- [Getting started](#getting-started)
- [Available commands](#available-commands)
- [Configuration](#configuration)
- [Deployment](#deployment)
- [Design system](#design-system)

---

## Overview

KERNEL v2.0 is a portfolio that mimics a Linux terminal environment. The visitor navigates the developer's profile by typing shell commands — browsing projects, reading the experience log, exploring the tech stack — exactly like they would in a real terminal.

**Design goals:**
- Immersive: full-screen animated boot sequence on first load
- Authentic: real terminal UX (history navigation, Tab autocomplete, easter eggs)
- Maintainable: clean TypeScript architecture with separation of concerns
- Fast: Vite build pipeline, no heavy framework overhead

---

## Features

### Core terminal
| Feature | Detail |
|---|---|
| Boot sequence | Animated startup that transitions into the main layout |
| Command history | Arrow keys `↑ ↓` navigate through previous commands |
| Tab autocomplete | Completes any registered command from a partial input |
| CRT scanlines | CSS overlay for the retro monitor aesthetic |
| Glitch animation | Topbar title randomly glitches to reinforce the theme |

### Commands
| Command | Description |
|---|---|
| `whoami` / `neofetch` | ASCII art + full developer profile (neofetch style) |
| `projects` | Grid of completed projects with stack tags |
| `experience` | Career timeline as a chronological log |
| `stack` | Collapsible technology tree |
| `contact` | Communication interfaces — email copy, links, CV download |
| `status` | Availability metrics and progress bars |
| `tree` | Filesystem overview of the portfolio |
| `ls [-a]` | List directory; `-a` reveals hidden files |
| `history` | Numbered list of typed commands |
| `clear` | Reset the terminal output |
| `uname`, `uptime`, `ping`, `echo` | System utility commands |

### Easter eggs
```bash
cat .classified     # Hidden personal file
cat .env.secret     # "Sensitive" data exposed
sudo hire me        # Triggers the hire sequence
```

---

## Tech stack

```
Build tool   │ Vite.js (Vanilla TypeScript)
Styling      │ Tailwind CSS v3  +  terminal.css (component-specific)
Font         │ JetBrains Mono (via CDN)
Deployment   │ Vercel (SPA rewrite rule)
```

**No UI framework.** Intentional — a terminal interface maps naturally to vanilla DOM manipulation. Keeping the dependency footprint minimal improves cold-start performance.

---

## Project structure

```
kernel-portfolio/
│
├── index.html                  # Entry point
├── vite.config.ts
├── tsconfig.json
├── tailwind.config.ts
├── vercel.json                 # SPA rewrite rule
│
├── src/
│   ├── main.ts                 # App bootstrap
│   ├── config.ts               # All profile data (single source of truth)
│   │
│   ├── core/
│   │   ├── Terminal.ts         # DOM output manager (push, clear)
│   │   ├── HistoryManager.ts   # Command history state
│   │   ├── CommandRegistry.ts  # Command registration & lookup
│   │   └── Boot.ts             # Animated boot sequence
│   │
│   ├── commands/
│   │   ├── index.ts            # Central dispatcher
│   │   ├── whoami.ts
│   │   ├── projects.ts
│   │   ├── experience.ts
│   │   ├── stack.ts
│   │   ├── contact.ts
│   │   ├── status.ts
│   │   ├── tree.ts
│   │   ├── ls.ts
│   │   ├── system.ts           # uname, uptime, ping, echo, clear, history
│   │   └── easter.ts           # cat .classified, cat .env.secret, sudo hire me
│   │
│   ├── ui/
│   │   ├── Sidebar.ts          # Collapsible file tree + active state
│   │   ├── Clock.ts            # Live clock in topbar
│   │   └── InputBar.ts         # Input field, Tab autocomplete, arrow history
│   │
│   └── styles/
│       ├── terminal.css        # Terminal component styles (not Tailwind)
│       └── animations.css      # CRT scanlines, glitch, entry flash
│
└── public/
    └── favicon.ico
```

---

## Getting started

### Prerequisites

- Node.js ≥ 18
- npm or pnpm

### Installation

```bash
# Clone the repository
git clone https://github.com/rayane/kernel-portfolio.git
cd kernel-portfolio

# Install dependencies
npm install

# Start the dev server
npm run dev
```

The dev server starts at `http://localhost:5173`.

### Build for production

```bash
npm run build       # Outputs to /dist
npm run preview     # Preview the production build locally
```

---

## Configuration

All personal data is centralized in a **single file**: `src/config.ts`.

```typescript
// src/config.ts
export const CFG = {
  name:       'Rayane',
  role:       'Full Stack Developer',
  location:   'France',
  email:      'rayane@example.com',
  github:     'https://github.com/rayane',
  linkedin:   'https://linkedin.com/in/rayane',
  cv_url:     '/rayane_cv.pdf',          // empty string disables CV download
  kernel:     'Laravel + React + Node.js',
  shell:      'Zsh 5.9',
  uptime:     '3 years',
  projects_n: '12',
  status:     'Available for opportunities',
  education:  'Licence Informatique',
  languages:  'French (native), English (professional)',
  open_to:    'Full-time · Freelance · Open Source',
  philosophy: '"Build systems that outlive their builders."',
};
```

To adapt the portfolio to a different developer, **only this file needs to change**.  
Projects and experience entries live in their respective command files (`commands/projects.ts`, `commands/experience.ts`).

---

## Deployment

The project deploys as a Single Page Application on **Vercel**.

`vercel.json` handles the SPA rewrite so all routes resolve to `index.html`:

```json
{
  "rewrites": [
    { "source": "/(.*)", "destination": "/index.html" }
  ]
}
```

### Deploy

```bash
# Via Vercel CLI
npx vercel

# Or push to main branch if connected to Vercel — auto-deploy triggers
git push origin main
```

---

## Design system

### Color tokens

| Token | Value | Usage |
|---|---|---|
| `--bg` | `#030303` | Main background |
| `--bg-h` | `#0b1825` | Hover / elevated surfaces |
| `--green` | `#00FF9C` | Primary accent — prompts, success, live dot |
| `--amber` | `#FFB000` | Secondary accent — labels, filenames, keys |
| `--amber-d` | `#D98A00` | Dimmed amber — secondary labels |
| `--white` | `#F5F5F5` | Primary text |
| `--gray` | `#8899aa` | Secondary text |
| `--gray-d` | `#3d5168` | Muted / decorative text |
| `--border` | `#0e2236` | Panel borders, dividers |
| `--red` | `#FF4757` | Errors, hidden files |

### Typography

**JetBrains Mono** — monospaced, loaded via CDN. No serif or sans-serif fallback; the monospace identity is non-negotiable for the terminal theme.

Base size: `13px` · Line height: `1.9` in boot, `1.7–1.85` in output blocks.

### Layout

```
┌──────────────────────────────────────────────────────┐
│  topbar (30px) — window controls · title · clock     │
├───────────────┬──────────────────────────────────────┤
│  sidebar      │  terminal output                     │
│  (224px)      │                                      │
│               │  > prompt lines                      │
│  file tree    │  > command output                    │
│  process list │                                      │
│  system log   │                                      │
├───────────────┴──────────────────────────────────────┤
│  input bar (46px) — prompt · text field · hints      │
└──────────────────────────────────────────────────────┘
```

---

## License

MIT — free to fork, adapt, and use as your own portfolio base.  
If you do, a GitHub star is appreciated. ⭐

---

*KERNEL v2.0 — Built by Rayane*
