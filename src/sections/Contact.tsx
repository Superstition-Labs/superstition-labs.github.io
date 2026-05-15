import { ChevronRight } from 'lucide-react';
import { type ReactElement } from 'react';

import { contactEmail } from '../data/content';
import { cn } from '../lib/cn';

export function Contact(): ReactElement {
  return (
    <section className="scanlines relative overflow-hidden border-t border-line/15 bg-bg px-5 py-28 sm:px-8 sm:py-40">
      {/* Wide accent rule + amber tick across the top. */}
      <div aria-hidden className="absolute inset-x-0 top-0 h-px bg-line/30" />
      <div aria-hidden className="absolute left-1/2 top-0 h-3 w-px -translate-x-1/2 bg-accent" />

      <div className="mx-auto max-w-6xl">
        <div className="mb-8 flex flex-wrap items-center gap-3">
          <span className="readout border border-accent/60 px-2 py-0.5 text-accent">
            <span aria-hidden>[</span>
            SEC.05
            <span aria-hidden>]</span>
          </span>
          <span className="readout text-fg-soft">Contact</span>
        </div>

        <h2
          className="display-shout max-w-4xl text-balance text-fg"
          style={{ fontSize: 'clamp(40px, 8vw, 96px)' }}
        >
          Have a hard problem?
          <br />
          <em>Tell us about it.</em>
        </h2>

        <a
          className={cn(
            'group mt-12 inline-flex items-center gap-4 border border-accent/50 bg-bg-elev/50',
            'px-6 py-4 transition-colors hover:border-accent hover:bg-accent hover:text-bg',
          )}
          href={`mailto:${contactEmail}`}
        >
          <span aria-hidden className="block h-1.5 w-1.5 bg-accent animate-pulse-soft group-hover:bg-bg" />
          <span className="font-display text-[22px] font-semibold text-fg group-hover:text-bg sm:text-[28px]">
            {contactEmail}
          </span>
          <ChevronRight
            className="ml-2 transition-transform group-hover:translate-x-1"
            size={20}
            strokeWidth={2}
          />
        </a>

        <p className="mt-12 max-w-xl font-body text-[15px] leading-[1.7] text-fg-dim">
          We work with defense primes, aerospace OEMs, and select commercial programs.
          Engagements run from a focused 6-week sprint to a multi-year integrated program team.
        </p>
      </div>
    </section>
  );
}
