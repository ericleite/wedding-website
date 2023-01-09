import clsx from 'clsx';
import React, { useCallback, useRef, useState } from 'react';

import { useIntersectionObserver } from '../../hooks';
import { Divider, DividerProps } from '../Divider';
import * as styles from './AnimatedDivider.module.css';

interface AnimatedDividerProps extends DividerProps {
  autoTriggerOptions?: IntersectionObserverInit;
  delay?: number;
  duration?: number;
  hasTriggered?: boolean;
}

export default function AnimatedDivider({
  autoTriggerOptions,
  delay = 300,
  duration = 700,
  hasTriggered,
  ...dividerProps
}: AnimatedDividerProps) {
  const triggerRef = useRef<HTMLHRElement>(null);

  const [hasAutoTriggered, setHasAutoTriggered] = useState(false);

  const autoTriggerAnimation = useCallback(() => {
    if (typeof hasTriggered === 'undefined') {
      setHasAutoTriggered(true);
    }
  }, [hasTriggered]);

  useIntersectionObserver(triggerRef, autoTriggerAnimation, autoTriggerOptions);

  return (
    <Divider
      {...dividerProps}
      ref={triggerRef}
      className={clsx(dividerProps?.className, styles.divider, !(hasTriggered || hasAutoTriggered) && '!w-0')}
      style={{ transitionDelay: `${delay}ms`, transitionDuration: `${duration}ms` }}
    />
  );
}
