import { ArrowUpRight } from 'lucide-react';
import { type ReactElement } from 'react';

import { contactEmail } from '../data/content';
import { cn } from '../lib/cn';
import { useDirection } from '../theme/useDirection';

export function Contact(): ReactElement {
  const { direction } = useDirection();

  return (
    <section className="relative border-t border-line/40 bg-bg px-5 py-28 sm:px-8 sm:py-40">
      <div className="mx-auto max-w-6xl">
        <div className="mb-6 font-mono text-[10px] uppercase tracking-[0.32em] text-accent">
          {'// 05 — establish link'}
        </div>
        <h2
          className={cn(
            'max-w-3xl font-display text-balance text-fg',
            'text-4xl leading-[1.05] tracking-tight sm:text-6xl md:text-7xl',
            direction === 'b' && 'uppercase tracking-[0.04em]',
          )}
        >
          {direction === 'c' ? (
            <>
              Have a hard problem? <em className="text-accent">Tell us about it.</em>
            </>
          ) : direction === 'a' ? (
            <>Have a hard problem? Tell us about it.</>
          ) : (
            <>have a hard problem? tell us about it.</>
          )}
        </h2>

        <a
          className={cn(
            'group mt-10 inline-flex items-center gap-3 border-b border-accent/50 pb-1',
            'font-display text-3xl text-fg transition-colors hover:text-accent sm:text-4xl',
            direction === 'b' && 'font-mono uppercase tracking-[0.06em]',
          )}
          href={`mailto:${contactEmail}`}
        >
          {contactEmail}
          <ArrowUpRight
            className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
            size={28}
            strokeWidth={1}
          />
        </a>

        <div className="mt-12 max-w-xl font-body text-base text-fg-dim">
          We work with defense primes, aerospace OEMs, and select commercial programs. Engagements
          run from a focused 6-week sprint to a multi-year integrated program team.
        </div>
      </div>
    </section>
  );
}
