import { motion } from 'framer-motion';
import { type ReactElement } from 'react';

import { cn } from '../lib/cn';
import { useDirection } from '../theme/useDirection';

const principles: readonly { title: string; body: string }[] = [
  {
    body: 'Deterministic builds, hardware-in-the-loop tests, and documentation that survives staff turnover.',
    title: 'Classified-grade discipline',
  },
  {
    body: 'Start with the sensor and the silicon. Earn the right to add software the further you climb.',
    title: 'Bottom-up systems thinking',
  },
  {
    body: 'Models run where the data lives — on device, on the edge, inside the platform. Latency is a feature.',
    title: 'Inference at the edge',
  },
];

export function Approach(): ReactElement {
  const { direction } = useDirection();
  const staticInC = direction === 'c';

  return (
    <section
      className={cn(
        'relative border-t border-line/40 bg-bg-elev/40 px-5 py-24 sm:px-8 sm:py-32',
      )}
    >
      <div className="mx-auto grid max-w-6xl grid-cols-1 gap-12 md:grid-cols-12">
        <div className="md:col-span-5">
          <div className="mb-4 font-mono text-[10px] uppercase tracking-[0.32em] text-accent">
            {'// 04 — approach'}
          </div>
          <h2 className="font-display text-3xl leading-tight tracking-tight text-fg sm:text-5xl">
            {direction === 'c' ? (
              <>
                Treat every program <em className="text-accent">like it&apos;s classified.</em>
              </>
            ) : direction === 'a' ? (
              "We treat every program like it's classified."
            ) : (
              <span className="uppercase tracking-[0.04em]">
                treat every program like it&apos;s classified.
              </span>
            )}
          </h2>
        </div>

        <div className="space-y-10 md:col-span-7">
          {principles.map((p, i) => (
            <motion.div
              className="border-l border-accent/50 pl-6"
              key={p.title}
              {...(staticInC
                ? { initial: false as const }
                : {
                    initial: { opacity: 0, x: -20 },
                    transition: { delay: i * 0.1, duration: 0.6 },
                    viewport: { margin: '-60px', once: true },
                    whileInView: { opacity: 1, x: 0 },
                  })}
            >
              <div className="font-mono text-[10px] uppercase tracking-[0.28em] text-accent">
                PRINCIPLE 0{i + 1}
              </div>
              <h3
                className={cn(
                  'mt-2 font-display text-2xl leading-snug text-fg sm:text-3xl',
                  direction === 'b' && 'uppercase tracking-[0.04em]',
                )}
              >
                {p.title}
              </h3>
              <p className="mt-3 max-w-xl font-body text-base text-fg-dim">{p.body}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
