import { type ReactElement, type SVGProps } from 'react';

/**
 * The Spire — Superstition Labs logo mark.
 *
 * Weaver's Needle silhouette in the lower portion of an 80×80 viewBox,
 * with a circular orbital arc passing behind the spire's chiseled tip
 * and a satellite emerging on the right wing of the orbit.
 *
 * Monotone: every element uses `currentColor` at full opacity. Visual
 * hierarchy comes from stroke widths (arc 1.8, ground 1.2). Set the
 * color from the outside via a Tailwind text color class or `color`
 * style.
 */
export function SpireMark(props: SVGProps<SVGSVGElement>): ReactElement {
  return (
    <svg fill="none" viewBox="0 0 80 80" {...props}>
      {/* Partial orbital arc — circular (r = 80), only ~38° sweep,
          dropped 3 units so the peak (y≈26.7) ducks behind the upper
          half of the spire's chisel. Drawn FIRST so the silhouette
          occludes the middle of the orbit. */}
      <path
        d="M 14 31 A 80 80 0 0 1 66 31"
        stroke="currentColor"
        strokeWidth="1.8"
      />

      {/* Satellite on the right wing of the arc, just past where the
          spire silhouette occludes the orbit. */}
      <circle cx="55" cy="28" fill="currentColor" r="4" />

      {/* The spire — Weaver's Needle, shifted down to sit in the
          lower portion of the bounding region. Asymmetric quad: apex
          high-right at (44,21) with a long chisel-angled tip sloping
          down-left to (30,33); near-vertical right cliff (~7° lean)
          from apex to (50,71); steeper-but-still-near-vertical left
          side (~9° lean) from chisel low to base at (24,71). */}
      <path d="M 44 21 L 30 33 L 24 71 L 50 71 Z" fill="currentColor" />

      {/* Ground line — same y as the spire base, extending past it on
          each side. Monotone (no opacity reduction). */}
      <line stroke="currentColor" strokeWidth="1.2" x1="18" x2="56" y1="71" y2="71" />
    </svg>
  );
}
