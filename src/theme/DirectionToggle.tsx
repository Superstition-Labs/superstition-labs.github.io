import { type ReactElement } from 'react';

import { cn } from '../lib/cn';

import { type Direction, directionMeta, directions } from './directions';
import { useDirection } from './useDirection';

export function DirectionToggle(): ReactElement {
  const { direction, setDirection } = useDirection();

  return (
    <div
      aria-label="Visual direction"
      className={cn(
        'flex items-center gap-px rounded-full border border-line/70 bg-bg-elev/60 p-1',
        'backdrop-blur supports-[backdrop-filter]:bg-bg-elev/40',
      )}
      role="radiogroup"
    >
      {directions.map((d: Direction) => {
        const active = d === direction;
        return (
          <button
            aria-checked={active}
            className={cn(
              'rounded-full px-3 py-1.5 font-mono text-[10px] uppercase tracking-[0.18em] transition-colors',
              'focus-visible:outline focus-visible:outline-1 focus-visible:outline-accent',
              active
                ? 'bg-accent/15 text-accent ring-1 ring-accent/50'
                : 'text-fg-dim hover:text-fg',
            )}
            key={d}
            onClick={() => {
              setDirection(d);
            }}
            role="radio"
            type="button"
          >
            {directionMeta[d].codename}
          </button>
        );
      })}
    </div>
  );
}
