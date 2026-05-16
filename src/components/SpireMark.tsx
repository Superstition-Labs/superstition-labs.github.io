import { type ReactElement, type SVGProps } from 'react';

/**
 * The Spire — Superstition Labs logo mark.
 *
 * Weaver's Needle silhouette inside a corner-bracket frame, with a
 * circular orbital arc passing behind the mountain and a satellite
 * emerging on the right. 80×80 viewBox — drops cleanly into any
 * square slot (favicon, app icon, social card, header chip).
 *
 * Monotone: every element uses `currentColor` at full opacity.
 * Visual hierarchy comes from stroke widths (brackets 2, arc 1.8,
 * ground 1.2). Set the color from the outside via `color="…"` or a
 * Tailwind text color class on the parent / the svg itself.
 */
export function SpireMark(props: SVGProps<SVGSVGElement>): ReactElement {
  return (
    <svg fill="none" viewBox="0 0 80 80" {...props}>
      {/* Bracket frame — corner indicators on an 80×80 square. */}
      <path d="M 3 12 L 3 3 L 12 3" stroke="currentColor" strokeWidth="2" />
      <path d="M 68 3 L 77 3 L 77 12" stroke="currentColor" strokeWidth="2" />
      <path d="M 3 68 L 3 77 L 12 77" stroke="currentColor" strokeWidth="2" />
      <path d="M 68 77 L 77 77 L 77 68" stroke="currentColor" strokeWidth="2" />

      {/* Partial orbital arc — circular (r = 80), only ~38° sweep.
          Drawn FIRST so the spire silhouette occludes the middle. */}
      <path
        d="M 14 28 A 80 80 0 0 1 66 28"
        stroke="currentColor"
        strokeWidth="1.8"
      />

      {/* Satellite on the right wing of the arc, just past where the
          spire silhouette occludes the orbit. */}
      <circle cx="55" cy="25" fill="currentColor" r="4" />

      {/* The spire — Weaver's Needle. Asymmetric quad: apex high-right
          at (46,6) with a long chisel-angled tip sloping down-left to
          (34,17); near-vertical right cliff (~6° lean) from apex to
          (52,64); steeper-but-still-near-vertical left side (~14° lean)
          from chisel to base at (22,64). Drawn AFTER the arc so its
          silhouette occludes the middle of the orbit. */}
      <path d="M 46 6 L 34 17 L 22 64 L 52 64 Z" fill="currentColor" />

      {/* Ground line — same y as the spire base, extending past it on
          each side. Monotone (no opacity reduction). */}
      <line stroke="currentColor" strokeWidth="1.2" x1="14" x2="60" y1="64" y2="64" />
    </svg>
  );
}
