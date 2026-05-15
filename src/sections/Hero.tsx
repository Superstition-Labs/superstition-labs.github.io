import { motion } from 'framer-motion';
import { type ReactElement, Suspense, lazy } from 'react';

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
    <section className="relative min-h-[100svh] overflow-hidden bg-gradient-to-b from-bg via-bg to-bg-elev">
      <div className="absolute inset-0">
        {/* Mobile: static SVG (no WebGL, no per-frame cost) */}
        <div className="absolute right-[-18%] top-[10%] h-[60svh] w-[60svh] md:hidden">
          <OrbitalStatic />
        </div>
        {/* Desktop: live 3D scene, lazy-loaded so mobile never downloads it */}
        <div className="absolute right-[-12%] top-[6%] hidden h-[88svh] w-[88svh] md:block lg:right-[-6%]">
          <Suspense fallback={<OrbitalStatic />}>
            <NeuralMeshPlanet />
          </Suspense>
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-bg via-bg/85 to-transparent" />
        <div className="noise" />
      </div>

      <div className="relative mx-auto flex min-h-[100svh] max-w-6xl flex-col justify-between px-5 pb-16 pt-32 sm:px-8 sm:pt-40">
        <motion.div
          animate="visible"
          className="font-mono text-[11px] uppercase tracking-[0.32em] text-fg-dim"
          initial="hidden"
          variants={fadeUp}
        >
          <span className="text-accent">●</span>&nbsp;&nbsp;Private product development · Phoenix, AZ
        </motion.div>

        <motion.div
          animate="visible"
          className="max-w-3xl"
          initial="hidden"
          transition={{ delay: 0.15 }}
          variants={fadeUp}
        >
          <h1 className="font-display text-[28px] leading-[1.12] text-balance text-fg sm:text-[36px] md:text-[44px]">
            We engineer <em>scaled systems</em> that sense, decide, and act.
          </h1>
          <p className="mt-6 max-w-xl font-body text-[15px] leading-[1.7] text-fg-dim sm:text-base">
            Software and hardware integration for sensor and AI systems — built with the
            discipline of a classified program and the speed of a startup.
          </p>
        </motion.div>

        <motion.div
          animate="visible"
          className="flex items-end justify-between gap-8"
          initial="hidden"
          transition={{ delay: 0.4 }}
          variants={fadeUp}
        >
          <div className="font-mono text-[10px] uppercase tracking-[0.32em] text-fg-dim">
            <div>{wordmark}</div>
            <div className="mt-1 text-fg-dim/60">EST. {foundedYear}</div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
