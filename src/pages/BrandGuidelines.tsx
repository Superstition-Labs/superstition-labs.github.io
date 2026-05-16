import { type ReactElement } from 'react';
import { Link } from 'react-router-dom';

import { HudPanel } from '../components/HudPanel';
import { SiteFooter } from '../components/SiteFooter';
import { SiteHeader } from '../components/SiteHeader';
import { SpireMark } from '../components/SpireMark';
import { contactEmail, foundedYear } from '../data/content';

// =========================================================================
// Section + sub-components
// =========================================================================

interface SectionShellProps {
  readonly children: ReactElement | readonly ReactElement[];
  readonly code: string;
  readonly id: string;
  readonly subtitle?: string;
  readonly title: string;
}

function SectionShell({
  children,
  code,
  id,
  subtitle,
  title,
}: SectionShellProps): ReactElement {
  return (
    <section className="border-t border-line/15 px-5 py-20 sm:px-8 sm:py-24" id={id}>
      <div className="mx-auto max-w-6xl">
        <div className="mb-12 flex flex-wrap items-end justify-between gap-6">
          <div>
            <div className="mb-4 flex items-center gap-3">
              <span className="readout border border-accent/60 px-2 py-0.5 text-accent">
                <span aria-hidden>[</span>
                {code}
                <span aria-hidden>]</span>
              </span>
              {subtitle !== undefined && (
                <span className="readout text-fg-soft">{subtitle}</span>
              )}
            </div>
            <h2 className="display-shout text-[28px] leading-[0.95] text-fg sm:text-[40px] md:text-[48px]">
              {title}
            </h2>
          </div>
        </div>
        {children}
      </div>
    </section>
  );
}

interface SubsectionTitleProps {
  readonly children: string;
  readonly tag?: string;
}

function SubsectionTitle({ children, tag }: SubsectionTitleProps): ReactElement {
  return (
    <div className="mb-5 flex items-center gap-3">
      <span aria-hidden className="block h-px w-6 bg-accent" />
      <span className="readout text-accent">
        {tag !== undefined && (
          <>
            <span className="text-fg-soft">{tag}</span>
            <span aria-hidden className="text-fg-soft">{' · '}</span>
          </>
        )}
        {children}
      </span>
    </div>
  );
}

// =========================================================================
// Wordmark lockup (mark + wordmark stacked)
// =========================================================================

interface LockupProps {
  readonly markHeight: number;
}

function Lockup({ markHeight }: LockupProps): ReactElement {
  return (
    <div className="flex items-center gap-5 text-fg">
      <SpireMark height={markHeight} width={markHeight} />
      <div className="flex flex-col leading-none">
        <span
          className="font-display font-bold uppercase text-fg"
          style={{ fontSize: markHeight * 0.34, letterSpacing: '0.06em' }}
        >
          Superstition
        </span>
        <span
          className="font-display font-bold uppercase text-fg"
          style={{ fontSize: markHeight * 0.34, letterSpacing: '0.06em' }}
        >
          Labs
        </span>
      </div>
    </div>
  );
}

// =========================================================================
// Color swatch
// =========================================================================

interface ColorSwatchProps {
  readonly hex: string;
  readonly name: string;
  readonly role: string;
  readonly rgb: string;
  readonly textOn?: 'fg' | 'bg';
  readonly token: string;
}

