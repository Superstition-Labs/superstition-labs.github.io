import { type ReactElement, type SVGProps } from 'react';
import { Link } from 'react-router-dom';

import { SiteFooter } from '../components/SiteFooter';
import { SiteHeader } from '../components/SiteHeader';

// =========================================================================
// THE SPIRE — Superstition Labs logo (chosen mark)
//
// Square 80×80 viewBox so the mark drops cleanly into any 1:1 slot
// (favicon, app icon, social card). The silhouette is Weaver's Needle:
// apex high-right with a chisel-angled tip, a short steep right cliff
// face, and a long gradual left shoulder flaring out to a wide foothill
// base. The orbital arc is a true circular arc (r = 80) that passes
// BEHIND the spire — the middle of the arc crosses the spire's narrow
// upper interior (around y≈24) and is occluded by drawing the spire
// after the arc. The visible result is two lateral arc segments
// flanking the mountain, with the satellite emerging on the right.
// =========================================================================

function SpireMark(props: SVGProps<SVGSVGElement>): ReactElement {
  return (
    <svg fill="none" viewBox="0 0 80 80" {...props}>
      {/* Bracket frame — corner indicators on an 80×80 square. */}
      <path d="M 3 12 L 3 3 L 12 3" stroke="currentColor" strokeWidth="2" />
      <path d="M 68 3 L 77 3 L 77 12" stroke="currentColor" strokeWidth="2" />
      <path d="M 3 68 L 3 77 L 12 77" stroke="currentColor" strokeWidth="2" />
      <path d="M 68 77 L 77 77 L 77 68" stroke="currentColor" strokeWidth="2" />

      {/* Partial orbital arc — circular (rx = ry = 80), only ~38°
          sweep. The arc reads as a small "zoomed in" slice of a much
          larger orbit, nearly straight rather than a dome. Drawn
          first so the spire silhouette occludes the middle. Chord at
          y=28 keeps the satellite sitting exactly on the arc at
          (55, 25). */}
      <path
        d="M 14 28 A 80 80 0 0 1 66 28"
        stroke="currentColor"
        strokeWidth="1.8"
      />

      {/* Satellite on the right wing, just past where the spire
          silhouette occludes the arc. */}
      <circle cx="55" cy="25" fill="currentColor" r="4" />

      {/* The spire — Weaver's Needle silhouette, scaled tall and narrow.
          Asymmetric quad: apex high-right at (46,6) with a long
          chisel-angled tip sloping down-left to (34,17); near-vertical
          right cliff (~6° lean) from apex to (52,64); steeper-but-still
          near-vertical left side (~14° lean) from chisel to base at
          (22,64). Drawn AFTER the arc so its silhouette occludes the
          middle of the orbit. */}
      <path d="M 46 6 L 34 17 L 22 64 L 52 64 Z" fill="currentColor" />

      {/* Ground line — same y as the spire base, extending ~8 units
          past it on each side. Same tone as everything else (no
          opacity) so the mark reads as truly monotone. */}
      <line stroke="currentColor" strokeWidth="1.2" x1="14" x2="60" y1="64" y2="64" />
    </svg>
  );
}

// =========================================================================
// Showcase scaffolding
// =========================================================================

interface LockupProps {
  readonly markHeight: number;
}

function Lockup({ markHeight }: LockupProps): ReactElement {
  return (
    <div className="flex items-center gap-5 text-fg">
      <SpireMark height={markHeight} width={markHeight} />
      <div className="flex flex-col leading-none">
        <span
          className="font-display font-bold uppercase text-fg"
          style={{ fontSize: markHeight * 0.34, letterSpacing: '0.06em' }}
        >
          Superstition
        </span>
        <span
          className="font-display font-bold uppercase text-fg"
          style={{ fontSize: markHeight * 0.34, letterSpacing: '0.06em' }}
        >
          Labs
        </span>
      </div>
    </div>
  );
}

