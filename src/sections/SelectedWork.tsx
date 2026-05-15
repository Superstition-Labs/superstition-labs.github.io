import { type ReactElement } from 'react';

import { type WorkEntry, work } from '../data/content';
import { cn } from '../lib/cn';

function RedactionBar({
  className,
  width = '96px',
}: {
  readonly className?: string;
  readonly width?: string;
}): ReactElement {
  return (
    <span
      aria-label="Redacted"
      className={cn('inline-block h-[1.1em] translate-y-[2px] bg-fg/85', className)}
      style={{ width }}
    />
  );
}

function WorkCard({ entry }: { readonly entry: WorkEntry }): ReactElement {
  return (
    <article
      className={cn(
        'relative border border-line/60 bg-bg-elev/40 p-6',
        'transition-colors hover:border-accent/60 hover:bg-bg-elev/70',
      )}
    >
      <div className="flex flex-wrap items-center justify-between gap-2 font-mono text-[10px] uppercase tracking-[0.22em]">
        <span className="text-accent">{entry.id.toUpperCase()}</span>
        <span className="whitespace-nowrap rounded border border-accent-warm/60 px-2 py-0.5 text-accent-warm">
          {entry.year} · {entry.domain}
        </span>
      </div>
      <div className="mt-5">
        <div className="font-mono text-[10px] uppercase tracking-[0.22em] text-fg-dim">
          {entry.client}
        </div>
        <h3 className="mt-2 font-display text-[22px] leading-[1.25] text-fg">{entry.summary}</h3>
        <div className="mt-3 font-body text-[15px] leading-[1.6] text-fg-dim">
          Program name <RedactionBar /> — details under NDA.
        </div>
      </div>
      <div className="mt-5 flex flex-wrap gap-1.5 font-mono text-[10px] uppercase tracking-[0.18em]">
        {entry.tags.map((t) => (
          <span
            className="whitespace-nowrap border border-accent/40 px-2 py-0.5 text-accent"
            key={t}
          >
            {t}
          </span>
        ))}
      </div>
    </article>
  );
}

export function SelectedWork(): ReactElement {
  return (
    <section className="relative border-t border-line/40 bg-bg px-5 py-24 sm:px-8 sm:py-32">
      <div className="mx-auto max-w-6xl">
        <div className="mb-16 flex flex-wrap items-end justify-between gap-6">
          <div className="max-w-2xl">
            <div className="mb-4 font-mono text-[10px] uppercase tracking-[0.32em] text-accent">
              {'// 03 — selected work'}
            </div>
            <h2 className="font-display text-3xl leading-tight text-fg sm:text-5xl">
              Most of our work is <em>redacted.</em>
            </h2>
            <p className="mt-5 max-w-xl font-body text-base text-fg-dim">
              A sample of recent programs we&apos;ve supported. Specifics available under NDA.
            </p>
          </div>
          <div className="font-mono text-[10px] uppercase tracking-[0.22em] text-fg-dim">
            {String(work.length).padStart(2, '0')} programs listed
          </div>
        </div>

        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
          {work.map((w) => (
            <WorkCard entry={w} key={w.id} />
          ))}
        </div>
      </div>
    </section>
  );
}