function ColorSwatch({
  hex,
  name,
  role,
  rgb,
  textOn = 'fg',
  token,
}: ColorSwatchProps): ReactElement {
  const textColor = textOn === 'bg' ? 'text-bg' : 'text-fg';
  return (
    <HudPanel className="overflow-hidden">
      <div
        className={`flex h-40 items-end p-5 ${textColor}`}
        style={{ backgroundColor: hex }}
      >
        <div className="font-mono text-[10px] uppercase tracking-[0.22em]">
          {hex}
        </div>
      </div>
      <div className="space-y-2 p-5">
        <div className="flex items-baseline justify-between gap-3">
          <span className="font-display text-base font-bold uppercase tracking-[0.04em] text-fg">
            {name}
          </span>
          <span className="font-mono text-[10px] uppercase tracking-[0.22em] text-fg-soft">
            {token}
          </span>
        </div>
        <p className="font-body text-[13px] leading-[1.55] text-fg-dim">{role}</p>
        <dl className="grid grid-cols-2 gap-x-4 gap-y-1 pt-2 font-mono text-[10px] uppercase tracking-[0.18em] text-fg-soft">
          <dt>Hex</dt>
          <dd className="text-fg">{hex}</dd>
          <dt>RGB</dt>
          <dd className="text-fg">{rgb}</dd>
        </dl>
      </div>
    </HudPanel>
  );
}

// =========================================================================
// PAGE
// =========================================================================

