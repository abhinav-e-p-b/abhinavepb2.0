# Abhinave P B — Portfolio

A personal portfolio website built with React, TypeScript, and Vite. Features an interactive landing page, a full portfolio section with ASCII art, a playable platformer mini-game, project build logs, and an art gallery.

Live at: **[abhinave.netlify.app](https://abhinave.netlify.app)** *(update with your actual URL)*

---

## Table of Contents

- [Overview](#overview)
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Project Structure](#project-structure)
- [Getting Started](#getting-started)
- [Pages & Components](#pages--components)
- [Customization Guide](#customization-guide)
- [Deployment](#deployment)
- [Scripts](#scripts)

---

## Overview

This portfolio is split into two main experiences:

- **Landing Page (`/`)** — A typographic splash page with an interactive blob cursor, hoverable letters that randomize fonts and colors, and floating DevOps icons.
- **Portfolio (`/portfolio`)** — A full scrollable portfolio with an ASCII canvas portrait, experience tabs, project cards, an art gallery, and a hidden platformer game.

---

## Features

### Landing Page
- **Interactive typography** — hover any letter in the hero text to randomize its font and color from a curated set of 38 Google Fonts.
- **Blob cursor** — a GSAP-animated trailing cursor that replaces the system cursor across the entire site.
- **Floating icons** — animated Lucide icons representing the tech focus areas (DevOps, Cloud, AI, etc.).

### Portfolio
- **ASCII portrait** — a canvas-based particle simulation that renders a profile photo as ASCII characters. Particles scatter and reform on mouse interaction.
- **Experience tabs** — MUI-powered tabbed interface showing project categories and descriptions.
- **Project carousel** — Bootstrap carousel for spotlight projects, with a responsive card grid for additional projects.
- **Project build logs** — long-form article pages (`/portfolio/log/:projectId`) with support for text, images, code blocks, diagrams, and tip callouts.
- **Art gallery** — a masonry-style image grid with a dedicated full-gallery page at `/art`.
- **Robot game** — a canvas platformer ("game mode") where a pixel-art blob character jumps across DOM elements and collects brain cell collectibles. Activates via the toggle in the top-left corner; desktop only.
- **Sidebar navigation** — fixed left-side quick-links on desktop.
- **Fade-in sections** — IntersectionObserver-based scroll animations on all major sections.

---

## Tech Stack

| Category | Library / Tool |
|---|---|
| Framework | React 19 |
| Language | TypeScript |
| Build tool | Vite 6 |
| Styling | Tailwind CSS 3, custom CSS |
| Animation | Framer Motion, GSAP |
| UI components | MUI (Material UI) v9, React Bootstrap |
| Icons | Lucide React, MUI Icons |
| Routing | React Router DOM v7 |
| HTTP client | Axios |
| Fonts | Google Fonts (Oswald + 38 display fonts), Fontsource Oswald |
| Deployment | Netlify |

---

## Project Structure

```
├── public/
│   ├── profile.png              # Profile photo used for ASCII portrait
│   └── assets/
│       ├── art/                 # Art gallery images
│       └── hardware/            # Project log images (pc, grass-cyberdeck, led-bracelet)
│
├── src/
│   ├── App.tsx                  # Root router (Landing + Portfolio routes)
│   ├── main.tsx                 # React entry point
│   ├── index.css                # Global styles, font imports, Tailwind directives
│   │
│   ├── components/              # Shared components (used on Landing)
│   │   ├── BlobCursor.tsx       # GSAP trailing cursor
│   │   ├── FloatingIcons.tsx    # Animated background icons
│   │   ├── ImageSpawner.tsx     # Click-to-spawn image effect (unused by default)
│   │   └── InteractiveText.tsx  # Per-letter font/color randomizer
│   │
│   └── pages/
│       ├── Landing.tsx          # Landing page (/)
│       └── portfolio/
│           ├── Portfolio.jsx    # Portfolio shell with NavBar, SidebarNav, RobotGame
│           ├── Portfolio.css    # Portfolio-specific global styles
│           │
│           ├── assets/
│           │   └── asciiData.js # Pre-computed ASCII particle positions (220/280/400px)
│           │
│           ├── components/
│           │   ├── About.jsx
│           │   ├── Art.jsx
│           │   ├── ArtGallery.jsx
│           │   ├── AsciiPortrait.jsx    # Canvas ASCII particle animation
│           │   ├── Credits.jsx
│           │   ├── Experience.jsx
│           │   ├── ExternalLinks.jsx
│           │   ├── FadeInSection.jsx    # IntersectionObserver scroll fade
│           │   ├── Intro.jsx
│           │   ├── JobList.jsx          # MUI vertical/horizontal tab experience
│           │   ├── NavBar.jsx
│           │   ├── ProjectLog.jsx       # Long-form project article renderer
│           │   ├── Projects.jsx         # Carousel + card grid
│           │   ├── RobotGame.jsx        # Canvas platformer game
│           │   └── SidebarNav.jsx
│           │
│           └── styles/                  # Component-scoped CSS files
│               ├── About.css
│               ├── Art.css
│               ├── ArtGallery.css
│               ├── Credits.css
│               ├── Experience.css
│               ├── Global.css           # CSS custom properties (color palette)
│               ├── Intro.css
│               ├── NavBar.css
│               ├── ProjectLog.css
│               ├── Projects.css
│               ├── RobotGame.css
│               └── SidebarNav.css
│
├── index.html
├── vite.config.ts
├── tailwind.config.js
├── postcss.config.js
├── tsconfig.json
└── netlify.toml
```

---

## Getting Started

### Prerequisites

- Node.js 18 or higher
- npm

### Installation

```bash
# Clone the repository
git clone https://github.com/abhinav-e-p-b/<your-repo-name>.git
cd <your-repo-name>

# Install dependencies
npm install

# Start the development server
npm run dev
```

The dev server starts on `http://localhost:5173` by default (or the next available port). The `--host` flag is set in the dev script, so it will also be accessible on your local network.

---

## Pages & Components

### Routes

| Path | Component | Description |
|---|---|---|
| `/` | `Landing` | Hero page with interactive text and blob cursor |
| `/portfolio` | `Portfolio` | Main portfolio with all sections |
| `/portfolio/log/:projectId` | `ProjectLog` | Long-form build log article |
| `/art` | `ArtGallery` | Full art collection |

### Color Palette

Colors are defined as CSS custom properties in `src/pages/portfolio/styles/Global.css`:

```css
--navy: #ffffff
--light-navy: #fff4ed
--lightest-navy: #ffe8d6
--slate: #6b7280
--lightest-slate: #111827
--green-bright: #F97316   /* primary accent (orange) */
--green-tint: rgba(249, 115, 22, 0.1)
```

> Despite the variable names (inherited from a common portfolio template), the palette is a warm white/orange theme rather than the classic dark navy/green.

### ASCII Portrait

The ASCII portrait in `AsciiPortrait.jsx` works in three tiers:

1. **Pre-computed data** (`asciiData.js`) — used for the three standard sizes (220px, 280px, 400px). No image processing needed.
2. **Memory cache** — if a non-standard size is needed, the image is processed once and cached in a module-level object for the session.
3. **Image fallback** — processes `/public/profile.png` via an offscreen canvas, converting pixel brightness to ASCII characters.

To update the portrait, replace `/public/profile.png` and optionally regenerate `asciiData.js` for the standard sizes.

### Project Build Logs

Build logs are defined as a data object inside `ProjectLog.jsx`. Each entry supports these content block types:

| Type | Renders as |
|---|---|
| `text` | Paragraph |
| `image` | Full-width image with rounded corners |
| `list` | Bulleted list with optional title |
| `tip` | Highlighted callout box with "Tip:" prefix |
| `code` | Monospace code block with dark background |
| `diagram` | Pre-formatted ASCII diagram in accent color |

To add a new project log, add an entry to the `projectLogs` object:

```js
"my-project": {
  title: "My Project Title",
  date: "June 2026",
  description: "Short description shown in the header.",
  image: "/assets/hardware/my-project/header.jpg",
  logs: [
    {
      title: "0. where it started",
      content: [
        { type: "text", value: "My story here..." },
        { type: "image", value: "/assets/hardware/my-project/photo.jpg" },
      ]
    }
  ]
}
```

Then link to it from `Projects.jsx` using `openLink: "/portfolio/log/my-project"`.

### Robot Game

The platformer in `RobotGame.jsx` is a canvas-based game that:

- Reads DOM element positions from section headings, card titles, and list items to use as platforms
- Spawns 5 "brain cell" collectibles at fixed document positions
- Supports keyboard controls: `← →` or `A D` to move, `Space` / `↑` / `W` to jump
- Resets automatically on page scroll-to-top when game mode is enabled
- Hidden on mobile (< 800px)

---

## Customization Guide

### Update personal information

| What | Where |
|---|---|
| Name, bio, tech stack | `src/pages/portfolio/components/About.jsx` |
| Experience entries | `src/pages/portfolio/components/JobList.jsx` → `experienceItems` object |
| Spotlight & other projects | `src/pages/portfolio/components/Projects.jsx` → `spotlightProjects` / `projects` objects |
| Social links (GitHub, LinkedIn, email) | `src/pages/portfolio/components/NavBar.jsx` |
| Email contact link | `src/pages/portfolio/components/Intro.jsx` |
| Profile photo | Replace `/public/profile.png` |

### Update the art gallery

Add image paths to the `topArt` array in `Art.jsx` (for the portfolio section preview) and the `allArt` array in `ArtGallery.jsx` (for the full gallery page). Place images in `/public/assets/art/`.

### Change the accent color

The primary accent color is `#F97316` (orange). To change it, update:
- `--green-bright` in `styles/Global.css`
- The `fillColor` prop on `<BlobCursor>` in `Landing.tsx`
- The gradient values in the CTA button in `Landing.tsx`
- The `shadowColor` prop on `<BlobCursor>`

### Add or remove Google Fonts

The `creativeFonts` array in `InteractiveText.tsx` lists all fonts used for the letter-hover effect. Add or remove font names from this array, and update the `@import` URL in `index.css` to match.

---

## Deployment

The project is configured for Netlify via `netlify.toml`:

```toml
[build]
  command = "npm install && npm run build"
  publish = "dist"
```

**To deploy:**

1. Push to your GitHub repository.
2. Connect the repo to [Netlify](https://netlify.com).
3. Netlify will auto-detect the build settings from `netlify.toml`.
4. Every push to `main` triggers a new deployment.

**For React Router to work on Netlify**, add a `_redirects` file to `/public/`:

```
/*    /index.html   200
```

This ensures that direct navigation to `/portfolio` or `/portfolio/log/pc` doesn't return a 404.

---

## Scripts

```bash
npm run dev      # Start development server (with --host for LAN access)
npm run build    # Type-check and build for production → ./dist
npm run preview  # Preview the production build locally
npm run lint     # Run ESLint
```

---

*Built by Abhinave P B.*
