import { type ReactElement, type ReactNode } from 'react';

import { cn } from '../lib/cn';

interface SectionHeaderProps {
  readonly aside?: ReactNode;
  readonly code: string;
  readonly eyebrow: string;
  readonly title: ReactNode;
}

/**
 * Tactical section header — bracketed program code on the left, an eyebrow
 * label, a Saira Condensed display title, and an optional right-aligned
 * status aside. Used at the top of every content section.
 */
export function SectionHeader({
  aside,
  code,
  eyebrow,
  title,
}: SectionHeaderProps): ReactElement {
  return (
    <div className="mb-16 flex flex-wrap items-end justify-between gap-6">
      <div className="max-w-2xl">
        <div className="mb-5 flex items-center gap-3">
          <span className="readout border border-accent/60 px-2 py-0.5 text-accent">
            <span aria-hidden>[</span>
            {code}
            <span aria-hidden>]</span>
          </span>
          <span className="readout text-fg-soft">{eyebrow}</span>
        </div>
        <h2
          className={cn(
            'display-shout text-fg',
            'text-[40px] leading-[0.92] sm:text-[64px] md:text-[72px]',
          )}
        >
          {title}
        </h2>
      </div>
      {aside !== undefined && <div className="readout text-fg-dim">{aside}</div>}
    </div>
  );
}
