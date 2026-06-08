# Tech Spec — Ontological Coach Landing Page

## Dependencies

### Production

| Package | Version | Purpose |
|---------|---------|---------|
| `next` | `^15` | App Router, static export |
| `react` | `^19` | UI framework |
| `react-dom` | `^19` | DOM renderer |
| `typescript` | `^5` | Type safety |
| `@types/react` | `^19` | React type definitions |
| `@types/node` | `^22` | Node type definitions |
| `tailwindcss` | `^3` | Utility-first CSS |
| `postcss` | `^8` | CSS processing |
| `autoprefixer` | `^10` | CSS vendor prefixes |
| `motion` | `^12` | All animations — `whileInView`, `useScroll`, `useTransform`, `useInView` |
| `lucide-react` | `^0.400` | Icons |
| `class-variance-authority` | `^0.7` | Component variant utility (shadcn dep) |
| `clsx` | `^2` | Conditional classnames (shadcn dep) |
| `tailwind-merge` | `^2` | Tailwind class deduplication (shadcn dep) |

### shadcn/ui Components (installed via CLI)

| Component | Usage | Customisation |
|-----------|-------|---------------|
| `button` | All CTAs throughout | Override colours to Accent (`#c4724a`), add Radius Full variant |

---

## Component Inventory

### Layout (shared across page)

| Component | Source | Notes |
|-----------|--------|-------|
| `Navigation` | Custom | Transparent-to-solid on scroll. Custom scroll hook (see State & Logic). Mobile overlay with staggered link animation. |
| `Footer` | Custom | Static three-column layout. No animation. |

### Sections (page-specific, used once each)

| Component | Source | Notes |
|-----------|--------|-------|
| `HeroSection` | Custom | Full-viewport. Orchestrated 6-step entrance timeline. Ken Burns background. Scroll indicator pulse loop. |
| `ChallengeSection` | Custom | 3 challenge cards in grid. Scroll-triggered reveal. |
| `PhilosophySection` | Custom | Two-column layout. Left text slides from left, right blocks slide from right with stagger. |
| `ServicesSection` | Custom | Two service cards with image headers, icon circles, feature checklists. |
| `TestimonialsSection` | Custom | Three testimonial cards with quote icons, pill tags. |
| `FinalCTASection` | Custom | Dark background. Decorative lines. Centred content reveal. |

### Reusable Components (used by multiple sections)

| Component | Source | Used By | Notes |
|-----------|--------|---------|-------|
| `SectionLabel` | Custom | All 5 content sections | Uppercase label with Accent colour. Simple styled span. |
| `ScrollReveal` | Custom | All 5 content sections | Wrapper component applying the standard scroll-triggered fade+translateY reveal. Accepts `direction` (up/left/right) and `staggerChildren` for orchestration. Eliminates repetitive motion boilerplate across every section. |
| `ServiceCard` | Custom | ServicesSection (×2) | Image header, icon circle, title, subtitle, description, feature checklist, CTA link. Parameterised by content prop. |
| `TestimonialCard` | Custom | TestimonialsSection (×3) | Quote icon, italic quote, name, role, pill tag. Parameterised by content prop. |

---

## Animation Implementation

| Animation | Library | Implementation Approach | Complexity |
|-----------|---------|------------------------|------------|
| Hero 6-step entrance sequence | Motion | `motion.div` with `initial`/`animate` and incremental `transition.delay` per element. Pure declarative, no timeline needed. | Low |
| Hero Ken Burns background | Motion | `motion.div` on background layer: `animate={{ scale: [1.05, 1] }}` with `transition={{ duration: 20, repeat: Infinity, repeatType: "reverse", ease: "linear" }}` | Low |
| Scroll indicator pulse | Motion | `motion.div` circle: `animate={{ y: [0, 12], opacity: [1, 0] }}` with `transition={{ duration: 2, repeat: Infinity }}` | Low |
| Nav scroll transition | CSS | `className` toggle driven by scroll state hook. All transitions (bg, shadow, text colour) handled via Tailwind `transition-all duration-300`. No animation library needed. | Low |
| Mobile menu link stagger | Motion | Parent `motion.div` with `staggerChildren: 0.08` in transition, each link child with `initial={{ opacity: 0, y: 20 }}` / `animate={{ opacity: 1, y: 0 }}`. Tied to menu open state. | Low |
| **ScrollReveal wrapper** | **Motion** | **`whileInView` with `viewport={{ once: true, amount: 0.2 }}`**. `variants` object with `hidden`/`visible` states. Direction prop controls translateX vs translateY. `staggerChildren` variant for child orchestration. **Reused by all 5 content sections.** | **Medium** 🔒 |
| Philosophy split-direction reveal | Motion (ScrollReveal) | Left column uses ScrollReveal with `direction: left`, right column uses `direction: right` with `staggerChildren`. Same component, different props. | Low |
| Card hover lift + shadow | CSS | Tailwind `hover:translate-y-[-4px] hover:shadow-elevated transition-all duration-250`. No JS needed. | Low |
| Button hover states | CSS | Tailwind hover utilities for scale, bg colour, shadow changes. `transition-all duration-200`. | Low |
| Ghost link underline | CSS | `::after` pseudo-element with `w-0` → `hover:w-full` transition, Accent colour. | Low |
| Decorative lines (Final CTA) | Motion | `motion.div` with `initial={{ opacity: 0 }}` / `whileInView={{ opacity: 0.4 }}` / `transition={{ duration: 1.2 }}`. Three separate divs. | Low |

---

## State & Logic

### useScrolled Hook (custom)

A single reusable hook that returns a boolean: `true` when `scrollY > 60px`.

**Used by:** `Navigation` (transparent ↔ solid transition), potentially `ScrollReveal` if viewport amount needs dynamic adjustment (not required by design).

**Implementation:** `useEffect` with `window.addEventListener('scroll', ...)` and a ref for the 60px threshold. Clean up on unmount. Runs only on client — safe since nav only renders client-side as a fixed element. No state library needed.

### Mobile Menu Open State

Local `useState` boolean in `Navigation`. Controls overlay visibility + body scroll lock (`overflow: hidden` on `<body>` when open). No global state needed.

---

## Other Key Decisions

### shadcn/ui Button Customisation

The design uses only one shadcn component: `button`. Two approaches:

1. **Custom variants via CVA** (recommended): Extend the shadcn Button's `cva` config with `accent` and `accent-outline` variants matching the design's Accent colour, Radius Full shape, and specific padding. This keeps shadcn's structure while adding design-specific variants.

2. **Tailwind override**: Use shadcn's default button and override with Tailwind classes per instance.

Approach 1 is cleaner — the CTA style is reused 5+ times across the page.

### Static Export (next.config.js)

```js
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true, // Required for static export when using <img> or next/image without loader
  },
}
```

All images are local assets in `/public`. No CMS, no API routes, no server features.

### Font Loading

Poppins loaded via `next/font/google` in the root layout:

```tsx
import { Poppins } from 'next/font/google'

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-poppins',
})
```

Applied via CSS variable on `<html>` or `<body>`. Tailwind config extends `fontFamily` to use the variable.
