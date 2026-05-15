import { type ReactElement, type ReactNode } from 'react';

import { cn } from '../lib/cn';

interface StatusPillProps {
  readonly children: ReactNode;
  readonly className?: string;
  readonly pulse?: boolean;
  readonly tone?: 'accent' | 'steel' | 'signal';
}

/**
 * Compact live-readout chip — a square dot + uppercase mono label inside a
 * 1px outline. Used for things like "● ACTIVE · 07 PROGRAMS" — the Destiny-2
 * status indicator pattern.
 */
export function StatusPill({
  children,
  className,
  pulse = true,
  tone = 'accent',
}: StatusPillProps): ReactElement {
  const toneClass =
    tone === 'steel'
      ? 'border-steel/50 text-steel'
      : tone === 'signal'
        ? 'border-signal/50 text-signal'
        : 'border-accent/50 text-accent';
  const dotClass =
    tone === 'steel' ? 'bg-steel' : tone === 'signal' ? 'bg-signal' : 'bg-accent';
  return (
    <span
      className={cn(
        'inline-flex items-center gap-2 border px-2 py-0.5 font-mono text-[10px] uppercase tracking-[0.22em]',
        toneClass,
        className,
      )}
    >
      <span
        aria-hidden
        className={cn('block h-1.5 w-1.5', dotClass, pulse && 'animate-pulse-soft')}
      />
      {children}
    </span>
  );
}
