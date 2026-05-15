import { type RefObject, useEffect, useState } from 'react';

const OPTIONS: IntersectionObserverInit = {
  rootMargin: '120px',
  threshold: 0,
};

/**
 * Tracks whether an element is intersecting the viewport. Used to pause
 * expensive work (e.g. a WebGL render loop) when the element scrolls off-screen.
 */
export function useInViewport<T extends Element>(ref: RefObject<T | null>): boolean {
  const [inView, setInView] = useState(true);

  useEffect(() => {
    const el = ref.current;
    if (el === null) return undefined;

    const observer = new IntersectionObserver((entries) => {
      const entry = entries[0];
      if (entry) setInView(entry.isIntersecting);
    }, OPTIONS);
    observer.observe(el);

    return () => {
      observer.disconnect();
    };
  }, [ref]);

  return inView;
}
