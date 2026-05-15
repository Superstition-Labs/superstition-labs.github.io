import { type ReactElement, type SVGProps } from 'react';
import { Link } from 'react-router-dom';

import { SiteFooter } from '../components/SiteFooter';
import { SiteHeader } from '../components/SiteHeader';

// =========================================================================
// PART 1 — SUPERSTITION LABS · The Spire (three variations)
// Weaver's Needle framed by HUD corner brackets. ViewBox 60×80 (aspect
// 0.75). Every feature ≥ ~5% of viewBox so the mark survives favicon-16.
// =========================================================================

const SPIRE_BRACKETS = (
  <>
    <path d="M 3 11 L 3 3 L 11 3" stroke="currentColor" strokeWidth="1.8" />
    <path d="M 49 3 L 57 3 L 57 11" stroke="currentColor" strokeWidth="1.8" />
    <path d="M 3 69 L 3 77 L 11 77" stroke="currentColor" strokeWidth="1.8" />
    <path d="M 49 77 L 57 77 L 57 69" stroke="currentColor" strokeWidth="1.8" />
  </>
);

function SpireA(props: SVGProps<SVGSVGElement>): ReactElement {
  return (
    <svg fill="none" viewBox="0 0 60 80" {...props}>
      {SPIRE_BRACKETS}
      <path d="M 30 10 L 34 15 L 30 20 L 26 15 Z" fill="currentColor" />
      <path d="M 30 26 L 16 66 L 44 66 Z" fill="currentColor" />
      <line opacity="0.4" stroke="currentColor" strokeWidth="0.7" x1="10" x2="50" y1="66" y2="66" />
    </svg>
  );
}

function SpireB(props: SVGProps<SVGSVGElement>): ReactElement {
  return (
    <svg fill="none" viewBox="0 0 60 80" {...props}>
      {SPIRE_BRACKETS}
      <path d="M 26 10 L 30 15 L 26 20 L 22 15 Z" fill="currentColor" />
      <path d="M 42 40 L 34 66 L 50 66 Z" fill="currentColor" opacity="0.5" />
      <path d="M 26 26 L 14 66 L 38 66 Z" fill="currentColor" />
      <line opacity="0.4" stroke="currentColor" strokeWidth="0.7" x1="10" x2="52" y1="66" y2="66" />
    </svg>
  );
}

function SpireC(props: SVGProps<SVGSVGElement>): ReactElement {
  return (
    <svg fill="none" viewBox="0 0 60 80" {...props}>
      {SPIRE_BRACKETS}
      <path d="M 10 28 A 20 14 0 0 1 50 28" opacity="0.85" stroke="currentColor" strokeWidth="1.4" />
      <circle cx="50" cy="28" fill="currentColor" r="2" />
      <path d="M 30 30 L 16 66 L 44 66 Z" fill="currentColor" />
      <line opacity="0.4" stroke="currentColor" strokeWidth="0.7" x1="10" x2="50" y1="66" y2="66" />
    </svg>
  );
}

// =========================================================================
// PART 2 — LEVANT SPACE SYSTEMS · Ship in a circle (five variations)
// All five share a viewBox of 80×80 (aspect 1.0) and a Phoenician-hippos
// base (curved hull, mast, square sail) for cohesion. They differ in how
// the "Mediterranean crossing" + "space" themes are expressed around it.
// =========================================================================

/**
 * Phoenician hippos — the shared ship base used across the literal
 * variants. Crescent hull, vertical mast, horizontal crossyard, square
 * sail. Three solid forms = legible at 16px.
 */
function PhoenicianShip(): ReactElement {
  return (
    <g>
      {/* Hull crescent */}
      <path d="M 20 52 Q 26 60 40 60 Q 54 60 60 52 Z" fill="currentColor" />
      {/* Mast — slightly above the sail so it pokes through. */}
      <line stroke="currentColor" strokeWidth="1.6" x1="40" x2="40" y1="52" y2="22" />
      {/* Crossyard — wider than sail to read as a wooden spar. */}
      <line stroke="currentColor" strokeWidth="1.4" x1="26" x2="54" y1="26" y2="26" />
      {/* Square sail */}
      <path d="M 28 26 L 52 26 L 52 46 L 28 46 Z" fill="currentColor" />
    </g>
  );
}

