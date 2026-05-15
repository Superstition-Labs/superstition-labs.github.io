import { type ReactElement } from 'react';

import { HudPanel } from '../components/HudPanel';
import { SectionHeader } from '../components/SectionHeader';
import { type Pillar, pillars } from '../data/content';

function PillarCard({
  index,
  pillar,
}: {
  readonly index: number;
  readonly pillar: Pillar;
}): ReactElement {
  return (
    <HudPanel className="p-7" hover>
      {/* Index in the top-right — large condensed numeral, low contrast,
          like a panel-number stencil. */}
      <div
        aria-hidden
        className="absolute right-4 top-3 font-display text-[28px] font-bold leading-none text-fg-soft/30"
      >
        {String(index + 1).padStart(2, '0')}
      </div>

      <div className="flex items-center gap-2">
        <span aria-hidden className="block h-px w-6 bg-accent" />
        <span className="font-mono text-[10px] uppercase tracking-[0.28em] text-accent">
          Discipline
        </span>
      </div>

      <h3 className="display-shout mt-5 text-[28px] text-fg">{pillar.title}</h3>

      <p className="mt-4 font-body text-[15px] leading-[1.7] text-fg-dim">{pillar.summary}</p>

      <div className="mt-7 flex flex-wrap gap-1.5 font-mono text-[10px] uppercase tracking-[0.18em]">
        {pillar.tags.map((t) => (
          <span
            className="whitespace-nowrap border border-line/40 px-2 py-0.5 text-fg-dim"
            key={t}
          >
            {t}
          </span>
        ))}
      </div>
    </HudPanel>
  );
}

export function WhatWeDo(): ReactElement {
  return (
    <section className="relative border-t border-line/15 bg-bg px-5 py-24 sm:px-8 sm:py-32">
      <div className="mx-auto max-w-6xl">
        <SectionHeader
          aside={
            <>
              <span aria-hidden className="block h-px w-6 bg-line/40" />
              03 active disciplines
            </>
          }
          code="SEC.01"
          eyebrow="Capabilities"
          title={
            <>
              Three disciplines.
              <br />
              <em>One team.</em>
            </>
          }
        />

        <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
          {pillars.map((p, i) => (
            <PillarCard index={i} key={p.id} pillar={p} />
          ))}
        </div>
      </div>
    </section>
  );
}
