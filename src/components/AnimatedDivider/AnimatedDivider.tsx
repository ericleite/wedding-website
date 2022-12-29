import clsx from 'clsx';
import React, { useCallback, useRef, useState } from 'react';

import { useIntersectionObserver } from '../../hooks';
import { Divider, DividerProps } from '../Divider';
import * as styles from './AnimatedDivider.module.css';

interface AnimatedDividerProps extends DividerProps {
  delay?: number;
  duration?: number;
  options?: IntersectionObserverInit;
}

export default function AnimatedDivider({
  delay = 300,
  duration = 700,
  options,
  ...dividerProps
}: AnimatedDividerProps) {
  const rootRef = useRef<HTMLHRElement>(null);

  const [hasTriggered, setHasTriggered] = useState(false);

  const autoTriggerAnimation = useCallback(() => {
    setHasTriggered(true);
  }, []);

  useIntersectionObserver(rootRef, autoTriggerAnimation, options);

  return (
    <Divider
      {...dividerProps}
      ref={rootRef}
      className={clsx(dividerProps?.className, styles.divider, !hasTriggered && '!w-0')}
      style={{ transitionDelay: `${delay}ms`, transitionDuration: `${duration}ms` }}
    />
  );
}
