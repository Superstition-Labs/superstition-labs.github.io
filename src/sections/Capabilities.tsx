import { motion } from 'framer-motion';
import { type ReactElement } from 'react';

import { capabilities } from '../data/content';
import { cn } from '../lib/cn';
import { useDirection } from '../theme/useDirection';

export function Capabilities(): ReactElement {
  const { direction } = useDirection();
  const staticInC = direction === 'c';

  return (
    <section
      className={cn(
        'relative border-t border-line/40 bg-bg px-5 py-24 sm:px-8 sm:py-32',
        direction === 'b' && 'blueprint-grid',
      )}
    >
      <div className="mx-auto max-w-6xl">
        <div className="mb-12 flex flex-wrap items-end justify-between gap-6">
          <div className="max-w-xl">
            <div className="mb-4 font-mono text-[10px] uppercase tracking-[0.32em] text-accent">
              {'// 02 — disciplines'}
            </div>
            <h2 className="font-display text-3xl leading-tight tracking-tight text-fg sm:text-4xl">
              {direction === 'c' ? (
                <>
                  Where <em className="text-accent">we deliver.</em>
                </>
              ) : direction === 'a' ? (
                'Where we deliver.'
              ) : (
                <span className="uppercase tracking-[0.04em]">where we deliver.</span>
              )}
            </h2>
          </div>
          <div className="font-mono text-[10px] uppercase tracking-[0.22em] text-fg-dim">
            {String(capabilities.length).padStart(2, '0')} active disciplines
          </div>
        </div>

        <div
          className={cn(
            'grid gap-px overflow-hidden rounded-sm border border-line/60 bg-line/40',
            'grid-cols-1 sm:grid-cols-2 lg:grid-cols-4',
          )}
        >
          {capabilities.map((c, i) => (
            <motion.div
              className={cn(
                'group relative flex min-h-[140px] flex-col justify-between bg-bg p-5',
                'transition-colors hover:bg-bg-elev',
              )}
              key={c.code}
              {...(staticInC
                ? { initial: false as const }
                : {
                    initial: { opacity: 0 },
                    transition: { delay: i * 0.04, duration: 0.5 },
                    viewport: { margin: '-40px', once: true },
                    whileInView: { opacity: 1 },
                  })}
            >
              <div className="font-mono text-[10px] uppercase tracking-[0.24em] text-accent/80">
                {c.code}
              </div>
              <div
                className={cn(
                  'font-body text-base leading-snug text-fg transition-colors group-hover:text-accent',
                  direction === 'b' && 'font-mono uppercase tracking-[0.04em] text-sm',
                )}
              >
                {c.title}
              </div>
              <div
                aria-hidden
                className="h-px w-8 bg-line transition-all duration-500 group-hover:w-20 group-hover:bg-accent"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
