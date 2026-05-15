import { type ReactElement, type ReactNode } from 'react';

import { cn } from '../lib/cn';

import { SiteFooter } from './SiteFooter';
import { SiteHeader } from './SiteHeader';

interface SubPageProps {
  readonly children: ReactNode;
  readonly code?: string;
  readonly eyebrow?: string;
  readonly title: string;
}

export function SubPage({
  children,
  code = 'DOC',
  eyebrow,
  title,
}: SubPageProps): ReactElement {
  return (
    <div className="dot-grid min-h-screen bg-bg text-fg">
      <SiteHeader />
      <main className="mx-auto max-w-3xl px-5 pb-24 pt-40 sm:px-8 sm:pt-48">
        <div className="mb-6 flex items-center gap-3">
          <span className="readout border border-accent/60 px-2 py-0.5 text-accent">
            <span aria-hidden>[</span>
            {code}
            <span aria-hidden>]</span>
          </span>
          {eyebrow !== undefined && (
            <span className="readout text-fg-soft">{eyebrow}</span>
          )}
        </div>
        <h1
          className="display-shout text-balance text-fg"
          style={{ fontSize: 'clamp(40px, 7vw, 80px)' }}
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