function ScaleStrip(): ReactElement {
  const sizes = [96, 48, 32, 20, 16];
  return (
    <div className="flex items-end gap-8 text-fg">
      {sizes.map((s) => (
        <div className="flex flex-col items-center gap-2" key={s}>
          <SpireMark height={s} width={s} />
          <span className="font-mono text-[9px] uppercase tracking-[0.24em] text-fg-soft">
            {s}px
          </span>
        </div>
      ))}
    </div>
  );
}

// =========================================================================
// PAGE
// =========================================================================

export function LogoLab(): ReactElement {
  const heroHeight = 240;
  return (
    <div className="min-h-screen bg-bg text-fg">
      <SiteHeader />
      <main className="pt-24">
        <header className="px-5 pb-12 pt-12 sm:px-8 sm:pb-16">
          <div className="mx-auto max-w-6xl">
            <div className="mb-5 flex items-center gap-3">
              <span aria-hidden className="block h-px w-6 bg-accent" />
              <span className="readout text-accent">Superstition Labs · Selected</span>
            </div>
            <h1
              className="display-shout text-balance text-fg"
              style={{ fontSize: 'clamp(32px, 5vw, 64px)' }}
            >
              <em>The Spire.</em>
            </h1>
            <p className="mt-6 max-w-2xl font-body text-[15px] leading-[1.7] text-fg-dim">
              Weaver&apos;s Needle inside a bracket frame, with a circular orbital
              arc passing behind the mountain. The satellite emerges from the right
              side of the silhouette. 80×80 viewBox — drops cleanly into any
              square slot (favicon, app icon, social card).
            </p>
            <div className="mt-6">
              <Link
                className="font-mono text-[10px] uppercase tracking-[0.28em] text-fg-soft hover:text-accent"
                to="/"
              >
                ← Back to home
              </Link>
            </div>
          </div>
        </header>

        <section className="border-t border-line/15 px-5 py-20 sm:px-8 sm:py-24">
          <div className="mx-auto max-w-6xl">
            <div className="mb-12 font-mono text-[10px] uppercase tracking-[0.28em] text-fg-soft">
              The mark · three color treatments
            </div>
            <div className="mb-16 grid grid-cols-1 gap-px overflow-hidden border border-line/20 sm:grid-cols-3">
              <div className="flex min-h-[360px] items-center justify-center bg-bg p-10 text-fg">
                <SpireMark height={heroHeight} width={heroHeight} />
              </div>
              <div className="flex min-h-[360px] items-center justify-center bg-bg-elev/40 p-10 text-accent">
                <SpireMark height={heroHeight} width={heroHeight} />
              </div>
              <div className="flex min-h-[360px] items-center justify-center bg-fg p-10 text-bg">
                <SpireMark height={heroHeight} width={heroHeight} />
              </div>
            </div>

            <div className="mb-12">
              <div className="mb-4 font-mono text-[10px] uppercase tracking-[0.28em] text-fg-soft">
                Wordmark lockup
              </div>
              <div className="border border-line/20 bg-bg-elev/30 p-10">
                <Lockup markHeight={96} />
              </div>
            </div>

            <div>
              <div className="mb-4 font-mono text-[10px] uppercase tracking-[0.28em] text-fg-soft">
                Icon scales · favicon legibility check
              </div>
              <div className="border border-line/20 bg-bg-elev/30 p-10">
                <ScaleStrip />
              </div>
            </div>
          </div>
        </section>

        <section className="border-t border-line/15 px-5 py-16 sm:px-8">
          <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-4">
            <div className="font-mono text-[10px] uppercase tracking-[0.28em] text-fg-soft">
              The Spire · selected
            </div>
            <Link
              className="font-mono text-[10px] uppercase tracking-[0.28em] text-fg-soft hover:text-accent"
              to="/"
            >
              ← Back to home
            </Link>
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}
