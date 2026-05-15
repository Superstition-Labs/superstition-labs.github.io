import { type ReactElement } from 'react';
import { Link } from 'react-router-dom';

import { wordmark } from '../data/content';
import { cn } from '../lib/cn';
import { DirectionToggle } from '../theme/DirectionToggle';
import { useDirection } from '../theme/useDirection';

export function SiteHeader(): ReactElement {
  const { direction } = useDirection();
  return (
    <header
      className={cn(
        'fixed inset-x-0 top-0 z-40 flex items-center justify-between px-5 py-4 sm:px-8',
        'bg-gradient-to-b from-bg via-bg/85 to-transparent backdrop-blur-[2px]',
      )}
    >
      <Link
        className={cn(
          'group inline-flex items-center gap-2 text-fg transition-colors',
          'focus-visible:outline focus-visible:outline-1 focus-visible:outline-accent',
        )}
        to="/"
      >
        <span
          aria-hidden
          className={cn(
            'inline-block h-2 w-2 rounded-full bg-accent transition-shadow',
            'shadow-[0_0_12px_currentColor] text-accent',
            direction === 'b' && 'animate-pulse-soft',
          )}
        />
        <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-fg-dim group-hover:text-fg">
          {wordmark}
        </span>
      </Link>
      <DirectionToggle />
    </header>
  );
}
