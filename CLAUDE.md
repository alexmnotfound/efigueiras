# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project

Single-page landing site for an ontological coach. React 19 + Vite 7 + TypeScript + Tailwind CSS v3 + shadcn/ui. All work lives under `app/`.

## Commands

Run from `app/`:

```bash
npm run dev       # dev server
npm run build     # tsc + vite build
npm run lint      # eslint
npm run preview   # preview production build
```

No test suite configured.

## Architecture

`App.tsx` is a flat composition of all sections — no routing, no state management. Page order: `Navigation → HeroSection → ChallengeSection → PhilosophySection → ServicesSection → TestimonialsSection → FinalCTASection → Footer`.

**Key directories:**
- `src/sections/` — one file per page section (used once each)
- `src/components/` — shared layout (`Navigation`, `Footer`) and reusable primitives (`ScrollReveal`, `SectionLabel`)
- `src/components/ui/` — shadcn/ui components (40+), treat as library code
- `src/hooks/` — `useScrolled.ts` (scroll > 60px boolean), `use-mobile.ts`
- `src/lib/utils.ts` — `cn()` helper (clsx + tailwind-merge)
- `src/pages/Home.tsx` — exists but App.tsx is the actual entry; sections are imported directly

**Path alias:** `@/` → `src/`

## Animation pattern

All scroll-triggered reveals use the `ScrollReveal` wrapper component (`src/components/ScrollReveal.tsx`). It wraps Motion's `whileInView` with `viewport={{ once: true, amount: 0.2 }}`. Props: `direction` (`up`/`left`/`right`) and `staggerChildren`. Do not reach for raw `motion.div` in sections — use `ScrollReveal` instead.

Hero entrance animations are raw `motion.div` with incremental `transition.delay` (one-time entrance, not scroll-triggered).

## Design tokens

Accent colour: `#c4724a`. Font: Poppins via `font-poppins` (CSS variable set in `index.css`). Button variants `accent` and `accent-outline` are defined in `src/components/ui/button.tsx` via CVA — use those for all CTAs.

## Constraints

- Static site — no API routes, no server features. If a Next.js-style `output: 'export'` requirement appears in `tech-spec.md`, the current Vite setup already satisfies it.
- All images are local assets in `public/`.
- `tech-spec.md` at the repo root is the design reference — check it before adding new sections or animation patterns.
