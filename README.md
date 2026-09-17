# Pulse AI — Modern React Web Application

A responsive, feature-packed landing page and interactive sandbox built with **React 19**, **TypeScript**, and **Vite**.

## Features

- ⚡ **Vite + React 19 + TypeScript**: Sub-second Hot Module Replacement (HMR) and strict type-safety.
- 🌓 **Dynamic Dark/Light Theme**: Smooth theme switcher with local storage persistence and system preference detection.
- 🧪 **Interactive Live Sandbox**: Real-time pipeline simulation with adjustable worker concurrency, auto-healing toggle, dynamic throughput/latency metrics, and an active console log stream.
- 🎯 **Filterable Capabilities**: Category-filtered feature matrix with responsive cards and Lucide icons.
- 📊 **Key Performance Metrics**: Highlighting enterprise SLAs, sub-millisecond latencies, and volume benchmarks.
- ⭐ **Testimonials & Social Proof**: Customer stories and verified team ratings.
- ❓ **Interactive FAQ Accordion**: Expandable Q&A covering architecture, data privacy, and reliability.
- 📬 **Interactive CTA**: Form with email validation and invitation dispatch feedback.
- 📱 **Fully Responsive Layout**: Fluid typography, CSS Grid, glassmorphic cards, and mobile slide-out navigation.

---

## Getting Started

### 1. Start Development Server
```bash
npm run dev
```
Open `http://localhost:5173` in your browser.

### 2. Build for Production
```bash
npm run build
```
Creates an optimized production bundle in the `dist` directory.

### 3. Preview Production Build
```bash
npm run preview
```

### 4. Code Quality
```bash
npm run lint
```
Runs Oxlint checks across all TypeScript and React files.

---

## Project Structure

```
├── index.html                     # HTML entry point with Google Fonts & metadata
├── src/
│   ├── components/
│   │   ├── Navbar.tsx             # Navigation header & theme switcher
│   │   ├── Hero.tsx               # Hero headline, badges & primary CTAs
│   │   ├── InteractiveDemo.tsx    # Live simulation playground & terminal logs
│   │   ├── Features.tsx           # Category-filtered feature grid
│   │   ├── MetricsSection.tsx     # Performance SLAs & metrics banner
│   │   ├── Testimonials.tsx       # Customer reviews & ratings
│   │   ├── FAQ.tsx                # Accordion FAQ component
│   │   ├── CTASection.tsx         # Newsletter & early access form
│   │   └── Footer.tsx             # Multi-column footer & system status
│   ├── App.tsx                    # Root component & theme provider
│   ├── App.css                    # Component layout & animation styles
│   ├── index.css                  # Global design tokens & CSS variables
│   └── main.tsx                   # React DOM application mount
├── package.json
└── tsconfig.json
```
