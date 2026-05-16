import { type ReactElement } from 'react';
import { Link } from 'react-router-dom';

import { SiteFooter } from '../components/SiteFooter';
import { SiteHeader } from '../components/SiteHeader';
import { SpireMark } from '../components/SpireMark';

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