function LevantA(props: SVGProps<SVGSVGElement>): ReactElement {
  return (
    <svg fill="none" viewBox="0 0 80 80" {...props}>
      <circle cx="40" cy="40" r="37" stroke="currentColor" strokeWidth="1.8" />
      <circle cx="40" cy="40" opacity="0.4" r="32" stroke="currentColor" strokeWidth="0.5" />
      <line opacity="0.5" stroke="currentColor" strokeWidth="0.8" x1="14" x2="66" y1="54" y2="54" />
      <PhoenicianShip />
    </svg>
  );
}

function LevantB(props: SVGProps<SVGSVGElement>): ReactElement {
  return (
    <svg fill="none" viewBox="0 0 80 80" {...props}>
      <circle cx="40" cy="40" r="37" stroke="currentColor" strokeWidth="1.8" />
      <line opacity="0.5" stroke="currentColor" strokeWidth="0.8" x1="14" x2="66" y1="58" y2="58" />
      {/* Small hull */}
      <path d="M 22 58 Q 28 64 40 64 Q 52 64 58 58 Z" fill="currentColor" />
      {/* Mast — short, vertical */}
      <line stroke="currentColor" strokeWidth="1.4" x1="34" x2="34" y1="58" y2="44" />
      {/* Lateen sail — right triangle, vertical edge = mast, hypotenuse
          rising up-and-back. Reads as the iconic Mediterranean triangle. */}
      <path d="M 34 18 L 34 58 L 62 58 Z" fill="currentColor" />
    </svg>
  );
}

function LevantC(props: SVGProps<SVGSVGElement>): ReactElement {
  // Diamond stars — survive small scale better than tiny circles.
  const stars = [
    { x: 20, y: 18, s: 2.2 },
    { x: 30, y: 28, s: 1.6 },
    { x: 50, y: 14, s: 2.6 },
    { x: 60, y: 24, s: 1.8 },
    { x: 44, y: 8, s: 1.4 },
  ];
  return (
    <svg fill="none" viewBox="0 0 80 80" {...props}>
      <circle cx="40" cy="40" r="37" stroke="currentColor" strokeWidth="1.8" />
      <line opacity="0.5" stroke="currentColor" strokeWidth="0.8" x1="14" x2="66" y1="54" y2="54" />
      {stars.map((p) => (
        <path
          d={`M ${String(p.x)} ${String(p.y - p.s)} L ${String(p.x + p.s)} ${String(p.y)} L ${String(p.x)} ${String(p.y + p.s)} L ${String(p.x - p.s)} ${String(p.y)} Z`}
          fill="currentColor"
          key={`star-${String(p.x)}-${String(p.y)}`}
        />
      ))}
      <PhoenicianShip />
    </svg>
  );
}

function LevantD(props: SVGProps<SVGSVGElement>): ReactElement {
  return (
    <svg fill="none" viewBox="0 0 80 80" {...props}>
      <circle cx="40" cy="40" r="37" stroke="currentColor" strokeWidth="1.8" />
      <line opacity="0.5" stroke="currentColor" strokeWidth="0.8" x1="14" x2="66" y1="54" y2="54" />
      {/* Orbital arc — sweeps over the mast tip, intersects the ring. */}
      <path
        d="M 14 22 A 28 16 0 0 1 66 22"
        opacity="0.85"
        stroke="currentColor"
        strokeWidth="1.4"
      />
      <circle cx="66" cy="22" fill="currentColor" r="2.2" />
      <PhoenicianShip />
    </svg>
  );
}