export function BrandGuidelines(): ReactElement {
  const heroMarkHeight = 240;
  const thisYear = new Date().getFullYear();

  return (
    <div className="min-h-screen bg-bg text-fg">
      <SiteHeader />
      <main className="pt-24">
        {/* ----- Hero ------------------------------------------------- */}
        <header className="px-5 pb-12 pt-12 sm:px-8 sm:pb-20 sm:pt-16">
          <div className="mx-auto max-w-6xl">
            <div className="mb-5 flex items-center gap-3">
              <span aria-hidden className="block h-px w-6 bg-accent" />
              <span className="readout text-accent">Superstition Labs · Brand</span>
            </div>
            <h1
              className="display-shout text-balance text-fg"
              style={{ fontSize: 'clamp(36px, 6vw, 72px)' }}
            >
              Brand <em>guidelines</em>.
            </h1>
            <p className="mt-6 max-w-2xl font-body text-[15px] leading-[1.7] text-fg-dim">
              The mark, color system, and typography that identify Superstition
              Labs, LLC. These assets are proprietary — review the usage rights
              section before reproducing them in any external context.
            </p>
            <nav className="mt-8 flex flex-wrap gap-x-6 gap-y-2 font-mono text-[10px] uppercase tracking-[0.28em] text-fg-soft">
              <a className="hover:text-accent" href="#mark">
                01 · Mark
              </a>
              <a className="hover:text-accent" href="#color">
                02 · Color
              </a>
              <a className="hover:text-accent" href="#type">
                03 · Type
              </a>
              <a className="hover:text-accent" href="#usage">
                04 · Usage Rights
              </a>
            </nav>
          </div>
        </header>

        {/* ----- 01 · The Mark --------------------------------------- */}
        <SectionShell code="01" id="mark" subtitle="Primary Identity" title="The Mark.">
          <p className="mb-12 max-w-3xl font-body text-[15px] leading-[1.7] text-fg-dim">
            <span className="font-display font-bold uppercase tracking-[0.04em] text-fg">
              The Spire.
            </span>{' '}
            A squat silhouette of{' '}
            <a
              className="text-fg underline decoration-accent/40 underline-offset-2 hover:decoration-accent"
              href="https://en.wikipedia.org/wiki/Weavers_Needle"
              rel="noreferrer"
              target="_blank"
            >
              Weaver&apos;s Needle
            </a>{' '}
            — the iconic basalt pinnacle in the Superstition Mountains east of
            Phoenix — with a partial orbital arc passing behind the chiseled
            tip and a satellite emerging on the right. The mark is monotone:
            every element is drawn in a single color. Hierarchy comes from
            stroke weight, not opacity. 80 × 80 viewBox; drops cleanly into
            any square slot.
          </p>

          {/* Three color treatments */}
          <SubsectionTitle tag="1.1">Color treatments</SubsectionTitle>
          <div className="mb-16 grid grid-cols-1 gap-px overflow-hidden border border-line/20 sm:grid-cols-3">
            <div className="flex min-h-[320px] flex-col items-center justify-center bg-bg p-10 text-fg">
              <SpireMark height={heroMarkHeight} width={heroMarkHeight} />
              <span className="mt-8 font-mono text-[10px] uppercase tracking-[0.28em] text-fg-soft">
                Foreground on Background
              </span>
            </div>
            <div className="flex min-h-[320px] flex-col items-center justify-center bg-bg-elev/40 p-10 text-accent">
              <SpireMark height={heroMarkHeight} width={heroMarkHeight} />
              <span className="mt-8 font-mono text-[10px] uppercase tracking-[0.28em] text-fg-soft">
                Accent on Elevated
              </span>
            </div>
            <div className="flex min-h-[320px] flex-col items-center justify-center bg-fg p-10 text-bg">
              <SpireMark height={heroMarkHeight} width={heroMarkHeight} />
              <span className="mt-8 font-mono text-[10px] uppercase tracking-[0.28em] text-fg-soft">
                Background on Foreground
              </span>
            </div>
          </div>

          {/* Wordmark lockup */}
          <SubsectionTitle tag="1.2">Wordmark lockup</SubsectionTitle>
          <div className="mb-16 grid grid-cols-1 gap-6 lg:grid-cols-3">
            <HudPanel className="lg:col-span-2">
              <div className="flex min-h-[200px] items-center justify-center p-12">
                <Lockup markHeight={96} />
              </div>
            </HudPanel>
            <HudPanel>
              <div className="space-y-3 p-6 font-body text-[13px] leading-[1.6] text-fg-dim">
                <p>
                  Mark and wordmark are paired with a gap equal to half the
                  mark&apos;s height. The wordmark stacks on two lines, with
                  letter-spacing of 0.06em.
                </p>
                <p>
                  Wordmark uses Saira Condensed at weight 700, all-caps. Font
                  size is the mark&apos;s height × 0.34.
                </p>
                <p>
                  Do not change the relative proportions, swap the typeface,
                  or re-color the wordmark and mark independently.
                </p>
              </div>
            </HudPanel>
          </div>

          {/* Scale + minimum size */}
          <SubsectionTitle tag="1.3">Sizing</SubsectionTitle>
          <HudPanel className="mb-12">
            <div className="space-y-8 p-10">
              <div className="flex items-end gap-8 text-fg">
                {[96, 48, 32, 20, 16].map((s) => (
                  <div className="flex flex-col items-center gap-2" key={s}>
                    <SpireMark height={s} width={s} />
                    <span className="font-mono text-[9px] uppercase tracking-[0.24em] text-fg-soft">
                      {s}px
                    </span>
                  </div>
                ))}
              </div>
              <div className="border-t border-line/15 pt-6 font-body text-[13px] leading-[1.7] text-fg-dim">
                <span className="font-mono text-[10px] uppercase tracking-[0.22em] text-accent">
                  Minimum size · 16 px
                </span>
                <p className="mt-2 max-w-2xl">
                  Below 16 px the satellite and the gap between the orbit and
                  the mountain start to collapse into a single blob. For
                  smaller surfaces (32 px favicon, 16 px favicon) the same
                  SVG is used at full fidelity — the geometry is tuned for
                  legibility at pixel scale.
                </p>
              </div>
            </div>
          </HudPanel>

          {/* Clear space */}
          <SubsectionTitle tag="1.4">Clear space</SubsectionTitle>
          <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
            <HudPanel className="lg:col-span-2">
              <div className="relative flex min-h-[280px] items-center justify-center p-10">
                {/* Clear-space guide ring: dashed border at mark + 25% margin */}
                <div className="relative">
                  <div
                    aria-hidden
                    className="absolute -inset-[36px] border border-dashed border-accent/40"
                  />
                  <SpireMark height={144} width={144} />
                </div>
              </div>
            </HudPanel>
            <HudPanel>
              <div className="space-y-3 p-6 font-body text-[13px] leading-[1.6] text-fg-dim">
                <p>
                  Maintain clear space around the mark equal to{' '}
                  <span className="text-fg">25 % of its height</span> on every
                  side. No other element — text, image, edge — may enter that
                  zone.
                </p>
                <p>
                  This applies to both the standalone mark and the wordmark
                  lockup.
                </p>
              </div>
            </HudPanel>
          </div>
        </SectionShell>

        {/* ----- 02 · Color ------------------------------------------ */}
        <SectionShell code="02" id="color" subtitle="Palette System" title="Color.">
          <p className="mb-12 max-w-3xl font-body text-[15px] leading-[1.7] text-fg-dim">
            The palette is deliberately cool everywhere — pure black surfaces,
            cool-white type, steel-blue secondaries — so that the single warm
            tone, amber-gold, reads as the signal color across every screen.
            Use amber for status, emphasis, and key affordances; never for
            decoration.
          </p>

          <SubsectionTitle tag="2.1">Primary palette</SubsectionTitle>
          <div className="mb-16 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            <ColorSwatch
              hex="#000000"
              name="Pure Black"
              rgb="0 0 0"
              role="Page surfaces, the canvas everything else sits on."
              token="--c-bg"
            />
            <ColorSwatch
              hex="#F0F2F8"
              name="Cool White"
              rgb="240 242 248"
              role="Primary foreground — type, key marks, instrument readouts."
              textOn="bg"
              token="--c-fg"
            />
            <ColorSwatch
              hex="#FFB347"
              name="Amber Gold"
              rgb="255 179 71"
              role="Signature accent. Status, emphasis, key affordances. Single warm tone in an otherwise cool palette."
              textOn="bg"
              token="--c-accent"
            />
            <ColorSwatch
              hex="#7C9CDC"
              name="Cool Steel"
              rgb="124 156 220"
              role="Secondary accent — orbital traces, quiet readouts. Always reads as less important than amber."
              textOn="bg"
              token="--c-steel"
            />
          </div>

          <SubsectionTitle tag="2.2">Surface system</SubsectionTitle>
          <div className="mb-16 grid grid-cols-1 gap-6 sm:grid-cols-3">
            <ColorSwatch
              hex="#040507"
              name="Black Deep"
              rgb="4 5 7"
              role="The deepest surface — used behind elevated cards."
              token="--c-bg-deep"
            />
            <ColorSwatch
              hex="#0A0C0E"
              name="Black Elev"
              rgb="10 12 14"
              role="One step up from pure black — card backgrounds, panels."
              token="--c-bg-elev"
            />
            <ColorSwatch
              hex="#9CA3AF"
              name="Cool Gray"
              rgb="156 163 175"
              role="Dimmed body text, secondary readouts."
              textOn="bg"
              token="--c-fg-dim"
            />
          </div>

          <SubsectionTitle tag="2.3">Status colors</SubsectionTitle>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-3">
            <ColorSwatch
              hex="#FF9120"
              name="Amber Hot"
              rgb="255 145 32"
              role="Hover and pressed state on amber affordances."
              textOn="bg"
              token="--c-accent-hot"
            />
            <ColorSwatch
              hex="#C4FF41"
              name="Signal Lime"
              rgb="196 255 65"
              role="Reserved for live indicators only — pulse dots, &ldquo;active&rdquo; chips. Use sparingly."
              textOn="bg"
              token="--c-signal"
            />
            <ColorSwatch
              hex="#FF6666"
              name="Warn Red"
              rgb="255 102 102"
              role="Errors and destructive confirmation only. Avoid in marketing surfaces."
              textOn="bg"
              token="--c-warn"
            />
          </div>
        </SectionShell>

        {/* ----- 03 · Typography ------------------------------------- */}
        <SectionShell code="03" id="type" subtitle="Type System" title="Typography.">
          <p className="mb-12 max-w-3xl font-body text-[15px] leading-[1.7] text-fg-dim">
            Three families, one each for the three jobs type does on the site:
            <span className="text-fg"> a condensed display face</span> for
            headlines and headers,{' '}
            <span className="text-fg">a refined sans</span> for body, and{' '}
            <span className="text-fg">a humanist monospace</span> for HUD
            readouts and identifiers.
          </p>

          <div className="space-y-6">
            <HudPanel>
              <div className="grid grid-cols-1 gap-px md:grid-cols-[1fr_2fr]">
                <div className="space-y-4 p-8">
                  <div className="font-mono text-[10px] uppercase tracking-[0.22em] text-accent">
                    3.1 · Display
                  </div>
                  <div className="font-display text-xl font-bold uppercase tracking-[0.02em] text-fg">
                    Saira Condensed
                  </div>
                  <p className="font-body text-[13px] leading-[1.6] text-fg-dim">
                    Headlines, section titles, wordmark. Tall, mechanical,
                    slightly stamped. Weights 500 / 600 / 700, all-caps,
                    tight tracking.
                  </p>
                  <div className="pt-2 font-mono text-[10px] uppercase tracking-[0.22em] text-fg-soft">
                    fontsource.org/saira-condensed
                  </div>
                </div>
                <div className="border-t border-line/15 p-8 md:border-l md:border-t-0">
                  <div
                    className="display-shout text-fg"
                    style={{ fontSize: 'clamp(40px, 6vw, 72px)' }}
                  >
                    <em>Scaled</em> systems
                    <br />
                    that sense, decide,
                    <br />
                    and act.
                  </div>
                </div>
              </div>
            </HudPanel>

            <HudPanel>
              <div className="grid grid-cols-1 gap-px md:grid-cols-[1fr_2fr]">
                <div className="space-y-4 p-8">
                  <div className="font-mono text-[10px] uppercase tracking-[0.22em] text-accent">
                    3.2 · Body
                  </div>
                  <div className="font-body text-xl text-fg">
                    Inter Variable
                  </div>
                  <p className="font-body text-[13px] leading-[1.6] text-fg-dim">
                    Long-form body copy and supporting paragraphs. Variable
                    weight axis, used at 400 / 500 / 600 inline.
                  </p>
                  <div className="pt-2 font-mono text-[10px] uppercase tracking-[0.22em] text-fg-soft">
                    fontsource.org/inter
                  </div>
                </div>
                <div className="border-t border-line/15 p-8 font-body md:border-l md:border-t-0">
                  <p className="text-[18px] leading-[1.6] text-fg">
                    Software and hardware integration for sensor and AI
                    systems — built with the discipline of a classified
                    program and the speed of a startup.
                  </p>
                  <p className="mt-4 text-[14px] leading-[1.7] text-fg-dim">
                    Body text at 13–16 px, line-height 1.6–1.7, color
                    fg-dim against the bg surface. Use the foreground white
                    only for the lead sentence or a key noun.
                  </p>
                </div>
              </div>
            </HudPanel>

            <HudPanel>
              <div className="grid grid-cols-1 gap-px md:grid-cols-[1fr_2fr]">
                <div className="space-y-4 p-8">
                  <div className="font-mono text-[10px] uppercase tracking-[0.22em] text-accent">
                    3.3 · Mono
                  </div>
                  <div className="font-mono text-xl text-fg">
                    Geist Mono Variable
                  </div>
                  <p className="font-body text-[13px] leading-[1.6] text-fg-dim">
                    HUD readouts, section codes, status pills, identifiers.
                    Used at 9–11 px, uppercase, tracking 0.22–0.32em.
                  </p>
                  <div className="pt-2 font-mono text-[10px] uppercase tracking-[0.22em] text-fg-soft">
                    fontsource.org/geist-mono
                  </div>
                </div>
                <div className="space-y-4 border-t border-line/15 p-8 md:border-l md:border-t-0">
                  <div className="readout border border-accent/60 px-2 py-0.5 text-accent">
                    <span aria-hidden>[</span>SEC.04<span aria-hidden>]</span>
                  </div>
                  <div className="font-mono text-[10px] uppercase tracking-[0.28em] text-fg-soft">
                    EST. {foundedYear} · Phoenix, Arizona
                  </div>
                  <div className="font-mono text-[10px] uppercase tracking-[0.32em] text-fg">
                    Superstition Labs, LLC
                  </div>
                  <div className="readout text-accent">
                    <span aria-hidden>●</span> Active
                  </div>
                </div>
              </div>
            </HudPanel>
          </div>
        </SectionShell>

        {/* ----- 04 · Usage Rights ----------------------------------- */}
        <SectionShell code="04" id="usage" subtitle="Copyright + Permissions" title="Usage rights.">
          <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
            <HudPanel tone="accent">
              <div className="space-y-4 p-8">
                <div className="font-mono text-[10px] uppercase tracking-[0.22em] text-accent">
                  Copyright
                </div>
                <p className="font-body text-[14px] leading-[1.7] text-fg">
                  &copy; {thisYear} Superstition Labs, LLC. All rights
                  reserved.
                </p>
                <p className="font-body text-[13px] leading-[1.7] text-fg-dim">
                  The Spire mark, the Superstition Labs wordmark, the
                  Superstition Labs name, and the color and typography system
                  documented on this page are the proprietary marks of
                  Superstition Labs, LLC.
                </p>
              </div>
            </HudPanel>

            <HudPanel>
              <div className="space-y-4 p-8">
                <div className="font-mono text-[10px] uppercase tracking-[0.22em] text-accent">
                  Permitted use
                </div>
                <ul className="space-y-2 font-body text-[13px] leading-[1.7] text-fg-dim">
                  <li>
                    <span className="text-accent">▸</span> Editorial reference
                    to Superstition Labs in news articles or industry
                    publications, using the assets as-is.
                  </li>
                  <li>
                    <span className="text-accent">▸</span> Display in
                    customer- or partner-facing materials with prior written
                    permission.
                  </li>
                  <li>
                    <span className="text-accent">▸</span> Use by Superstition
                    Labs employees and contractors in the course of
                    company-authorized work.
                  </li>
                </ul>
              </div>
            </HudPanel>

            <HudPanel>
              <div className="space-y-4 p-8">
                <div className="font-mono text-[10px] uppercase tracking-[0.22em] text-warn">
                  Restrictions
                </div>
                <ul className="space-y-2 font-body text-[13px] leading-[1.7] text-fg-dim">
                  <li>
                    <span className="text-warn">▸</span> Do not modify the
                    mark, change its proportions, rotate it, or recolor it
                    outside the treatments documented here.
                  </li>
                  <li>
                    <span className="text-warn">▸</span> Do not combine the
                    mark with other logos, place it inside another shape, or
                    use it as a graphical element.
                  </li>
                  <li>
                    <span className="text-warn">▸</span> Do not imply
                    endorsement, partnership, or affiliation that does not
                    exist.
                  </li>
                  <li>
                    <span className="text-warn">▸</span> Do not register or
                    file for any trademark, service mark, or domain that
                    incorporates the marks or a confusingly similar variation.
                  </li>
                </ul>
              </div>
            </HudPanel>

            <HudPanel>
              <div className="space-y-4 p-8">
                <div className="font-mono text-[10px] uppercase tracking-[0.22em] text-accent">
                  Requesting permission
                </div>
                <p className="font-body text-[13px] leading-[1.7] text-fg-dim">
                  For any use beyond the permitted-use list above, contact us
                  with the intended use case, surface, and timeframe.
                  Responses typically within five business days.
                </p>
                <a
                  className="inline-flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.28em] text-accent hover:text-accent-hot"
                  href={`mailto:${contactEmail}?subject=Brand%20asset%20permission%20request`}
                >
                  {contactEmail}
                  <span aria-hidden>→</span>
                </a>
              </div>
            </HudPanel>
          </div>
        </SectionShell>

        {/* ----- Bottom nav ------------------------------------------ */}
        <section className="border-t border-line/15 px-5 py-16 sm:px-8">
          <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-4">
            <div className="font-mono text-[10px] uppercase tracking-[0.28em] text-fg-soft">
              Superstition Labs · Brand Guidelines · v1.0
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
