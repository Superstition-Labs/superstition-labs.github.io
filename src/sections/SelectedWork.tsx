import { motion } from 'framer-motion';
import { type ReactElement } from 'react';

import { type WorkEntry, work } from '../data/content';
import { cn } from '../lib/cn';
import { useDirection } from '../theme/useDirection';

function RedactionBar({
  className,
  width = '60%',
}: {
  readonly className?: string;
  readonly width?: string;
}): ReactElement {
  return (
    <span
      aria-label="Redacted"
      className={cn('inline-block h-[1.1em] translate-y-[2px] bg-fg/85', className)}
      style={{ width }}
    />
  );
}

function WorkCardC({ entry }: { readonly entry: WorkEntry }): ReactElement {
  return (
    <article
      className={cn(
        'relative border border-line/60 bg-bg-elev/40 p-6 backdrop-blur-[1px]',
        'transition-colors hover:border-accent/60 hover:bg-bg-elev/70',
      )}
    >
      <div className="flex flex-wrap items-center justify-between gap-2 font-mono text-[10px] uppercase tracking-[0.22em]">
        <span className="text-accent">{entry.id.toUpperCase()}</span>
        <span className="whitespace-nowrap rounded border border-accent-warm/60 px-2 py-0.5 text-accent-warm">
          {entry.year} · {entry.domain}
        </span>
      </div>
      <div className="mt-5">
        <div className="font-mono text-[10px] uppercase tracking-[0.22em] text-fg-dim">
          {entry.client}
        </div>
        <h3 className="mt-2 font-display text-[22px] leading-[1.25] text-fg">
          {entry.summary}
        </h3>
        <div className="mt-3 font-body text-[15px] leading-[1.6] text-fg-dim">
          Program name <RedactionBar width="96px" /> — details under NDA.
        </div>
      </div>
      <div className="mt-5 flex flex-wrap gap-1.5 font-mono text-[10px] uppercase tracking-[0.18em]">
        {entry.tags.map((t) => (
          <span
            className="whitespace-nowrap border border-accent/40 px-2 py-0.5 text-accent"
            key={t}
          >
            {t}
          </span>
        ))}
      </div>
    </article>
  );
}

function WorkCardA({ entry, index }: { readonly entry: WorkEntry; readonly index: number }): ReactElement {
  return (
    <motion.article
      className={cn(
        'relative border border-line/60 bg-bg-elev/40 p-6 backdrop-blur-[1px]',
        'transition-colors hover:border-accent/60',
      )}
      initial={{ opacity: 0, y: 16 }}
      transition={{ delay: index * 0.06, duration: 0.5 }}
      viewport={{ margin: '-40px', once: true }}
      whileInView={{ opacity: 1, y: 0 }}
    >
      <div className="flex items-center justify-between font-mono text-[10px] uppercase tracking-[0.24em]">
        <span className="text-accent">{`// ${entry.id.toUpperCase()}`}</span>
        <span className="rounded border border-accent-warm/60 px-2 py-0.5 text-accent-warm">
          {entry.year} · {entry.domain}
        </span>
      </div>
      <div className="mt-5">
        <div className="font-mono text-[10px] uppercase tracking-[0.22em] text-fg-dim">
          {entry.client}
        </div>
        <h3 className="mt-2 font-display text-xl font-light leading-snug text-fg sm:text-2xl">
          {entry.summary}
        </h3>
        <div className="mt-4 flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.18em] text-fg-dim">
          <span className="text-accent-warm">[CLASSIFIED]</span>
          <RedactionBar className="bg-accent-warm/85" width="64px" />
          <RedactionBar className="bg-accent-warm/85" width="40px" />
        </div>
      </div>
      <div className="mt-5 flex gap-1.5 font-mono text-[10px] uppercase tracking-[0.18em]">
        {entry.tags.map((t) => (
          <span className="border border-accent/40 px-2 py-0.5 text-accent" key={t}>
            {t}
          </span>
        ))}
      </div>
    </motion.article>
  );
}

function WorkCardB({ entry, index }: { readonly entry: WorkEntry; readonly index: number }): ReactElement {
  return (
    <motion.article
      className="border border-line/70 bg-black/40 p-5 font-mono"
      initial={{ opacity: 0 }}
      transition={{ delay: index * 0.08, duration: 0.5 }}
      viewport={{ once: true }}
      whileInView={{ opacity: 1 }}
    >
      <div className="flex items-center justify-between text-[10px] uppercase tracking-[0.22em] text-fg-dim">
        <span className="text-accent">┌ dossier::{entry.id}</span>
        <span>{entry.year}</span>
      </div>
      <pre className="mt-4 whitespace-pre-wrap text-[12px] leading-relaxed text-fg-dim">
{`  client     ${entry.client}
  domain     ${entry.domain}
  summary    ${entry.summary}
  callsign   ████████ ████  [REDACTED]
  tags       [${entry.tags.join(', ')}]`}
      </pre>
      <div className="mt-3 text-[10px] uppercase tracking-[0.22em] text-fg-dim">
        └ details available under NDA
      </div>
    </motion.article>
  );
}

export function SelectedWork(): ReactElement {
  const { direction } = useDirection();

  return (
    <section className="relative border-t border-line/40 bg-bg px-5 py-24 sm:px-8 sm:py-32">
      <div className="mx-auto max-w-6xl">
        <div className="mb-16 flex flex-wrap items-end justify-between gap-6">
          <div className="max-w-2xl">
            <div className="mb-4 font-mono text-[10px] uppercase tracking-[0.32em] text-accent">
              {'// 03 — selected work'}
            </div>
            <h2 className="font-display text-3xl leading-tight tracking-tight text-fg sm:text-5xl">
              {direction === 'c' ? (
                <>
                  Most of our work is <em className="text-accent">redacted.</em>
                </>
              ) : direction === 'a' ? (
                'Most of our work is redacted.'
              ) : (
                <span className="uppercase tracking-[0.04em]">most of our work is redacted.</span>
              )}
            </h2>
            <p className="mt-5 max-w-xl font-body text-base text-fg-dim">
              A sample of recent programs we&apos;ve supported. Specifics available under NDA.
            </p>
          </div>
          <div className="font-mono text-[10px] uppercase tracking-[0.22em] text-fg-dim">
            {String(work.length).padStart(2, '0')} programs listed
          </div>
        </div>

        {direction === 'c' && (
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
            {work.map((w) => (
              <WorkCardC entry={w} key={w.id} />
            ))}
          </div>
        )}

        {direction === 'a' && (
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
            {work.map((w, i) => (
              <WorkCardA entry={w} index={i} key={w.id} />
            ))}
          </div>
        )}

        {direction === 'b' && (
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
            {work.map((w, i) => (
              <WorkCardB entry={w} index={i} key={w.id} />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
