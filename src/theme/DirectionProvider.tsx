import {
  type ReactElement,
  type ReactNode,
  useCallback,
  useEffect,
  useMemo,
  useState,
} from 'react';

import { DirectionContext, type DirectionContextValue } from './DirectionContext';
import { type Direction, isDirection } from './directions';

const STORAGE_KEY = 'sl:direction';
const DEFAULT_DIRECTION: Direction = 'c';

function readInitial(): Direction {
  if (typeof window === 'undefined') return DEFAULT_DIRECTION;
  const stored = window.localStorage.getItem(STORAGE_KEY);
  if (isDirection(stored)) return stored;
  return DEFAULT_DIRECTION;
}

interface DirectionProviderProps {
  readonly children: ReactNode;
}

export function DirectionProvider({ children }: DirectionProviderProps): ReactElement {
  const [direction, setDirectionState] = useState<Direction>(readInitial);

  useEffect(() => {
    document.documentElement.dataset.direction = direction;
    window.localStorage.setItem(STORAGE_KEY, direction);
  }, [direction]);

  const setDirection = useCallback((next: Direction) => {
    setDirectionState(next);
  }, []);

  const value = useMemo<DirectionContextValue>(
    () => ({ direction, setDirection }),
    [direction, setDirection],
  );

  return <DirectionContext.Provider value={value}>{children}</DirectionContext.Provider>;
}
