import { useContext } from 'react';

import { DirectionContext, type DirectionContextValue } from './DirectionContext';

export function useDirection(): DirectionContextValue {
  const ctx = useContext(DirectionContext);
  if (ctx === null) {
    throw new Error('useDirection must be used inside a DirectionProvider');
  }
  return ctx;
}
