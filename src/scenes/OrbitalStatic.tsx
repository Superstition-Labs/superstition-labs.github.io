import { type ReactElement, useMemo } from 'react';

// Static SVG used in place of the WebGL canvas on mobile. Colors match the
// site palette: steel-blue mesh, amber active satellite, amber center pulse.
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
          <stop offset="0%" stopColor="#0c1626" />
          <stop offset="60%" stopColor="#04060a" />
          <stop offset="100%" stopColor="#000000" />
        </radialGradient>
        <radialGradient cx="50%" cy="50%" id="halo-steel" r="50%">
          <stop offset="0%" stopColor="#7C9CDC" stopOpacity="0.55" />
          <stop offset="100%" stopColor="#7C9CDC" stopOpacity="0" />
        </radialGradient>
        <radialGradient cx="50%" cy="50%" id="halo-amber" r="50%">
          <stop offset="0%" stopColor="#FFB347" stopOpacity="0.7" />
          <stop offset="100%" stopColor="#FFB347" stopOpacity="0" />
        </radialGradient>
      </defs>

      {/* Stars */}
      <g>
        {stars.map((s) => (
          <circle cx={s.cx} cy={s.cy} fill="white" fillOpacity={s.o} key={s.key} r={s.r} />
        ))}
      </g>

      {/* Orbit ellipses */}
      <g fill="none" stroke="#7C9CDC" strokeOpacity="0.26" strokeWidth="0.6">
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
        strokeOpacity="0.32"
        strokeWidth="0.7"
        transform="rotate(-32 200 200)"
      />

      {/* Planet */}
      <circle cx="200" cy="200" fill="url(#planet-grad)" r="58" />
      <circle cx="200" cy="200" fill="none" r="58" stroke="#FFB347" strokeOpacity="0.25" strokeWidth="0.5" />

      {/* Neural mesh — steel-blue wireframe icosahedron */}
      <g fill="none" stroke="#7C9CDC" strokeOpacity="0.55" strokeWidth="0.6">
        <polygon points="200,135 260,170 260,230 200,265 140,230 140,170" />
        <polygon points="200,150 244,176 244,224 200,250 156,224 156,176" />
        <line x1="200" x2="200" y1="135" y2="265" />
        <line x1="140" x2="260" y1="170" y2="230" />
        <line x1="260" x2="140" y1="170" y2="230" />
      </g>

      {/* Mesh node markers */}
      <g fill="#7C9CDC">
        <circle cx="200" cy="135" r="1.6" />
        <circle cx="200" cy="265" r="1.6" />
        <circle cx="140" cy="170" r="1.6" />
        <circle cx="260" cy="170" r="1.6" />
        <circle cx="140" cy="230" r="1.6" />
        <circle cx="260" cy="230" r="1.6" />
      </g>
      <circle cx="200" cy="200" fill="#FFB347" r="2.2" />

      {/* Satellites — one amber primary, the rest steel. */}
      <g>
        <line stroke="#7C9CDC" strokeOpacity="0.32" strokeWidth="0.6" x1="320" x2="200" y1="178" y2="200" />
        <circle cx="320" cy="178" fill="url(#halo-steel)" r="14" />
        <polygon fill="#7C9CDC" points="316,174 326,178 316,182" />

        <line stroke="#7C9CDC" strokeOpacity="0.32" strokeWidth="0.6" x1="88" x2="200" y1="148" y2="200" />
        <circle cx="88" cy="148" fill="url(#halo-steel)" r="13" />
        <polygon fill="#7C9CDC" points="84,144 94,148 84,152" />

        <line stroke="#FFB347" strokeOpacity="0.42" strokeWidth="0.8" x1="328" x2="200" y1="252" y2="200" />
        <circle cx="328" cy="252" fill="url(#halo-amber)" r="14" />
        <polygon fill="#FFB347" points="322,247 334,252 322,257" />

        <line stroke="#7C9CDC" strokeOpacity="0.26" strokeWidth="0.6" x1="76" x2="200" y1="270" y2="200" />
        <circle cx="76" cy="270" fill="url(#halo-steel)" r="11" />
        <polygon fill="#7C9CDC" points="72,267 82,270 72,273" />
      </g>
    </svg>
  );
}
