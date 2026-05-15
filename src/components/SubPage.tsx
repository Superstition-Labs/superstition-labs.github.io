import { type ReactElement, type ReactNode } from 'react';

import { cn } from '../lib/cn';

import { SiteFooter } from './SiteFooter';
import { SiteHeader } from './SiteHeader';

interface SubPageProps {
  readonly children: ReactNode;
  readonly eyebrow?: string;
  readonly title: string;
}

export function SubPage({ children, eyebrow, title }: SubPageProps): ReactElement {
  return (
    <div className="min-h-screen bg-bg text-fg">
      <SiteHeader />
      <main className="mx-auto max-w-3xl px-5 pb-24 pt-36 sm:px-8 sm:pt-44">
        {eyebrow !== undefined && (
          <div className="mb-4 font-mono text-[10px] uppercase tracking-[0.32em] text-accent">
            {eyebrow}
          </div>
        )}
        <h1 className="font-display text-4xl leading-tight tracking-tight text-balance text-fg sm:text-6xl">
          {title}
        </h1>
        <div
          className={cn(
            'mt-12 space-y-6 font-body text-base leading-relaxed text-fg-dim',
            '[&_h2]:mt-12 [&_h2]:font-display [&_h2]:text-2xl [&_h2]:text-fg',
            '[&_strong]:text-fg',
            '[&_a]:text-accent [&_a]:underline-offset-4 hover:[&_a]:underline',
            '[&_ul]:list-disc [&_ul]:space-y-2 [&_ul]:pl-6 [&_ul]:marker:text-accent/60',
          )}
        >
          {children}
        </div>
      </main>
      <SiteFooter />
    </div>
  );
}
