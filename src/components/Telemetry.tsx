import { type ReactElement, useEffect, useState } from 'react';

import { cn } from '../lib/cn';

interface Channel {
  readonly fmt: (v: number) => string;
  readonly label: string;
  readonly seed: number;
  readonly swing: number;
}

const channels: readonly Channel[] = [
  { fmt: (v) => `${v.toFixed(2)} ms`, label: 'LATENCY', seed: 12.4, swing: 2.4 },
  { fmt: (v) => `${v.toFixed(1)} dB`, label: 'SNR', seed: 32.2, swing: 1.8 },
  { fmt: (v) => `${v.toFixed(0)} fps`, label: 'INFERENCE', seed: 144, swing: 7 },
  { fmt: (v) => `${(v * 1000).toFixed(0)} kbps`, label: 'UPLINK', seed: 8.6, swing: 0.7 },
];

function noise(seed: number, swing: number): number {
  return seed + (Math.random() - 0.5) * swing;
}

export function Telemetry({ className }: { readonly className?: string }): ReactElement {
  const [values, setValues] = useState<readonly number[]>(() => channels.map((c) => c.seed));

  useEffect(() => {
    const id = window.setInterval(() => {
      setValues(channels.map((c) => noise(c.seed, c.swing)));
    }, 850);
    return () => {
      window.clearInterval(id);
    };
  }, []);

  return (
    <div
      className={cn(
        'grid grid-cols-2 gap-x-6 gap-y-2 font-mono text-[11px] tracking-[0.14em] text-fg-dim',
        className,
      )}
    >
      {channels.map((c, i) => (
        <div className="flex items-baseline justify-between gap-3" key={c.label}>
          <span className="uppercase">{c.label}</span>
          <span className="tabular-nums text-accent">{c.fmt(values[i] ?? c.seed)}</span>
        </div>
      ))}
    </div>
  );
}
