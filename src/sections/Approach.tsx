import { type ReactElement } from 'react';

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
    <section className="relative border-t border-line/40 bg-bg-elev/40 px-5 py-24 sm:px-8 sm:py-32">
      <div className="mx-auto grid max-w-6xl grid-cols-1 gap-12 md:grid-cols-12">
        <div className="md:col-span-5">
          <div className="mb-4 font-mono text-[10px] uppercase tracking-[0.32em] text-accent">
            {'// 04 — approach'}
          </div>
          <h2 className="font-display text-3xl leading-tight text-fg sm:text-5xl">
            Treat every program <em>like it&apos;s classified.</em>
          </h2>
        </div>

        <div className="space-y-10 md:col-span-7">
          {principles.map((p, i) => (
            <div className="border-l border-accent/50 pl-6" key={p.title}>
              <div className="font-mono text-[10px] uppercase tracking-[0.28em] text-accent">
                PRINCIPLE 0{i + 1}
              </div>
              <h3 className="mt-2 font-display text-2xl leading-snug text-fg sm:text-3xl">
                {p.title}
              </h3>
              <p className="mt-3 max-w-xl font-body text-[16px] leading-[1.7] text-fg-dim">
                {p.body}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