function LevantE(props: SVGProps<SVGSVGElement>): ReactElement {
  return (
    <svg fill="currentColor" viewBox="0 0 80 80" {...props}>
      <defs>
        <path d="M 14 40 A 26 26 0 0 1 66 40" fill="none" id="lab-levant-upper" />
        <path d="M 14 40 A 26 26 0 0 0 66 40" fill="none" id="lab-levant-lower" />
      </defs>
      {/* Outer + inner rings */}
      <circle cx="40" cy="40" fill="none" r="37" stroke="currentColor" strokeWidth="1.5" />
      <circle
        cx="40"
        cy="40"
        fill="none"
        opacity="0.45"
        r="32"
        stroke="currentColor"
        strokeWidth="0.5"
      />
      {/* Curved text — Saira Condensed wordmark on top, mono dots below. */}
      <text fontFamily="Saira Condensed, sans-serif" fontSize="5.2" fontWeight="700" letterSpacing="1.5">
        <textPath href="#lab-levant-upper" startOffset="50%" textAnchor="middle">
          LEVANT SPACE SYSTEMS
        </textPath>
      </text>
      <text fontFamily="ui-monospace, monospace" fontSize="3.6" letterSpacing="1.6" opacity="0.7">
        <textPath href="#lab-levant-lower" startOffset="50%" textAnchor="middle">
          · MEDITERRANEAN ·
        </textPath>
      </text>
      {/* Side ticks at the equator of the badge. */}
      <line stroke="currentColor" strokeWidth="0.8" x1="6" x2="9" y1="40" y2="40" />
      <line stroke="currentColor" strokeWidth="0.8" x1="71" x2="74" y1="40" y2="40" />
      {/* Sea line + ship in the badge center */}
      <line opacity="0.4" stroke="currentColor" strokeWidth="0.6" x1="18" x2="62" y1="54" y2="54" />
      <PhoenicianShip />
    </svg>
  );
}

// =========================================================================
// Showcase scaffolding
// =========================================================================

type MarkComponent = (props: SVGProps<SVGSVGElement>) => ReactElement;

interface LockupProps {
  readonly aspect: number;
  readonly brand: string;
  readonly Mark: MarkComponent;
  readonly markHeight: number;
}

function Lockup({ aspect, brand, Mark, markHeight }: LockupProps): ReactElement {
  const markWidth = markHeight * aspect;
  const words = brand.split(' ');
  return (
    <div className="flex items-center gap-5 text-fg">
      <Mark height={markHeight} width={markWidth} />
      <div className="flex flex-col leading-none">
        {words.map((w, i) => (
          <span
            className="font-display font-bold uppercase text-fg"
            key={`${w}-${String(i)}`}
            style={{ fontSize: markHeight * (words.length === 2 ? 0.34 : 0.24), letterSpacing: '0.06em' }}
          >
            {w}
          </span>
        ))}
      </div>
    </div>
  );
}

interface ScaleStripProps {
  readonly aspect: number;
  readonly Mark: MarkComponent;
}

function ScaleStrip({ aspect, Mark }: ScaleStripProps): ReactElement {
  // 16px is the actual browser favicon size — including it proves the
  // mark survives. 20/32/48/96 cover the other common scales.
  const sizes = [96, 48, 32, 20, 16];
  return (
    <div className="flex items-end gap-8 text-fg">
      {sizes.map((s) => (
        <div className="flex flex-col items-center gap-2" key={s}>
          <Mark height={s} width={s * aspect} />
          <span className="font-mono text-[9px] uppercase tracking-[0.24em] text-fg-soft">
            {s}px
          </span>
        </div>
      ))}
    </div>
  );
}

interface ConceptProps {
  readonly aspect: number;
  readonly blurb: string;
  readonly brand: string;
  readonly code: string;
  readonly Mark: MarkComponent;
  readonly title: string;
}

