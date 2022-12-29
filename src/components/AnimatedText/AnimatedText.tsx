import clsx from 'clsx';
import React, { PropsWithChildren, useCallback, useRef, useState } from 'react';

import { useIntersectionObserver } from '../../hooks';
import * as styles from './AnimatedText.module.css';

export enum AnimationType {
  FadeIn,
  SlideIn,
}

interface AnimatedTextProps {
  animationType?: AnimationType;
  autoTriggerOptions?: IntersectionObserverInit;
  className?: string;
  delay?: number;
  duration?: number;
  hasTriggered?: boolean;
}

export default function AnimatedText({
  animationType = AnimationType.SlideIn,
  autoTriggerOptions,
  children,
  className,
  delay = 0,
  duration = 700,
  hasTriggered,
}: PropsWithChildren<AnimatedTextProps>) {
  const triggerRef = useRef<HTMLSpanElement>(null);

  const [hasAutoTriggered, setHasAutoTriggered] = useState(false);

  const autoTriggerAnimation = useCallback(() => {
    if (typeof hasTriggered === 'undefined') {
      setHasAutoTriggered(true);
    }
  }, [hasTriggered]);

  useIntersectionObserver(triggerRef, autoTriggerAnimation, autoTriggerOptions);

  let rootClassName = '';
  let preAnimatedClassName = '';
  let animatedClassName = '';

  switch (animationType) {
    case AnimationType.FadeIn:
      preAnimatedClassName = 'opacity-0';
      animatedClassName = 'opacity-100';
      break;
    case AnimationType.SlideIn:
      rootClassName = 'block overflow-hidden px-[0.15em]';
      preAnimatedClassName = 'translate-y-full';
      animatedClassName = 'translate-y-0';
      break;
  }

  return (
    <span ref={triggerRef} className={clsx(className, rootClassName)}>
      <span
        className={clsx(
          styles.wrapper,
          !(hasTriggered || hasAutoTriggered) && preAnimatedClassName,
          (hasTriggered || hasAutoTriggered) && animatedClassName,
        )}
        style={{ transitionDelay: `${delay}ms`, transitionDuration: `${duration}ms` }}
      >
        {children}
      </span>
    </span>
  );
}
