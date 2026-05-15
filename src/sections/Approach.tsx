import { type ReactElement } from 'react';

import { SectionHeader } from '../components/SectionHeader';

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
  return (
    <section className="relative border-t border-line/15 bg-bg-deep px-5 py-24 sm:px-8 sm:py-32">
      <div className="mx-auto max-w-6xl">
        <SectionHeader
          code="SEC.04"
          eyebrow="Approach"
          title={
            <>
              Treat every program
              <br />
              <em>like it&apos;s classified.</em>
            </>
          }
        />

        <div className="grid grid-cols-1 gap-10 md:grid-cols-3">
          {principles.map((p, i) => (
            <div className="relative pl-6" key={p.title}>
              {/* Vertical tactical rail with a numerical stamp at the top. */}
              <span aria-hidden className="absolute left-0 top-0 h-full w-px bg-line/30" />
              <span aria-hidden className="absolute left-0 top-0 h-10 w-px bg-accent" />
              <div className="font-mono text-[10px] uppercase tracking-[0.28em] text-accent">
                Principle · 0{i + 1}
              </div>
              <h3 className="display-shout mt-3 text-[26px] text-fg">{p.title}</h3>
              <p className="mt-4 font-body text-[15px] leading-[1.7] text-fg-dim">
                {p.body}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
