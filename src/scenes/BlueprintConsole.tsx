import { type ReactElement, useMemo } from 'react';

interface Node {
  readonly id: string;
  readonly x: number;
  readonly y: number;
}

interface Edge {
  readonly a: string;
  readonly b: string;
}

function buildGraph(): { nodes: readonly Node[]; edges: readonly Edge[] } {
  // Deterministic seed so the graph is stable across renders.
  let seed = 7919;
  const rand = (): number => {
    seed = (seed * 9301 + 49297) % 233280;
    return seed / 233280;
  };

  const nodes: Node[] = [];
  for (let i = 0; i < 22; i++) {
    nodes.push({
      id: `n${String(i)}`,
      x: 5 + rand() * 90,
      y: 8 + rand() * 84,
    });
  }

  const edges: Edge[] = [];
  for (let i = 0; i < nodes.length; i++) {
    const a = nodes[i];
    if (!a) continue;
    const distances: { id: string; d: number }[] = [];
    for (let j = 0; j < nodes.length; j++) {
      if (i === j) continue;
      const b = nodes[j];
      if (!b) continue;
      const d = Math.hypot(a.x - b.x, a.y - b.y);
      distances.push({ d, id: b.id });
    }
    distances.sort((x, y) => x.d - y.d);
    for (let k = 0; k < 2; k++) {
      const next = distances[k];
      if (!next) continue;
      const [first, second] = [a.id, next.id].sort();
      if (first === undefined || second === undefined) continue;
      const key = `${first}-${second}`;
      if (!edges.some((e) => `${e.a}-${e.b}` === key)) {
        edges.push({ a: first, b: second });
      }
    }
  }

  return { edges, nodes };
}

export function BlueprintConsole(): ReactElement {
  const { edges, nodes } = useMemo(buildGraph, []);
  const nodeMap = useMemo(() => {
    const m = new Map<string, Node>();
    nodes.forEach((n) => m.set(n.id, n));
    return m;
  }, [nodes]);

  return (
    <svg
      className="h-full w-full"
      preserveAspectRatio="xMidYMid slice"
      role="presentation"
      viewBox="0 0 100 100"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <radialGradient cx="50%" cy="50%" id="bp-vignette" r="65%">
          <stop offset="0%" stopColor="rgb(var(--c-accent))" stopOpacity="0.04" />
          <stop offset="100%" stopColor="rgb(var(--c-bg))" stopOpacity="0" />
        </radialGradient>
        <pattern height="6.25" id="bp-grid" patternUnits="userSpaceOnUse" width="6.25">
          <path
            d="M 6.25 0 L 0 0 0 6.25"
            fill="none"
            stroke="rgb(var(--c-accent))"
            strokeOpacity="0.08"
            strokeWidth="0.08"
          />
        </pattern>
        <pattern
          height="31.25"
          id="bp-grid-major"
          patternUnits="userSpaceOnUse"
          width="31.25"
        >
          <path
            d="M 31.25 0 L 0 0 0 31.25"
            fill="none"
            stroke="rgb(var(--c-accent))"
            strokeOpacity="0.18"
            strokeWidth="0.12"
          />
        </pattern>
      </defs>

      <rect fill="url(#bp-grid)" height="100" width="100" />
      <rect fill="url(#bp-grid-major)" height="100" width="100" />
      <rect fill="url(#bp-vignette)" height="100" width="100" />

      {/* Wireframe orbital ellipses */}
      <g
        fill="none"
        stroke="rgb(var(--c-accent))"
        strokeDasharray="0.6 0.6"
        strokeOpacity="0.55"
        strokeWidth="0.12"
        transform="translate(50 50)"
      >
        <ellipse cx="0" cy="0" rx="30" ry="10" />
        <ellipse cx="0" cy="0" rx="22" ry="22" transform="rotate(28)" />
        <ellipse cx="0" cy="0" rx="38" ry="14" transform="rotate(-22)" />
      </g>

      {/* Central crosshair */}
      <g
        stroke="rgb(var(--c-accent))"
        strokeOpacity="0.45"
        strokeWidth="0.12"
        transform="translate(50 50)"
      >
        <line x1="-3" x2="3" y1="0" y2="0" />
        <line x1="0" x2="0" y1="-3" y2="3" />
        <circle cx="0" cy="0" fill="none" r="1.4" />
      </g>

      {/* Neural graph edges with staggered pulse */}
      <g stroke="rgb(var(--c-accent))" strokeOpacity="0.35" strokeWidth="0.1">
        {edges.map((e, i) => {
          const a = nodeMap.get(e.a);
          const b = nodeMap.get(e.b);
          if (!a || !b) return null;
          return (
            <line
              key={`${e.a}-${e.b}`}
              style={{ animationDelay: `${String((i % 12) * 0.35)}s` }}
              x1={a.x}
              x2={b.x}
              y1={a.y}
              y2={b.y}
            >
              <animate
                attributeName="stroke-opacity"
                begin={`${String((i % 12) * 0.35)}s`}
                dur="3.5s"
                repeatCount="indefinite"
                values="0.15;0.85;0.15"
              />
            </line>
          );
        })}
      </g>

      {/* Nodes */}
      <g fill="rgb(var(--c-accent))">
        {nodes.map((n, i) => (
          <g key={n.id}>
            <circle cx={n.x} cy={n.y} r="0.55" />
            <circle
              cx={n.x}
              cy={n.y}
              fill="none"
              r="1.4"
              stroke="rgb(var(--c-accent))"
              strokeOpacity="0.6"
              strokeWidth="0.08"
            >
              <animate
                attributeName="r"
                begin={`${String(i * 0.18)}s`}
                dur="3s"
                repeatCount="indefinite"
                values="0.9;2.4;0.9"
              />
              <animate
                attributeName="stroke-opacity"
                begin={`${String(i * 0.18)}s`}
                dur="3s"
                repeatCount="indefinite"
                values="0.6;0;0.6"
              />
            </circle>
          </g>
        ))}
      </g>
    </svg>
  );
}
