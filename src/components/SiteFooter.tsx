import { type ReactElement } from 'react';
import { Link } from 'react-router-dom';

import { contactEmail } from '../data/content';
import { cn } from '../lib/cn';

export function SiteFooter(): ReactElement {
  const year = new Date().getFullYear();
  return (
    <footer
      className={cn(
        'border-t border-line/60 bg-bg px-5 py-12 sm:px-8',
        'font-mono text-[11px] uppercase tracking-[0.18em] text-fg-dim',
      )}
    >
      <div className="mx-auto flex max-w-6xl flex-col gap-8 sm:flex-row sm:items-end sm:justify-between">
        <div className="space-y-2">
          <p className="text-fg">Superstition Labs, LLC</p>
          <p>3101 N. Central Ave, Ste 183 · Phoenix, AZ 85012</p>
          <p>
            <a className="hover:text-accent" href={`mailto:${contactEmail}`}>
              {contactEmail}
            </a>
          </p>
        </div>
        <div className="flex gap-6">
          <Link className="hover:text-accent" to="/privacy">
            Privacy
          </Link>
          <Link className="hover:text-accent" to="/support">
            Support
          </Link>
        </div>
      </div>
      <div className="mx-auto mt-8 flex max-w-6xl items-center justify-between text-[10px] tracking-[0.24em]">
        <span>&copy; {year} Superstition Labs, LLC</span>
        <span className="text-accent/60">All rights reserved</span>
      </div>
    </footer>
  );
}
