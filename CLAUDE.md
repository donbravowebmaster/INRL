# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project

Institutional landing page for **Instituto Nuevo Reino de León (INRL)** — a bilingual, laical, IB-certified private school in Apodaca, Nuevo León. Built with Vite + React + TypeScript + Tailwind CSS v4. All user-facing text is in Spanish.

## Commands

```bash
pnpm install       # install dependencies
pnpm dev           # start dev server
pnpm build         # production build (validate this before delivering changes)
pnpm preview       # preview the production build locally
```

No test runner is configured. Use `pnpm build` as the final check to confirm TypeScript and bundling pass.

## Architecture

The app is a single-page React SPA. All content lives in two files:

- [src/LandingPage.tsx](src/LandingPage.tsx) — the entire page (hero, differentiators, school levels, gallery, admissions process, FAQ, CTA, footer, floating WhatsApp button). This is the primary file to edit.
- [src/App.tsx](src/App.tsx) — root component; just renders `<LandingPage />`.
- [src/styles.css](src/styles.css) — global styles; Tailwind is configured via the `@tailwindcss/vite` plugin (no `tailwind.config.js` needed).
- [public/images/](public/images/) — real campus photos (`campus.png`, `cancha.png`, `alberca.png`, `robotica.png`) and WhatsApp SVG logo.

## Design System

Defined in [DESIGN.md](DESIGN.md). Key rules:

- **Colors:** Navy `#17118A` (primary/brand), Sky Blue `#2EA8DF` (tech), Lime `#A6CE39` (academia), Orange `#F7941D` (sports/CTA), Off-white `#FAFAFA` (bg), Ink `#252525` (text).
- **Typography:** Plus Jakarta Sans exclusively. No serif or decorative typefaces.
- **Buttons:** Full-pill shape. Primary = orange `#F7941D`. WhatsApp = `#25D366` with dark-green text `#073B22`.
- **Cards:** `rounded-[2rem]`, 1px border `#252525/10`, white background, shadow only on hover.
- **Hover elevation:** `hover:shadow-[0_24px_60px_rgba(46,168,223,0.1)]` + `hover:-translate-y-1`. No static floating shadows.
- **One Color Accent Rule:** Each section has a single dominant accent color.
- **Easing:** `ease-premium-out` / `ease-premium-in-out` are custom Tailwind utilities defined inline.
- Minimum text contrast 4.5:1. Support `prefers-reduced-motion`.

## Tone and Content Rules (from AGENTS.md)

Act as a senior fullstack developer. Keep components clear, styles responsive, and all text in Spanish. Run `pnpm build` before delivering if dependencies are installed.

## Page Sections (by anchor ID)

| ID | Section |
|----|---------|
| `#inicio` | Hero — tagline, headline, stats card |
| `#diferenciadores` | 4 differentiator cards (IB, bilingual, swim, robotics) |
| `#niveles` | Interactive level selector (Preescolar / Primaria / Secundaria) |
| `#galeria` | Campus photo gallery |
| `#proceso` | 3-step admissions process |
| `#preguntas` | FAQ accordion |
| `#admisiones` | Final CTA with WhatsApp contact |
