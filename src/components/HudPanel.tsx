import { type ReactElement, type ReactNode } from 'react';

import { cn } from '../lib/cn';

interface HudPanelProps {
  readonly children: ReactNode;
  readonly className?: string;
  readonly hover?: boolean;
  readonly tone?: 'accent' | 'line';
}

/**
 * Bordered panel with four corner-bracket decals — the signature card frame
 * used across the site. Borders are dim by default; the corner brackets are
 * always amber so the card reads as a discrete "instrument". On hover (when
 * `hover` is on) the border lights up to match.
 */
export function HudPanel({
  children,
  className,
  hover = false,
  tone = 'line',
}: HudPanelProps): ReactElement {
  const borderClass = tone === 'accent' ? 'border-accent/70' : 'border-line/25';
  return (
    <div
      className={cn(
        'hud-corners relative border bg-bg-elev/40',
        borderClass,
        hover && 'transition-colors duration-300 hover:border-accent/50 hover:bg-bg-elev/70',
        className,
      )}
    >
      <span aria-hidden className="corner corner-tl" />
      <span aria-hidden className="corner corner-tr" />
      <span aria-hidden className="corner corner-bl" />
      <span aria-hidden className="corner corner-br" />
      {children}
    </div>
  );
}
