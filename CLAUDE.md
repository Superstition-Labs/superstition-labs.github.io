# CLAUDE.md

Orientation for AI agents working on this repo. Read this before changing anything substantive.

## What this is

The marketing / identity site for **Superstition Labs, LLC** — a Phoenix-based private product development company (founded 2019). Defense work currently; long-term space ambitions. Lives at [superstitionlabs.com](https://superstitionlabs.com).

The site is one home page (composed of sections) plus a small set of standalone routes (brand guidelines, privacy, support, 404).

## Stack

- **Vite + React 19.2 + TypeScript 5.6**, strict mode
- **Tailwind CSS 3** with design tokens via CSS variables (`--c-*` in `src/styles/index.css` → exposed as Tailwind colors in `tailwind.config.ts`)
- **React Router 6** — `src/App.tsx`
- **React Three Fiber 9 + drei + postprocessing** for the hero scene
- **framer-motion** for hero copy reveals
- **GitHub Pages** deploy via Actions; CNAME persisted at `public/CNAME`

Scripts: `npm run dev`, `npm run typecheck`, `npm run lint` (or `lint:fix`), `npm run build`, `npm run format`.

## Layout

```
src/
  App.tsx               — routes (Home, BrandGuidelines, Privacy, Support, NotFound)
  main.tsx              — entry; mounts <App />
  components/           — shared UI primitives
    SpireMark.tsx       — the logo, sourced from one place (see "Brand system")
    SiteHeader.tsx
    SiteFooter.tsx
    HudPanel.tsx        — bordered card with four amber corner brackets
    SectionHeader.tsx   — [SEC.NN] bracketed code + eyebrow + display title
    StatusPill.tsx      — "● ACTIVE" style live indicator
    SubPage.tsx         — long-form text wrapper for Privacy/Support
  sections/             — composable home-page sections (Hero, WhatWeDo, Capabilities, …)
  scenes/               — decorative scenes
    NeuralMeshPlanet.tsx  — WebGL hero (desktop)
    OrbitalStatic.tsx     — SVG fallback (mobile / Suspense)
  pages/                — top-level routes
    BrandGuidelines.tsx — the brand spec, live
    Home.tsx, Privacy.tsx, Support.tsx, NotFound.tsx
  data/content.ts       — site-wide copy constants (wordmark, contactEmail, foundedYear, etc.) — single source
  lib/                  — utilities (cn, useScrollY, useInViewport)
  styles/
    index.css           — design tokens, base styles, component utilities (.hud-corners, .dot-grid, .scanlines, .readout, .eyebrow, .display-shout)
    fonts.ts            — font imports
public/
  favicon.svg           — standalone Spire mark with amber baked in
  CNAME                 — superstitionlabs.com (do not delete)
  404.html              — GitHub Pages SPA fallback
```

## Brand system — single source of truth

**The live brand spec is `/brand-guidelines`** (`src/pages/BrandGuidelines.tsx`). When you change colors, type, or the mark, also update that page so it stays accurate.

### The mark (The Spire)

- React component: `src/components/SpireMark.tsx` — uses `currentColor` so you set the color from the outside (Tailwind text color class on the parent or on the svg itself)
- Standalone copy: `public/favicon.svg` — amber `#FFB347` baked in for browser tab rendering
- **Both must move together** if the SVG geometry changes. Don't update one without the other.
- Geometry: 80×80 viewBox, Weaver's Needle silhouette in the lower half with a partial circular orbital arc passing behind the chiseled tip and a satellite emerging on the right. See the docstring at the top of `SpireMark.tsx` for current coordinates.

### Color tokens

Defined as `--c-*` CSS vars in `src/styles/index.css`, exposed via Tailwind in `tailwind.config.ts`. Always prefer the Tailwind class over a hex literal; if you need a new color, add a token first.

Primary palette:

| Token         | Tailwind         | Hex       | Role                                                              |
| ------------- | ---------------- | --------- | ----------------------------------------------------------------- |
| `--c-bg`      | `bg-bg`          | `#000000` | Page surfaces                                                     |
| `--c-fg`      | `text-fg`        | `#F0F2F8` | Primary foreground — type, marks                                  |
| `--c-accent`  | `text-accent`    | `#FFB347` | Signature warm tone. Status, emphasis, key affordances. **Single warm in an otherwise cool palette — never decorative.** |
| `--c-steel`   | `text-steel`     | `#7C9CDC` | Secondary — orbital traces, quiet readouts. Always reads as less important than amber. |

Surface (`bg-deep`, `bg-elev`), foreground dims (`fg-dim`, `fg-soft`), and status (`accent-hot`, `signal`, `warn`) are also defined — see the brand page for full inventory.

### Typography

- Display: **Saira Condensed** — `.font-display` / `.display-shout` (all-caps headlines, tight tracking, 500/600/700)
- Body: **Inter Variable** — `.font-body`
- Mono: **Geist Mono Variable** — `.font-mono` (HUD readouts, codes, identifiers; 9–11px, uppercase, tracking 0.22–0.32em)

All loaded in `src/styles/fonts.ts`.

### Aesthetic

SpaceX press-kit × Destiny 2 tactical. Dark surfaces, instrument-readout type, restrained motion. Idiomatic patterns:

- `em` / `i` is **overloaded** to be the amber "this is the part you remember" highlight. See `index.css` — `<em>` does not italicize, it goes amber. Use it as the in-headline emphasis mark.
- Section headers use `[SEC.NN]` bracketed program codes via `SectionHeader.tsx`.
- Cards use `HudPanel` (four amber corner brackets, dim border).
- Live indicators use `StatusPill` (`● ACTIVE`, tone variants).
- Background atmosphere via `.dot-grid`, `.scanlines`, `.noise` utilities (don't pile them all on the same surface).
- Triangle-bullet lists in long-form pages use `[&_ul>li]:before:content-['▸']`.

When writing new UI, match the surrounding code's comment density (we tend to explain the **why**, not the what — e.g. "kept low so it never reads as decorative noise"), and reach for existing components before rolling new ones.

## 3D scene — scroll-driven, not time-driven

The hero scene (`src/scenes/NeuralMeshPlanet.tsx`) rotates from **`window.scrollY`**, not `delta * speed`. At rest, nothing rotates.

`src/lib/useScrollY.ts` mutates a ref on every scroll event (no React re-renders — scroll fires dozens of times per second). Components take a `RefObject<number>` and read `ref.current` inside `useFrame`. A shared `SCROLL_SCALE` constant keeps the per-component speed ratios proportional to the original wall-clock values.

If you ever need wall-clock animation back, you'll need to undo this in the components that take `scrollRef`. Easier to keep what's there — it's the better UX (passive scenes don't burn the GPU).

## Routes

- `/` → `Home` (sections under `src/sections/`)
- `/brand-guidelines` → `BrandGuidelines` (the design system reference)
- `/privacy` → `Privacy`
- `/support` → `Support`
- `*` → `NotFound`

If you add a new top-level route, also add it to `App.tsx` and consider whether it deserves a footer link in `SiteFooter.tsx`.

## Deployment

- Pushes to `main` trigger GitHub Actions which build and publish to GitHub Pages.
- The site is served from `superstitionlabs.com` via the CNAME at `public/CNAME` — do not delete that file.
- **Don't poll `gh run list` after pushes.** The user explicitly does not want that noise.

## Working conventions

- **Strict TypeScript + ESLint.** Common lint rules to know about:
  - `import/order` — groups must be separated by blank lines; sibling imports (`./X`) go in their own group below parent (`../X`) imports
  - `react/jsx-sort-props` — props sorted alphabetically. Run `npx eslint --fix <file>` to auto-resolve
- Always run `npm run typecheck && npm run lint` before considering work done. Run `npm run build` if you've touched anything visual or routing-related.
- Prefer existing primitives (`HudPanel`, `SectionHeader`, `StatusPill`, `SubPage`) over new ones. The aesthetic depends on consistency.
- Site-wide copy constants live in `src/data/content.ts` — don't hardcode the wordmark or contact email in components.

## User preferences (preserve)

These are explicit, repeated guidance from the project owner — follow them:

- **Ask before committing on prompt completion.** Don't auto-commit when you finish a turn; ask "want me to commit?" first. Chaining `commit and push` together is fine **when the user explicitly says both words.**
- **Don't push to remote unprompted.** `git push` runs only on explicit request.
- **Don't poll `gh run list`** after pushing. Trust the deploy or check the dashboard out-of-band.
- The user often does manual edits between turns (see the system-reminder for "user modified file X"). When you see one, **don't revert it** — incorporate it and build on top.

## Commit style

- Subject line: imperative present, no period, ≤ 72 chars (`Spire mark: drop brackets, squat the mountain, lower the orbit`)
- Body: explain the **why** and any non-obvious trade-offs, hard-wrap around 72
- End every commit with:
  ```
  Co-Authored-By: Claude Opus 4.7 (1M context) <noreply@anthropic.com>
  ```
