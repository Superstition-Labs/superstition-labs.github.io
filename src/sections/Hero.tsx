import { motion } from 'framer-motion';
import { type ReactElement, Suspense, lazy } from 'react';

import { StatusPill } from '../components/StatusPill';
import { foundedYear, wordmark } from '../data/content';
import { OrbitalStatic } from '../scenes/OrbitalStatic';

const NeuralMeshPlanet = lazy(() =>
  import('../scenes/NeuralMeshPlanet').then((m) => ({ default: m.NeuralMeshPlanet })),
);

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, transition: { duration: 0.8, ease: [0.2, 0.65, 0.3, 1] as const }, y: 0 },
};

export function Hero(): ReactElement {
  return (
    <section className="scanlines dot-grid relative min-h-[100svh] overflow-hidden bg-bg">
      {/* Decorative scene. Mobile gets the static SVG; desktop the live WebGL. */}
      <div className="absolute inset-0">
        <div className="absolute right-[-22%] top-[8%] h-[58svh] w-[58svh] md:hidden">
          <OrbitalStatic />
        </div>
        <div className="absolute right-[-12%] top-[4%] hidden h-[92svh] w-[92svh] md:block lg:right-[-4%]">
          <Suspense fallback={<OrbitalStatic />}>
            <NeuralMeshPlanet />
          </Suspense>
        </div>
        {/* Left-to-right falloff so the headline doesn't fight the planet. */}
        <div className="absolute inset-0 bg-gradient-to-r from-bg via-bg/85 to-transparent" />
        {/* Faint accent edge along the very top — picks up the classification banner. */}
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-accent/30 to-transparent" />
        <div className="noise" />
      </div>

      {/* Vertical bracket rails on the outer edges — tactical "frame the
          mission" feel. Desktop only; would crowd a phone. */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-y-16 left-5 hidden w-px bg-line/15 md:block"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-y-16 right-5 hidden w-px bg-line/15 md:block"
      />

      <div className="relative mx-auto flex min-h-[100svh] max-w-6xl flex-col justify-between px-5 pb-12 pt-28 sm:px-8 sm:pt-36">
        {/* Top readout row — coordinates + active program count. */}
        <motion.div
          animate="visible"
          className="flex flex-wrap items-center gap-3"
          initial="hidden"
          variants={fadeUp}
        >
          <StatusPill>Active · Phoenix Arizona</StatusPill>
          <span className="font-mono text-[10px] uppercase tracking-[0.28em] text-fg-soft">
            Private product development · since {foundedYear}
          </span>
        </motion.div>

        {/* The headline. Saira Condensed, all-caps, very large.
            "scaled systems" gets the amber treatment + dropped baseline. */}
        <motion.div
          animate="visible"
          className="max-w-4xl"
          initial="hidden"
          transition={{ delay: 0.15 }}
          variants={fadeUp}
        >
          <h1
            className="display-shout text-balance text-fg"
            style={{ fontSize: 'clamp(46px, 9.5vw, 120px)' }}
          >
            We engineer
            <br />
            <em>scaled systems</em> that
            <br />
            sense. decide. act.
          </h1>
          <p className="mt-8 max-w-xl font-body text-[15px] leading-[1.7] text-fg-dim sm:text-base">
            Software and hardware integration for sensor and AI systems — built with the
            discipline of a classified program and the speed of a startup.
          </p>
        </motion.div>

        {/* Bottom HUD row — wordmark / EST / scroll cue. */}
        <motion.div
          animate="visible"
          className="flex flex-wrap items-end justify-between gap-8"
          initial="hidden"
          transition={{ delay: 0.4 }}
          variants={fadeUp}
        >
          <div className="font-mono text-[10px] uppercase tracking-[0.32em] text-fg-dim">
            <div className="flex items-center gap-2">
              <span aria-hidden className="block h-px w-6 bg-accent" />
              <span>{wordmark}</span>
            </div>
            <div className="mt-1 pl-8 text-fg-soft">EST. {foundedYear} · LLC</div>
          </div>
          <div className="hidden items-center gap-3 font-mono text-[10px] uppercase tracking-[0.28em] text-fg-soft sm:flex">
            <span className="animate-tick-blink">▼</span>
            <span>Scroll · briefing follows</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
