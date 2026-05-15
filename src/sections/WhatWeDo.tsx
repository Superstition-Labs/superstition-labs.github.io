import { type ReactElement } from 'react';

import { type Pillar, pillars } from '../data/content';
import { cn } from '../lib/cn';

function PillarCard({ index, pillar }: { readonly index: number; readonly pillar: Pillar }): ReactElement {
  return (
    <article
      className={cn(
        'group relative border border-line/60 bg-bg-elev/40 p-7',
        'transition-colors hover:border-accent/60 hover:bg-bg-elev/70',
      )}
    >
      <div
        aria-hidden
        className="absolute right-4 top-4 h-2 w-2 rounded-full bg-accent shadow-[0_0_10px_currentColor]"
      />
      <div className="font-mono text-[10px] uppercase tracking-[0.28em] text-accent">
        {String(index + 1).padStart(2, '0')} · discipline
      </div>
      <h3 className="mt-4 font-display text-[26px] leading-[1.18] text-fg">{pillar.title}</h3>
      <p className="mt-4 font-body text-[16px] leading-[1.7] text-fg-dim">{pillar.summary}</p>
      <div className="mt-6 flex flex-wrap gap-2 font-mono text-[10px] uppercase tracking-[0.16em] text-fg-dim">
        {pillar.tags.map((t) => (
          <span className="whitespace-nowrap border border-line/70 px-2 py-0.5" key={t}>
            {t}
          </span>
        ))}
      </div>
    </article>
  );
}

export function WhatWeDo(): ReactElement {
  return (
    <section className="relative border-t border-line/40 bg-bg px-5 py-24 sm:px-8 sm:py-32">
      <div className="mx-auto max-w-6xl">
        <div className="mb-16 max-w-2xl">
          <div className="mb-4 font-mono text-[10px] uppercase tracking-[0.32em] text-accent">
            {'// 01 — capabilities'}
          </div>
          <h2 className="font-display text-3xl leading-tight text-fg sm:text-5xl">
            Three disciplines, <em>one stack.</em>
          </h2>
        </div>

        <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
          {pillars.map((p, i) => (
            <PillarCard index={i} key={p.id} pillar={p} />
          ))}
        </div>
      </div>
    </section>
  );
}
