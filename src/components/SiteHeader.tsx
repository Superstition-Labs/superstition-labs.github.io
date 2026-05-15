import { type ReactElement } from 'react';
import { Link } from 'react-router-dom';

import { contactEmail, wordmark } from '../data/content';
import { cn } from '../lib/cn';

export function SiteHeader(): ReactElement {
  return (
    <header
      className={cn(
        'fixed inset-x-0 top-0 z-40 flex items-center justify-between px-5 py-4 sm:px-8',
        'bg-bg/85 md:bg-gradient-to-b md:from-bg md:via-bg/85 md:to-transparent md:bg-bg/0',
        'md:backdrop-blur-[2px]',
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
            'inline-block h-2 w-2 rounded-full bg-accent',
            'shadow-[0_0_10px_currentColor] text-accent',
          )}
        />
        <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-fg-dim group-hover:text-fg">
          {wordmark}
        </span>
      </Link>
      <a
        className="font-mono text-[10px] uppercase tracking-[0.24em] text-fg-dim hover:text-accent"
        href={`mailto:${contactEmail}`}
      >
        Contact
      </a>
    </header>
  );
}
