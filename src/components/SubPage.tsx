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
    <div className="dot-grid min-h-screen bg-bg text-fg">
      <SiteHeader />
      <main className="mx-auto max-w-3xl px-5 pb-24 pt-32 sm:px-8 sm:pt-40">
        {eyebrow !== undefined && (
          <div className="mb-5 flex items-center gap-3">
            <span aria-hidden className="block h-px w-6 bg-accent" />
            <span className="readout text-accent">{eyebrow}</span>
          </div>
        )}
        <h1
          className="display-shout text-balance text-fg"
          style={{ fontSize: 'clamp(28px, 4.5vw, 52px)' }}
        >
          {title}
        </h1>
        <div
          className={cn(
            'mt-12 space-y-6 font-body text-[15px] leading-[1.75] text-fg-dim',
            '[&_h2]:mt-12 [&_h2]:display-shout [&_h2]:text-[24px] [&_h2]:text-fg',
            '[&_strong]:text-fg',
            '[&_a]:text-accent [&_a]:underline-offset-4 hover:[&_a]:underline',
            '[&_ul]:list-none [&_ul]:space-y-2 [&_ul]:pl-0',
            '[&_ul>li]:relative [&_ul>li]:pl-5',
            "[&_ul>li]:before:content-['▸'] [&_ul>li]:before:absolute [&_ul>li]:before:left-0 [&_ul>li]:before:text-accent [&_ul>li]:before:text-[10px] [&_ul>li]:before:top-[6px]",
          )}
        >
          {children}
        </div>
      </main>
      <SiteFooter />
    </div>
  );
}
