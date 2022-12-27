import clsx from 'clsx';
import React, { PropsWithChildren } from 'react';

import * as styles from './AnimatedText.module.css';

interface AnimatedTextProps {
  delay?: number;
  hasStarted: boolean;
}

export default function AnimatedText({ children, delay, hasStarted }: PropsWithChildren<AnimatedTextProps>) {
  return (
    <span className="block overflow-hidden">
      <span
        className={clsx(styles.wrapper, !hasStarted && 'translate-y-full')}
        style={{ transitionDelay: `${delay}ms` }}
      >
        {children}
      </span>
    </span>
  );
}
