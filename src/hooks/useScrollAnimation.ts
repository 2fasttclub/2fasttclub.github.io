import { useEffect, useRef, useState } from 'react';

export const useScrollAnimation = <T extends HTMLElement = HTMLElement>(threshold = 0.1) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<T>(null);

  useEffect(() => {
    console.log('useScrollAnimation: Setting up observer');
    const observer = new IntersectionObserver(
      ([entry]) => {
        console.log('useScrollAnimation: Observer triggered', entry.isIntersecting);
        if (entry.isIntersecting) {
          setIsVisible(true);
          console.log('useScrollAnimation: Setting visible to true');
          // Once animated, we can disconnect the observer for performance
          observer.disconnect();
        }
      },
      {
        threshold,
        rootMargin: '50px 0px -50px 0px',
      }
    );

    if (ref.current) {
      console.log('useScrollAnimation: Observing element', ref.current);
      observer.observe(ref.current);
    } else {
      console.log('useScrollAnimation: No element to observe');
    }

    return () => observer.disconnect();
  }, [threshold]);

  console.log('useScrollAnimation: Returning', { isVisible });
  return [ref, isVisible] as const;
};