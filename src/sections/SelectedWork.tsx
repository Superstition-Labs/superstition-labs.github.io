import { type ReactElement, useMemo } from 'react';

import { HudPanel } from '../components/HudPanel';
import { SectionHeader } from '../components/SectionHeader';
import { StatusPill } from '../components/StatusPill';
import { type WorkEntry, work } from '../data/content';

function WorkCard({ entry }: { readonly entry: WorkEntry }): ReactElement {
  const Icon = entry.icon;
  return (
    <HudPanel className="p-6" hover>
      {/* Header row: icon chip + program ID, status pill on the right. */}
      <div className="flex flex-wrap items-center justify-between gap-3">
        <div className="flex items-center gap-3">
          <div className="grid h-10 w-10 place-items-center border border-accent/40 bg-bg/50 text-accent">
            <Icon className="h-4 w-4" strokeWidth={1.6} />
          </div>
          <div className="flex flex-col gap-0.5 leading-none">
            <span className="font-mono text-[10px] uppercase tracking-[0.26em] text-accent">
              {entry.id.toUpperCase()}
            </span>
            <span className="font-mono text-[9px] uppercase tracking-[0.24em] text-fg-soft">
              Program
            </span>
          </div>
        </div>
        <StatusPill pulse={false} tone="steel">
          {entry.year} · {entry.domain}
        </StatusPill>
      </div>

      <div className="mt-6">
        <div className="font-mono text-[10px] uppercase tracking-[0.24em] text-fg-soft">
          Client · {entry.client}
        </div>
        <h3 className="mt-3 font-display text-[22px] font-semibold leading-[1.22] text-fg">
          {entry.summary}
        </h3>
      </div>

      {/* Footer: classification stripe + NDA note. */}
      <div className="mt-6 flex items-center gap-3">
        <span aria-hidden className="block h-px flex-1 bg-line/30" />
        <span className="font-mono text-[9px] uppercase tracking-[0.28em] text-fg-soft">
          Details · NDA
        </span>
      </div>

      <div className="mt-4 flex flex-wrap gap-1.5 font-mono text-[10px] uppercase tracking-[0.18em]">
        {entry.tags.map((t) => (
          <span
            className="whitespace-nowrap border border-accent/30 px-2 py-0.5 text-accent/90"
            key={t}
          >
            {t}
          </span>
        ))}
      </div>
    </HudPanel>
  );
}

export function SelectedWork(): ReactElement {
  const sorted = useMemo(
    () => [...work].sort((a, b) => Number(b.year) - Number(a.year)),
    [],
  );

  return (
    <section className="relative border-t border-line/15 bg-bg px-5 py-24 sm:px-8 sm:py-32">
      <div className="mx-auto max-w-6xl">
        <SectionHeader
          aside={
            <>
              <span aria-hidden className="block h-px w-6 bg-line/40" />
              {String(sorted.length).padStart(2, '0')} programs listed
            </>
          }
          code="SEC.03"
          eyebrow="Selected Work"
          title={
            <>
              Most of our work is
              <br />
              <em>redacted.</em>
            </>
          }
        />

        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
          {sorted.map((w) => (
            <WorkCard entry={w} key={w.id} />
          ))}
        </div>
      </div>
    </section>
  );
}
