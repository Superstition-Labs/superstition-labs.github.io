import { createContext } from 'react';

import { type Direction } from './directions';

export interface DirectionContextValue {
  readonly direction: Direction;
  readonly setDirection: (next: Direction) => void;
}

export const DirectionContext = createContext<DirectionContextValue | null>(null);
