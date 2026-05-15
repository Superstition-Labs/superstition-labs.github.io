import { ChevronRight } from 'lucide-react';
import { type ReactElement } from 'react';
import { Link } from 'react-router-dom';

import { contactEmail, wordmark } from '../data/content';
import { cn } from '../lib/cn';

/**
 * Two-row tactical header: a thin classification banner up top (the
 * SpaceX/defense-program convention) and the wordmark / transmit link below.
 */
export function SiteHeader(): ReactElement {
  return (
    <header className="fixed inset-x-0 top-0 z-40">
      {/* Classification banner — sets the tone immediately. */}
      <div
        className={cn(
          'flex h-6 items-center justify-between border-b border-accent/40 bg-bg/95 px-5 sm:px-8',
          'font-mono text-[9px] uppercase tracking-[0.32em] text-accent/80',
        )}
      >
        <span className="flex items-center gap-2">
          <span aria-hidden className="block h-1.5 w-1.5 bg-accent animate-pulse-soft" />
          Unclassified · Public Release
        </span>
        <span className="hidden text-fg-soft sm:inline">
          Sys/01 · Nominal · Phoenix 33.4°N 112.0°W
        </span>
        <span className="text-fg-soft sm:hidden">PHX</span>
      </div>

      {/* Wordmark + transmit link. */}
      <div
        className={cn(
          'flex items-center justify-between px-5 py-3 sm:px-8',
          'border-b border-line/15 bg-bg/85 md:backdrop-blur-[2px]',
        )}
      >
        <Link
          className="group inline-flex items-center gap-3 text-fg focus-visible:outline focus-visible:outline-1 focus-visible:outline-accent"
          to="/"
        >
          <span
            aria-hidden
            className="grid h-5 w-5 place-items-center border border-accent/70 text-accent"
          >
            {/* Triangle mark — recurring across the site. */}
            <svg className="h-2.5 w-2.5" fill="currentColor" viewBox="0 0 10 10">
              <polygon points="1,1 9,5 1,9" />
            </svg>
          </span>
          <span className="font-mono text-[10px] uppercase tracking-[0.32em] text-fg group-hover:text-accent">
            {wordmark}
          </span>
        </Link>
        <a
          className="group inline-flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.28em] text-fg-dim hover:text-accent"
          href={`mailto:${contactEmail}`}
        >
          Transmit
          <ChevronRight
            className="transition-transform group-hover:translate-x-0.5"
            size={12}
            strokeWidth={2}
          />
        </a>
      </div>
    </header>
  );
}
