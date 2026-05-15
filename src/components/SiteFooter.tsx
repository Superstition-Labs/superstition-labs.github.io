import { type ReactElement } from 'react';
import { Link } from 'react-router-dom';

import { contactEmail } from '../data/content';
import { cn } from '../lib/cn';

export function SiteFooter(): ReactElement {
  const year = new Date().getFullYear();
  return (
    <footer className="border-t border-line/20 bg-bg px-5 py-12 sm:px-8">
      <div
        className={cn(
          'mx-auto flex max-w-6xl flex-col gap-10 sm:flex-row sm:items-start sm:justify-between',
          'font-mono text-[10px] uppercase tracking-[0.22em] text-fg-dim',
        )}
      >
        <div className="space-y-2">
          <div className="flex items-center gap-2">
            <span aria-hidden className="block h-px w-6 bg-accent" />
            <p className="text-fg">Superstition Labs, LLC</p>
          </div>
          <p className="pl-8">3101 N. Central Ave, Ste 183</p>
          <p className="pl-8">Phoenix, AZ 85012</p>
          <p className="pl-8">
            <a className="hover:text-accent" href={`mailto:${contactEmail}`}>
              {contactEmail}
            </a>
          </p>
        </div>
        <div className="flex flex-col gap-2">
          <Link className="hover:text-accent" to="/privacy">
            Privacy Policy
          </Link>
          <Link className="hover:text-accent" to="/support">
            Support
          </Link>
        </div>
      </div>
      <div className="mx-auto mt-10 flex max-w-6xl items-center justify-between font-mono text-[9px] uppercase tracking-[0.28em] text-fg-soft">
        <span>&copy; {year} Superstition Labs, LLC</span>
        <span>All rights reserved</span>
      </div>
    </footer>
  );
}
