import { ChevronRight } from 'lucide-react';
import { type ReactElement } from 'react';
import { Link } from 'react-router-dom';

import { contactEmail, wordmark } from '../data/content';
import { cn } from '../lib/cn';

export function SiteHeader(): ReactElement {
  return (
    <header
      className={cn(
        'fixed inset-x-0 top-0 z-40 flex items-center justify-between px-5 py-3 sm:px-8',
        'border-b border-line/15 bg-bg/85 md:backdrop-blur-[2px]',
      )}
    >
      <Link
        className="group inline-flex items-center gap-3 text-fg focus-visible:outline focus-visible:outline-1 focus-visible:outline-accent"
        to="/"
      >
        <span
          aria-hidden
          className="grid h-5 w-5 place-items-center border border-accent/70 text-accent"
        >
          {/* Triangle mark — recurring across the site. */}
          <svg className="h-2.5 w-2.5" fill="currentColor" viewBox="0 0 10 10">
            <polygon points="1,1 9,5 1,9" />
          </svg>
        </span>
        <span className="font-mono text-[10px] uppercase tracking-[0.32em] text-fg group-hover:text-accent">
          {wordmark}
        </span>
      </Link>
      <a
        className="group inline-flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.28em] text-fg-dim hover:text-accent"
        href={`mailto:${contactEmail}`}
      >
        Email
        <ChevronRight
          className="transition-transform group-hover:translate-x-0.5"
          size={12}
          strokeWidth={2}
        />
      </a>
    </header>
  );
}
