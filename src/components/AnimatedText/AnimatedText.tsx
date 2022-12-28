import clsx from 'clsx';
import React, { PropsWithChildren, useCallback, useRef, useState } from 'react';

import { useIntersectionObserver } from '../../hooks';
import * as styles from './AnimatedText.module.css';

interface AnimatedTextProps {
  delay?: number;
  duration?: number;
  hasStarted?: boolean;
  selfStartOptions?: IntersectionObserverInit;
}

export default function AnimatedText({
  children,
  delay = 0,
  duration = 700,
  hasStarted,
  selfStartOptions,
}: PropsWithChildren<AnimatedTextProps>) {
  const rootRef = useRef<HTMLSpanElement>(null);

  const [hasSelfStarted, setHasSelfStarted] = useState(false);

  const startAnimation = useCallback(() => {
    if (typeof hasStarted === 'undefined') {
      setHasSelfStarted(true);
    }
  }, [hasStarted]);

  useIntersectionObserver(rootRef, startAnimation, selfStartOptions);

  return (
    <span ref={rootRef} className="block overflow-hidden px-[0.15em]">
      <span
        className={clsx(styles.wrapper, !(hasStarted || hasSelfStarted) && 'translate-y-full')}
        style={{ transitionDelay: `${delay}ms`, transitionDuration: `${duration}ms` }}
      >
        {children}
      </span>
    </span>
  );
}
