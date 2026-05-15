import { motion } from 'framer-motion';
import { type ReactElement } from 'react';

import { type Pillar, pillars } from '../data/content';
import { cn } from '../lib/cn';
import { useDirection } from '../theme/useDirection';

function PillarCardC({ index, pillar }: { readonly index: number; readonly pillar: Pillar }): ReactElement {
  return (
    <article
      className={cn(
        'group relative border border-line/60 bg-bg-elev/40 p-7 backdrop-blur-[1px]',
        'transition-colors hover:border-accent/60 hover:bg-bg-elev/70',
      )}
    >
      <div
        aria-hidden
        className="absolute right-4 top-4 h-2 w-2 rounded-full bg-accent shadow-[0_0_10px_currentColor]"
      />
      <div className="font-mono text-[10px] uppercase tracking-[0.28em] text-accent">
        {String(index + 1).padStart(2, '0')} · discipline
      </div>
      <h3 className="mt-4 font-display text-[26px] leading-[1.18] text-fg">{pillar.title}</h3>
      <p className="mt-4 font-body text-[16px] leading-[1.7] text-fg-dim">{pillar.summary}</p>
      <div className="mt-6 flex flex-wrap gap-2 font-mono text-[10px] uppercase tracking-[0.16em] text-fg-dim">
        {pillar.tags.map((t) => (
          <span className="whitespace-nowrap border border-line/70 px-2 py-0.5" key={t}>
            {t}
          </span>
        ))}
      </div>
    </article>
  );
}

function PillarCardA({ index, pillar }: { readonly index: number; readonly pillar: Pillar }): ReactElement {
  return (
    <motion.article
      className={cn(
        'group relative border border-line/60 bg-bg-elev/40 p-6 backdrop-blur-[1px]',
        'transition-colors hover:border-accent/60 hover:bg-bg-elev/70',
      )}
      initial={{ opacity: 0, y: 20 }}
      transition={{ delay: index * 0.08, duration: 0.6 }}
      viewport={{ margin: '-60px', once: true }}
      whileInView={{ opacity: 1, y: 0 }}
    >
      <div aria-hidden className="absolute right-3 top-3 h-2 w-2 rounded-full bg-accent shadow-[0_0_10px_currentColor]" />
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top_right,rgb(var(--c-accent)/0.08),transparent_60%)] opacity-0 transition-opacity group-hover:opacity-100" />
      <div className="font-mono text-[10px] uppercase tracking-[0.28em] text-accent">
        MOD-0{index + 1}
      </div>
      <h3 className="mt-3 font-display text-2xl font-light leading-tight text-fg sm:text-3xl">
        {pillar.title}
      </h3>
      <p className="mt-4 font-body text-sm leading-relaxed text-fg-dim">{pillar.summary}</p>
      <div className="mt-6 flex gap-2 font-mono text-[10px] uppercase tracking-[0.2em] text-fg-dim">
        {pillar.tags.map((t) => (
          <span className="border border-line/70 px-2 py-0.5" key={t}>
            {t}
          </span>
        ))}
      </div>
    </motion.article>
  );
}

function PillarCardB({ index, pillar }: { readonly index: number; readonly pillar: Pillar }): ReactElement {
  const ascii = ['┌', '┐', '└'][index] ?? '┌';
  return (
    <motion.article
      className="group relative border border-line/70 bg-black/30 p-5"
      initial={{ opacity: 0 }}
      transition={{ delay: index * 0.12, duration: 0.5 }}
      viewport={{ once: true }}
      whileInView={{ opacity: 1 }}
    >
      <div className="flex items-center justify-between font-mono text-[10px] uppercase tracking-[0.22em] text-fg-dim">
        <span className="text-accent">{ascii} pillar.0{index + 1}</span>
        <span>[ READY ]</span>
      </div>
      <h3 className="mt-4 font-display text-lg uppercase leading-tight tracking-[0.06em] text-fg sm:text-xl">
        {pillar.title}
      </h3>
      <p className="mt-3 font-body text-[12px] leading-relaxed text-fg-dim">{pillar.summary}</p>
      <div className="mt-4 font-mono text-[10px] uppercase text-fg-dim/80">
        &gt; tags: [{pillar.tags.join(', ')}]
      </div>
    </motion.article>
  );
}

export function WhatWeDo(): ReactElement {
  const { direction } = useDirection();

  return (
    <section className="relative border-t border-line/40 bg-bg px-5 py-24 sm:px-8 sm:py-32">
      <div className="mx-auto max-w-6xl">
        <div className="mb-16 max-w-2xl">
          <div className="mb-4 font-mono text-[10px] uppercase tracking-[0.32em] text-accent">
            {'// 01 — capabilities'}
          </div>
          <h2 className="font-display text-3xl leading-tight tracking-tight text-fg sm:text-5xl">
            {direction === 'c' ? (
              <>
                Three disciplines, <em className="text-accent">one stack.</em>
              </>
            ) : direction === 'a' ? (
              'Three disciplines. One integrated stack.'
            ) : (
              <span className="uppercase tracking-[0.04em]">three disciplines. one stack.</span>
            )}
          </h2>
        </div>

        {direction === 'c' && (
          <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
            {pillars.map((p, i) => (
              <PillarCardC index={i} key={p.id} pillar={p} />
            ))}
          </div>
        )}

        {direction === 'a' && (
          <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
            {pillars.map((p, i) => (
              <PillarCardA index={i} key={p.id} pillar={p} />
            ))}
          </div>
        )}

        {direction === 'b' && (
          <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
            {pillars.map((p, i) => (
              <PillarCardB index={i} key={p.id} pillar={p} />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
