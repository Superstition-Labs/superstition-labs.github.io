import { type RefObject, useEffect, useRef } from 'react';

/**
 * Tracks window.scrollY in a ref that mutates without re-rendering.
 * Read the latest value via `ref.current` — typically inside a
 * requestAnimationFrame loop or an R3F `useFrame` callback, where you
 * want the live scroll position but don't want React to re-render on
 * every scroll event (there are dozens per second).
 */
export function useScrollY(): RefObject<number> {
  const ref = useRef(0);

  useEffect(() => {
    const update = (): void => {
      ref.current = window.scrollY;
    };
    update();
    window.addEventListener('scroll', update, { passive: true });
    return () => {
      window.removeEventListener('scroll', update);
    };
  }, []);

  return ref;
}
