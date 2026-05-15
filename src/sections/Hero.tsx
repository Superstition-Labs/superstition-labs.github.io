import { motion } from 'framer-motion';
import { type ReactElement } from 'react';

import { Telemetry } from '../components/Telemetry';
import { TerminalBoot } from '../components/TerminalBoot';
import { tagline, wordmark } from '../data/content';
import { cn } from '../lib/cn';
import { BlueprintConsole } from '../scenes/BlueprintConsole';
import { NeuralMeshPlanet } from '../scenes/NeuralMeshPlanet';
import { OrbitalScene } from '../scenes/OrbitalScene';
import { useDirection } from '../theme/useDirection';

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, transition: { duration: 0.9, ease: [0.2, 0.65, 0.3, 1] as const }, y: 0 },
};

function HeroC(): ReactElement {
  return (
    <section className="relative min-h-[100svh] overflow-hidden bg-gradient-to-b from-bg via-bg to-bg-elev">
      <div className="absolute inset-0">
        <div className="absolute right-[-12%] top-[6%] h-[88svh] w-[88svh] sm:right-[-6%]">
          <NeuralMeshPlanet />
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
          <h1 className="font-display text-[44px] leading-[1.02] tracking-[-0.01em] text-balance text-fg sm:text-[68px] md:text-[88px]">
            We build the systems that{' '}
            <em className="text-accent">sense, decide, and act.</em>
          </h1>
          <p className="mt-8 max-w-xl font-body text-base leading-relaxed text-fg-dim sm:text-lg">
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
            <div className="mt-1 text-fg-dim/60">EST. 2025</div>
          </div>
          <Telemetry className="hidden w-72 sm:grid" />
        </motion.div>
      </div>
    </section>
  );
}

function HeroA(): ReactElement {
  return (
    <section className="relative min-h-[100svh] overflow-hidden bg-bg">
      <div className="absolute inset-0">
        <OrbitalScene />
        <div className="absolute inset-0 bg-gradient-to-t from-bg via-transparent to-bg/40" />
        <div className="scanlines absolute inset-0" />
        <div className="noise" />
      </div>

      {/* HUD chrome */}
      <div aria-hidden className="pointer-events-none absolute inset-6 sm:inset-10">
        <div className="absolute left-0 top-0 h-4 w-4 border-l border-t border-accent/70" />
        <div className="absolute right-0 top-0 h-4 w-4 border-r border-t border-accent/70" />
        <div className="absolute bottom-0 left-0 h-4 w-4 border-b border-l border-accent/70" />
        <div className="absolute bottom-0 right-0 h-4 w-4 border-b border-r border-accent/70" />
      </div>

      <div className="relative mx-auto flex min-h-[100svh] max-w-6xl flex-col justify-between px-8 pb-20 pt-32 sm:px-12 sm:pt-40">
        <div className="flex items-start justify-between font-mono text-[11px] uppercase tracking-[0.24em] text-fg-dim">
          <div className="flex items-center gap-2">
            <span className="inline-block h-1.5 w-1.5 animate-pulse-soft rounded-full bg-accent" />
            <span className="text-accent">MISSION CONTROL</span>
            <span className="text-fg-dim/70">·</span>
            <span>LIVE</span>
          </div>
          <div className="hidden tabular-nums sm:block">
            33.4942°N · 112.0739°W · ALT 0334 m
          </div>
        </div>

        <div className="max-w-3xl">
          <div className="mb-6 font-mono text-[10px] uppercase tracking-[0.32em] text-accent">
            {'// primary directive'}
          </div>
          <h1 className="font-display text-[40px] font-light leading-[1.04] tracking-[-0.01em] text-balance text-fg sm:text-[60px] md:text-[76px]">
            {tagline}
          </h1>
          <p className="mt-6 max-w-xl font-body text-sm leading-relaxed text-fg-dim sm:text-base">
            Sensor fusion. Edge inference. Mission tooling. Software and hardware integration
            for programs that don&apos;t get a second take.
          </p>
        </div>

        <div className="flex items-end justify-between gap-8">
          <div className="font-mono text-[10px] uppercase tracking-[0.32em]">
            <div className="text-accent">SL-OPS-001</div>
            <div className="mt-1 text-fg-dim/70">CLEARED FOR TRANSMIT</div>
          </div>
          <Telemetry className="w-80" />
        </div>
      </div>
    </section>
  );
}

function HeroB(): ReactElement {
  return (
    <section className="relative min-h-[100svh] overflow-hidden bg-bg">
      <div className="absolute inset-0">
        <BlueprintConsole />
        <div className="scanlines absolute inset-0 opacity-60" />
      </div>

      <div className="relative mx-auto grid min-h-[100svh] max-w-6xl grid-cols-1 gap-10 px-5 pb-20 pt-32 sm:px-8 sm:pt-40 md:grid-cols-12">
        <div className="md:col-span-7">
          <div className="mb-6 inline-flex items-center gap-3 border border-accent/40 px-3 py-1 font-mono text-[10px] uppercase tracking-[0.28em] text-accent">
            <span className="inline-block h-1.5 w-1.5 animate-pulse-soft rounded-full bg-accent" />
            sl::console v2.0
          </div>
          <h1
            className={cn(
              'font-display uppercase text-fg',
              'text-[34px] leading-[1.05] tracking-[0.04em] sm:text-[44px] md:text-[58px]',
            )}
          >
            we build
            <br />
            the systems
            <br />
            that <span className="text-accent">sense</span>,
            <br />
            <span className="text-accent">decide</span>,
            <br />
            and <span className="text-accent">act</span>.
          </h1>
          <p className="mt-8 max-w-md font-body text-[12px] leading-relaxed text-fg-dim">
            {'// software · hardware · sensor systems · ai'}
            <br />
            {'// contract product development, phoenix az'}
          </p>
        </div>

        <div className="self-end md:col-span-5">
          <div className="border border-line/70 bg-bg-elev/50 p-5 backdrop-blur-[1px]">
            <div className="mb-3 flex items-center justify-between font-mono text-[10px] uppercase tracking-[0.24em] text-fg-dim">
              <span className="text-accent">sl_console.log</span>
              <span>READY</span>
            </div>
            <TerminalBoot />
          </div>
        </div>
      </div>
    </section>
  );
}

export function Hero(): ReactElement {
  const { direction } = useDirection();
  if (direction === 'a') return <HeroA />;
  if (direction === 'b') return <HeroB />;
  return <HeroC />;
}
