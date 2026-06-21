# Portfolio V2.0 — Abhinave P B

> A personal portfolio website built with React + TypeScript + Vite, featuring an interactive landing page, dark-themed portfolio sections, glitch-effect portrait, a robot side-scroller game, and an art gallery.

---

## 📋 Table of Contents

- [Overview](#overview)
- [Features](#features)
- [Project Structure](#project-structure)
- [Tech Stack](#tech-stack)
- [Getting Started](#getting-started)
- [Available Scripts](#available-scripts)
- [Pages & Sections](#pages--sections)
- [Components](#components)
- [Customisation](#customisation)
- [Deployment](#deployment)

---

## Overview

Portfolio V2.0 is a two-page React application:

1. **Landing Page** — An animated splash screen with a custom blob cursor, floating icons, and interactive hover-letter text.
2. **Portfolio Page** — A full portfolio with sections for Intro, About, Experience, Software Projects, and Art, plus a playable side-scroller game.

The design follows a **dark theme** (`#0a0a0f`) with an **orange accent** (`#F97316`) throughout both pages for a cohesive look.

---

## ✨ Features

| Feature | Description |
|---|---|
| 🎯 **Custom Blob Cursor** | GSAP-animated trailing blob that replaces the default cursor |
| 🔤 **Interactive Text** | Letters on the landing page scatter and snap back on hover |
| 🤖 **Robot Side-Scroller** | Toggle a browser game where a robot runs across the page |
| 👾 **Glitch Portrait** | Profile photo with animated CRT scanlines, chromatic aberration, and glitch bursts |
| 🎨 **Art Gallery** | Masonry grid of artwork with a full `/art` gallery page |
| 🌊 **Fade-in Sections** | IntersectionObserver-based scroll animations on every section |
| 📱 **Fully Responsive** | Mobile-first layouts across all breakpoints |
| 🚀 **Smooth Navigation** | Section-aware navbar with smooth scroll — no full-page reloads |

---

## Project Structure

```
Portfolio-V2.0/
├── public/
│   ├── profile.png              # Profile photo used by GlitchPortrait
│   ├── assets/
│   │   └── art/                 # Art section images (JPG)
│   └── _redirects               # Netlify SPA redirect
│
├── src/
│   ├── App.tsx                  # Root router — / (Landing) and /portfolio/* (Portfolio)
│   ├── main.tsx                 # React entry point
│   ├── index.css                # Global styles, Tailwind, custom cursor rules
│   │
│   ├── components/              # Shared components (Landing page)
│   │   ├── BlobCursor.tsx       # GSAP trailing blob cursor
│   │   ├── FloatingIcons.tsx    # Floating tech icons background
│   │   ├── ImageSpawner.tsx     # Click-to-spawn image effect
│   │   └── InteractiveText.tsx  # Hover-scatter letter animation
│   │
│   └── pages/
│       ├── Landing.tsx          # Landing / splash page
│       └── portfolio/
│           ├── Portfolio.jsx    # Portfolio shell — routing + game toggle
│           ├── Portfolio.css    # Portfolio-wide layout styles
│           ├── assets/
│           │   └── asciiData.js # Pre-baked ASCII portrait data (empty = live render)
│           ├── components/
│           │   ├── NavBar.jsx          # Fixed top navbar with smooth-scroll links
│           │   ├── SidebarNav.jsx      # Vertical dot-nav sidebar
│           │   ├── Intro.jsx           # Hero intro with GlitchPortrait
│           │   ├── GlitchPortrait.jsx  # Canvas portrait with CRT/glitch FX
│           │   ├── About.jsx           # About me + tech stack
│           │   ├── Experience.jsx      # Work experience tabs
│           │   ├── JobList.jsx         # Individual job tab panel
│           │   ├── Projects.jsx        # Spotlight carousel + project cards
│           │   ├── ProjectLog.jsx      # Full project write-up page
│           │   ├── Art.jsx             # Art section preview grid
│           │   ├── ArtGallery.jsx      # Full art gallery page (/art)
│           │   ├── Credits.jsx         # Footer credits
│           │   ├── FadeInSection.jsx   # IntersectionObserver scroll-fade wrapper
│           │   ├── ExternalLinks.jsx   # GitHub / external link icon buttons
│           │   └── RobotGame.jsx       # Canvas side-scroller mini-game
│           └── styles/
│               ├── Global.css      # CSS variables (dark theme tokens)
│               ├── NavBar.css
│               ├── Intro.css
│               ├── About.css
│               ├── Experience.css
│               ├── Projects.css
│               ├── ProjectLog.css
│               ├── Art.css
│               ├── ArtGallery.css
│               ├── SidebarNav.css
│               ├── Credits.css
│               └── RobotGame.css
│
├── index.html
├── vite.config.ts
├── tailwind.config.js
├── netlify.toml
└── package.json
```

---

## 🛠 Tech Stack

### Core
| Technology | Version | Role |
|---|---|---|
| **React** | 19 | UI framework |
| **TypeScript** | 5.8 | Type safety (landing page) |
| **Vite** | 6 | Build tool & dev server |
| **React Router DOM** | 7 | Client-side routing |

### Styling
| Technology | Role |
|---|---|
| **Vanilla CSS** | Portfolio page — all component styles |
| **TailwindCSS** | Landing page utility classes |
| **CSS Variables** | Dark theme tokens in `Global.css` |

### Animation & UI
| Library | Role |
|---|---|
| **GSAP** | Blob cursor animation |
| **Framer Motion** | Landing page entrance animations |
| **Canvas API** | Glitch portrait, robot game |

### Component Libraries
| Library | Role |
|---|---|
| **MUI (Material UI)** | Icons throughout portfolio |
| **React Bootstrap** | Navbar, carousel |
| **react-type-animation** | Typewriter intro text |

---

## 🚀 Getting Started

### Prerequisites

- Node.js `>= 18`
- npm

### Installation

```bash
# 1. Clone the repository
git clone https://github.com/abhinav-e-p-b/abhinavepb2.0.git
cd abhinavepb2.0

# 2. Install dependencies
npm install

# 3. Start the development server
npm run dev
```

The app runs at `http://localhost:5173` by default.

---

## Available Scripts

| Script | Description |
|---|---|
| `npm run dev` | Start Vite dev server with hot reload |
| `npm run build` | Build for production → `/dist` |
| `npm run preview` | Preview the production build locally |
| `npm run lint` | Run ESLint |

---

## 📄 Pages & Sections

### `/` — Landing Page
- Custom orange blob cursor with GSAP trail
- Floating tech icon background
- Interactive text — hover over letters to scatter them
- CTA button to enter portfolio

### `/portfolio` — Portfolio Page

| Section | ID | Description |
|---|---|---|
| Intro | `#intro` | Glitch portrait + typewriter greeting |
| About | `#about` | Bio, tech stack list, GitHub avatar |
| Experience | `#experience` | Tabbed work experience panel |
| Software | `#projects` | Spotlight carousel + project cards |
| Art | `#art` | Masonry art preview + link to full gallery |

### `/portfolio/art` — Full Art Gallery
Masonry grid of all artwork with a back-button to the main portfolio.

### `/portfolio/projects/:id` — Project Log
Detailed write-up page for individual projects with hero image, article sections, code blocks, and tips.

---

## 🧩 Components

### `GlitchPortrait.jsx`
Canvas-based component that renders `profile.png` with:
- **CRT scanlines** — scrolling horizontal bands
- **Chromatic aberration** — RGB channels split during glitch events
- **Horizontal slice corruption** — rows shift sideways randomly
- **Vignette** — dark radial fade around edges
- **Orange bracket framing** — corner `[ ]` brackets in the brand orange
- **Flickering label** — `// abhinave.pb` text that glitches out during distortion

To change the portrait photo, replace `/public/profile.png`.

### `BlobCursor.tsx`
GSAP-powered cursor replacement. Key props:
```tsx
<BlobCursor
  fillColor="#F97316"      // Blob colour
  trailCount={3}           // Number of trailing blobs
  sizes={[20, 40, 60]}     // Blob sizes in px
  filterStdDeviation={15}  // Gooey blur strength
  zIndex={9999}
/>
```

### `RobotGame.jsx`
A browser mini-game toggled via the **game mode** button (top-left of portfolio).

Controls:
| Key | Action |
|---|---|
| `← →` | Move left / right |
| `Space` | Jump |
| `Scroll` | Explore the page |

### `FadeInSection.jsx`
Scroll-activated fade-in wrapper using `IntersectionObserver`. Use the `delay` prop to stagger children:
```jsx
<FadeInSection delay="200ms">
  <YourComponent />
</FadeInSection>
```

---

## 🎨 Customisation

### Changing the colour theme
All theme tokens live in one file: `src/pages/portfolio/styles/Global.css`

```css
:root {
  --navy: #0a0a0f;           /* Page background */
  --light-navy: #13131c;     /* Card backgrounds */
  --lightest-navy: #1a1a28;  /* Hover card backgrounds */
  --slate: #9ca3af;          /* Secondary text */
  --lightest-slate: #f5f5f5; /* Primary text */
  --green-bright: #F97316;   /* Accent colour (orange) */
  --green-tint: rgba(249, 115, 22, 0.12); /* Accent tint */
}
```

### Updating your profile photo
Replace `/public/profile.png` with your own image. PNG format with a plain or transparent background works best for the glitch effect.

### Adding projects
Edit `spotlightProjects` (carousel) and `projects` (cards) in `Projects.jsx`:
```js
const projects = {
  "Your Project Name": {
    desc: "Short description.",
    techStack: "React, Node.js",
    link: "https://github.com/you/your-repo",
    open: "https://your-live-site.com", // optional
  },
};
```

### Adding art
1. Drop image files into `/public/assets/art/`
2. Add entries to `topArt` in `Art.jsx` (preview) and `allArt` in `ArtGallery.jsx` (full gallery):
```js
{ src: "/assets/art/your-image.jpg", title: "your title" }
```

### Updating experience
Edit `JobList.jsx` to add or modify work experience entries.

---

## 🌐 Deployment

The project is configured for **Netlify** out of the box via `netlify.toml`.

### Deploy to Netlify
1. Push to GitHub
2. Connect the repo in the Netlify dashboard
3. Build settings are auto-detected:
   - **Build command:** `npm install && npm run build`
   - **Publish directory:** `dist`
   - **Node version:** 18
4. All routes redirect to `index.html` for React Router SPA support

### Manual / other hosts
```bash
npm run build
# Upload the /dist folder to any static host (Vercel, GitHub Pages, S3, etc.)
```

---

## 📝 License

Built by **Abhinave P B**. All rights reserved.
