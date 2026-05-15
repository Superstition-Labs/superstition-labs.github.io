import { type ReactElement } from 'react';

import { SectionHeader } from '../components/SectionHeader';
import { capabilities } from '../data/content';
import { cn } from '../lib/cn';

export function Capabilities(): ReactElement {
  return (
    <section className="relative border-t border-line/15 bg-bg-deep px-5 py-24 sm:px-8 sm:py-32">
      <div className="mx-auto max-w-6xl">
        <SectionHeader
          aside={
            <>
              <span aria-hidden className="block h-px w-6 bg-line/40" />
              {String(capabilities.length).padStart(2, '0')} active disciplines
            </>
          }
          code="SEC.02"
          eyebrow="Deliverables"
          title={
            <>
              Where <em>we deliver.</em>
            </>
          }
        />

        {/* 1px hairline grid. Each cell has a corner-bracket marker plus a
            number + chevron treatment that makes the row look like a
            spec-sheet entry. */}
        <div
          className={cn(
            'grid border border-line/20',
            'grid-cols-1 sm:grid-cols-2 lg:grid-cols-4',
          )}
        >
          {capabilities.map((c, i) => (
            <div
              className={cn(
                'group relative flex min-h-[160px] flex-col justify-between bg-bg p-5',
                'border-line/20 transition-colors hover:bg-bg-elev',
                // 1px internal borders that compose into the grid
                i % 4 !== 0 && 'lg:border-l',
                i % 2 !== 0 && 'sm:border-l lg:border-l-0',
                i >= 4 && 'lg:border-t',
                i >= 2 && 'sm:border-t lg:border-t-0',
                i % 4 === 0 && i !== 0 && 'lg:border-t',
              )}
              key={c.code}
            >
              {/* Top row: code + chevron marker. */}
              <div className="flex items-center justify-between">
                <div className="font-mono text-[10px] uppercase tracking-[0.26em] text-accent/85">
                  {c.code}
                </div>
                <svg
                  aria-hidden
                  className="text-line/40 transition-colors group-hover:text-accent"
                  fill="currentColor"
                  height="8"
                  viewBox="0 0 8 8"
                  width="8"
                >
                  <polygon points="0,0 8,4 0,8" />
                </svg>
              </div>

              <div className="font-display text-[19px] font-semibold leading-[1.15] text-fg transition-colors group-hover:text-accent">
                {c.title}
              </div>

              {/* Bottom progress-bar style affordance. */}
              <div
                aria-hidden
                className="h-px w-10 bg-line/40 transition-all duration-500 group-hover:w-24 group-hover:bg-accent"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
