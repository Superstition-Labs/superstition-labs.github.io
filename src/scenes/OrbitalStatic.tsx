import { type ReactElement, useMemo } from 'react';

// Lightweight, motion-free SVG used in place of the WebGL canvas on mobile —
// keeps the hero from looking empty without paying any per-frame cost.
export function OrbitalStatic(): ReactElement {
  const stars = useMemo(() => {
    let seed = 4242;
    const rand = (): number => {
      seed = (seed * 9301 + 49297) % 233280;
      return seed / 233280;
    };
    return Array.from({ length: 60 }, (_, i) => ({
      cx: rand() * 400,
      cy: rand() * 400,
      key: `star-${String(i)}`,
      o: 0.2 + rand() * 0.6,
      r: rand() < 0.85 ? 0.6 : 1.1,
    }));
  }, []);

  return (
    <svg
      className="h-full w-full"
      preserveAspectRatio="xMidYMid meet"
      role="presentation"
      viewBox="0 0 400 400"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <radialGradient cx="50%" cy="45%" id="planet-grad" r="55%">
          <stop offset="0%" stopColor="#10243d" />
          <stop offset="60%" stopColor="#08111f" />
          <stop offset="100%" stopColor="#04080f" />
        </radialGradient>
        <radialGradient cx="50%" cy="50%" id="halo-cyan" r="50%">
          <stop offset="0%" stopColor="#4FD1FF" stopOpacity="0.65" />
          <stop offset="100%" stopColor="#4FD1FF" stopOpacity="0" />
        </radialGradient>
        <radialGradient cx="50%" cy="50%" id="halo-amber" r="50%">
          <stop offset="0%" stopColor="#FFB347" stopOpacity="0.6" />
          <stop offset="100%" stopColor="#FFB347" stopOpacity="0" />
        </radialGradient>
      </defs>

      {/* Stars */}
      <g>
        {stars.map((s) => (
          <circle
            cx={s.cx}
            cy={s.cy}
            fill="white"
            fillOpacity={s.o}
            key={s.key}
            r={s.r}
          />
        ))}
      </g>

      {/* Orbit ellipses */}
      <g fill="none" stroke="#4FD1FF" strokeOpacity="0.22" strokeWidth="0.6">
        <ellipse cx="200" cy="200" rx="118" ry="42" transform="rotate(12 200 200)" />
        <ellipse cx="200" cy="200" rx="148" ry="64" transform="rotate(-18 200 200)" />
      </g>
      <ellipse
        cx="200"
        cy="200"
        fill="none"
        rx="172"
        ry="36"
        stroke="#FFB347"
        strokeOpacity="0.18"
        strokeWidth="0.6"
        transform="rotate(-32 200 200)"
      />

      {/* Planet */}
      <circle cx="200" cy="200" fill="url(#planet-grad)" r="58" />

      {/* Neural mesh — simple icosahedron-like wireframe */}
      <g fill="none" stroke="#4FD1FF" strokeOpacity="0.5" strokeWidth="0.6">
        <polygon points="200,135 260,170 260,230 200,265 140,230 140,170" />
        <polygon points="200,150 244,176 244,224 200,250 156,224 156,176" />
        <line x1="200" x2="200" y1="135" y2="265" />
        <line x1="140" x2="260" y1="170" y2="230" />
        <line x1="260" x2="140" y1="170" y2="230" />
      </g>

      {/* Mesh node markers */}
      <g fill="#4FD1FF">
        <circle cx="200" cy="135" r="1.6" />
        <circle cx="200" cy="265" r="1.6" />
        <circle cx="140" cy="170" r="1.6" />
        <circle cx="260" cy="170" r="1.6" />
        <circle cx="140" cy="230" r="1.6" />
        <circle cx="260" cy="230" r="1.6" />
        <circle cx="200" cy="200" fill="#FFB347" r="1.6" />
      </g>

      {/* Satellites with halos + connection beams to the planet */}
      <g>
        {/* Satellite 1 — cyan, right */}
        <line stroke="#4FD1FF" strokeOpacity="0.28" strokeWidth="0.6" x1="320" x2="200" y1="178" y2="200" />
        <circle cx="320" cy="178" fill="url(#halo-cyan)" r="14" />
        <circle cx="320" cy="178" fill="#4FD1FF" r="2.6" />

        {/* Satellite 2 — cyan, upper-left */}
        <line stroke="#4FD1FF" strokeOpacity="0.28" strokeWidth="0.6" x1="88" x2="200" y1="148" y2="200" />
        <circle cx="88" cy="148" fill="url(#halo-cyan)" r="13" />
        <circle cx="88" cy="148" fill="#4FD1FF" r="2.4" />

        {/* Satellite 3 — amber, lower-right */}
        <line stroke="#FFB347" strokeOpacity="0.24" strokeWidth="0.6" x1="328" x2="200" y1="252" y2="200" />
        <circle cx="328" cy="252" fill="url(#halo-amber)" r="13" />
        <circle cx="328" cy="252" fill="#FFB347" r="2.4" />

        {/* Satellite 4 — cyan, lower-left */}
        <line stroke="#4FD1FF" strokeOpacity="0.22" strokeWidth="0.6" x1="76" x2="200" y1="270" y2="200" />
        <circle cx="76" cy="270" fill="url(#halo-cyan)" r="11" />
        <circle cx="76" cy="270" fill="#4FD1FF" r="2.2" />
      </g>
    </svg>
  );
}
