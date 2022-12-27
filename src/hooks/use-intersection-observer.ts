import { RefObject, useEffect } from 'react';

// React hook that calls a callback when an element is intersecting the viewport by 60%
export const useIntersectionObserver = (
  ref: RefObject<HTMLElement>,
  callback: (observer: IntersectionObserver) => void,
  options: IntersectionObserverInit = {},
) => {
  const { threshold = 0.5 } = options;

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          callback(observer);
          ref.current && observer.unobserve(ref.current);
        }
      },
      { threshold },
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      observer.disconnect();
    };
  }, [ref, callback, threshold]);
};