function ConceptPanel({
  aspect,
  blurb,
  brand,
  code,
  Mark,
  title,
}: ConceptProps): ReactElement {
  const heroHeight = 200;
  return (
    <section className="border-t border-line/15 px-5 py-20 sm:px-8 sm:py-24">
      <div className="mx-auto max-w-6xl">
        <div className="mb-12 flex items-baseline gap-4">
          <span className="readout border border-accent/60 px-2 py-0.5 text-accent">
            <span aria-hidden>[</span>
            {code}
            <span aria-hidden>]</span>
          </span>
          <h2 className="display-shout text-[28px] text-fg sm:text-[36px]">{title}</h2>
        </div>

        <p className="mb-12 max-w-2xl font-body text-[15px] leading-[1.7] text-fg-dim">{blurb}</p>

        {/* Three color treatments side-by-side. */}
        <div className="mb-16 grid grid-cols-1 gap-px overflow-hidden border border-line/20 sm:grid-cols-3">
          <div className="flex min-h-[300px] items-center justify-center bg-bg p-10 text-fg">
            <Mark height={heroHeight} width={heroHeight * aspect} />
          </div>
          <div className="flex min-h-[300px] items-center justify-center bg-bg-elev/40 p-10 text-accent">
            <Mark height={heroHeight} width={heroHeight * aspect} />
          </div>
          <div className="flex min-h-[300px] items-center justify-center bg-fg p-10 text-bg">
            <Mark height={heroHeight} width={heroHeight * aspect} />
          </div>
        </div>

        <div className="mb-12">
          <div className="mb-4 font-mono text-[10px] uppercase tracking-[0.28em] text-fg-soft">
            Wordmark lockup
          </div>
          <div className="border border-line/20 bg-bg-elev/30 p-10">
            <Lockup Mark={Mark} aspect={aspect} brand={brand} markHeight={88} />
          </div>
        </div>

        <div>
          <div className="mb-4 font-mono text-[10px] uppercase tracking-[0.28em] text-fg-soft">
            Icon scales · favicon legibility check
          </div>
          <div className="border border-line/20 bg-bg-elev/30 p-10">
            <ScaleStrip Mark={Mark} aspect={aspect} />
          </div>
        </div>
      </div>
    </section>
  );
}

interface BrandSectionProps {
  readonly intro: string;
  readonly label: string;
  readonly title: ReactElement;
}

function BrandHeader({ intro, label, title }: BrandSectionProps): ReactElement {
  return (
    <header className="border-t border-line/30 bg-bg-deep px-5 pb-12 pt-20 sm:px-8 sm:pt-24">
      <div className="mx-auto max-w-6xl">
        <div className="mb-5 flex items-center gap-3">
          <span aria-hidden className="block h-px w-6 bg-accent" />
          <span className="readout text-accent">{label}</span>
        </div>
        <h2
          className="display-shout text-balance text-fg"
          style={{ fontSize: 'clamp(28px, 4.5vw, 52px)' }}
        >
          {title}
        </h2>
        <p className="mt-6 max-w-2xl font-body text-[15px] leading-[1.7] text-fg-dim">{intro}</p>
      </div>
    </header>
  );
}

// =========================================================================
// PAGE
// =========================================================================

