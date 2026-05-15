import { type ReactElement } from 'react';

import { capabilities } from '../data/content';
import { cn } from '../lib/cn';

export function Capabilities(): ReactElement {
  return (
    <section className="relative border-t border-line/40 bg-bg px-5 py-24 sm:px-8 sm:py-32">
      <div className="mx-auto max-w-6xl">
        <div className="mb-12 flex flex-wrap items-end justify-between gap-6">
          <div className="max-w-xl">
            <div className="mb-4 font-mono text-[10px] uppercase tracking-[0.32em] text-accent">
              {'// 02 — disciplines'}
            </div>
            <h2 className="font-display text-3xl leading-tight text-fg sm:text-4xl">
              Where <em>we deliver.</em>
            </h2>
          </div>
          <div className="font-mono text-[10px] uppercase tracking-[0.22em] text-fg-dim">
            {String(capabilities.length).padStart(2, '0')} active disciplines
          </div>
        </div>

        <div
          className={cn(
            'grid gap-px overflow-hidden rounded-sm border border-line/60 bg-line/40',
            'grid-cols-1 sm:grid-cols-2 lg:grid-cols-4',
          )}
        >
          {capabilities.map((c) => (
            <div
              className={cn(
                'group relative flex min-h-[140px] flex-col justify-between bg-bg p-5',
                'transition-colors hover:bg-bg-elev',
              )}
              key={c.code}
            >
              <div className="font-mono text-[10px] uppercase tracking-[0.24em] text-accent/80">
                {c.code}
              </div>
              <div className="font-body text-base leading-snug text-fg transition-colors group-hover:text-accent">
                {c.title}
              </div>
              <div
                aria-hidden
                className="h-px w-8 bg-line transition-all duration-500 group-hover:w-20 group-hover:bg-accent"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