export function LogoLab(): ReactElement {
  return (
    <div className="min-h-screen bg-bg text-fg">
      <SiteHeader />
      <main className="pt-24">
        <header className="px-5 pb-12 pt-12 sm:px-8 sm:pb-16">
          <div className="mx-auto max-w-6xl">
            <div className="mb-5 flex items-center gap-3">
              <span aria-hidden className="block h-px w-6 bg-accent" />
              <span className="readout text-accent">Logo Lab</span>
            </div>
            <h1
              className="display-shout text-balance text-fg"
              style={{ fontSize: 'clamp(32px, 5vw, 64px)' }}
            >
              Two brands. <em>Eight marks.</em>
            </h1>
            <p className="mt-6 max-w-2xl font-body text-[15px] leading-[1.7] text-fg-dim">
              Three Spire variations for Superstition Labs, followed by five
              ship-in-a-circle variations for Levant Space Systems. Every mark
              is rendered at hero scale, in a wordmark lockup, and on a
              16-to-96px scale strip so favicon legibility is provable.
            </p>
            <div className="mt-6">
              <Link
                className="font-mono text-[10px] uppercase tracking-[0.28em] text-fg-soft hover:text-accent"
                to="/"
              >
                ← Back to home
              </Link>
            </div>
          </div>
        </header>

        {/* ============================== */}
        {/* SUPERSTITION LABS              */}
        {/* ============================== */}
        <BrandHeader
          intro="Weaver's Needle framed by HUD corner brackets. The variations differ in how the orbital / satellite reference is expressed — a diamond marker, a secondary peak, or a full orbital arc."
          label="Brand 01 · Superstition Labs"
          title={
            <>
              <em>The Spire</em>, three ways.
            </>
          }
        />

        <ConceptPanel
          Mark={SpireA}
          aspect={0.75}
          blurb="The composition you liked, only the satellite changed: a 4-point diamond replaces the tiny circle so it actually appears at small sizes. Brackets slightly heavier. Closest to the original — call this the 'safe' choice."
          brand="Superstition Labs"
          code="SPIRE.A"
          title="Refined Original"
        />
        <ConceptPanel
          Mark={SpireB}
          aspect={0.75}
          blurb="Adds a smaller secondary peak behind the spire — pulls in the multi-peak Superstition character without losing the spire as the dominant form. Asymmetric (main spire left of center, secondary right), giving the mark a bit more directional energy."
          brand="Superstition Labs"
          code="SPIRE.B"
          title="Twin Peaks"
        />
        <ConceptPanel
          Mark={SpireC}
          aspect={0.75}
          blurb="Drops the satellite dot entirely. An elliptical orbit arc sweeps over the spire tip — the orbital reference becomes a substantial geometric element. A 2-unit dot marks where the satellite intersects the arc on the right. Reads as 'mountain + space program' at every size."
          brand="Superstition Labs"
          code="SPIRE.C"
          title="Spire + Orbit"
        />

        {/* ============================== */}
        {/* LEVANT SPACE SYSTEMS           */}
        {/* ============================== */}
        <BrandHeader
          intro="A Phoenician ship crossing the Mediterranean — same hull, mast, and square sail across the literal variants — framed by an outer ring. The variations layer in different references: celestial navigation stars, a satellite orbit overhead, or a full Black-Mesa-style mission patch with curved wordmark."
          label="Brand 02 · Levant Space Systems"
          title={
            <>
              <em>A ship</em>, five ways.
            </>
          }
        />

        <ConceptPanel
          Mark={LevantA}
          aspect={1}
          blurb="Classic Phoenician hippos — curved hull, vertical mast, horizontal crossyard, square sail — sitting on the sea line inside a clean double-ring frame. Most historically literal. Reads as 'a Mediterranean trading vessel' at every size."
          brand="Levant Space Systems"
          code="LEVANT.A"
          title="Phoenician"
        />
        <ConceptPanel
          Mark={LevantB}
          aspect={1}
          blurb="Lateen sail — the distinctive Mediterranean triangular rig — reduced to a single bold right triangle on a small hull. Most minimal of the five. Closest to a true symbol vs. an illustration."
          brand="Levant Space Systems"
          code="LEVANT.B"
          title="Lateen"
        />
        <ConceptPanel
          Mark={LevantC}
          aspect={1}
          blurb="Ship below the sea line, five diamond stars scattered above. Phoenicians were the first great celestial navigators — this is the most literal expression of 'crossing the Mediterranean by the stars.' Diamonds (not circles) so the stars survive at favicon scale."
          brand="Levant Space Systems"
          code="LEVANT.C"
          title="Constellation"
        />
        <ConceptPanel
          Mark={LevantD}
          aspect={1}
          blurb="Ship below, an elliptical orbital arc overhead, satellite tick on the right. Direct sibling to Spire+Orbit — if you want both brand marks to read as part of the same family, this is the pair."
          brand="Levant Space Systems"
          code="LEVANT.D"
          title="Ship + Orbit"
        />
        <ConceptPanel
          Mark={LevantE}
          aspect={1}
          blurb="Full mission patch: Saira Condensed wordmark curved along the upper arc, 'MEDITERRANEAN' on the lower arc, the ship in the center. Black-Mesa-Research-Facility DNA applied to the right brand this time. Most ceremonial — would look right embroidered or laser-etched."
          brand="Levant Space Systems"
          code="LEVANT.E"
          title="Mission Patch"
        />

        <section className="border-t border-line/15 px-5 py-16 sm:px-8">
          <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-4">
            <div className="font-mono text-[10px] uppercase tracking-[0.28em] text-fg-soft">
              Logo Lab · Throwaway exploration · 8 marks total
            </div>
            <Link
              className="font-mono text-[10px] uppercase tracking-[0.28em] text-fg-soft hover:text-accent"
              to="/"
            >
              ← Back to home
            </Link>
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}
