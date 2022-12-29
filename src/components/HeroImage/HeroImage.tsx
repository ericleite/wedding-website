import clsx from 'clsx';
import React, { PropsWithChildren, useCallback, useRef, useState } from 'react';

import { useIntersectionObserver } from '../../hooks';
import { ThemeColor } from '../../types';
import * as styles from './HeroImage.module.css';

interface HeroImageProps {
  className?: string;
  content: React.ReactNode;
  contentClassName?: string;
  contentContainerClassName?: string;
  image: React.ReactNode;
  theme?: ThemeColor;
}

const HeroImage: React.FC<PropsWithChildren<HeroImageProps>> = ({
  children,
  className,
  content,
  contentClassName,
  contentContainerClassName,
  image,
  theme = ThemeColor.Dark,
}) => {
  const isDark = theme === ThemeColor.Dark;
  const isLight = theme === ThemeColor.Light;
  const animatedBorderSharedStyles = clsx(
    `absolute duration-1000`,
    isDark && 'bg-darkPrimary',
    isLight && 'bg-lightPrimary',
  );

  const triggerRef = useRef<HTMLDivElement>(null);
  const [hasTriggered, setHasTriggered] = useState(false);
  const autoTriggerAnimation = useCallback(() => {
    setHasTriggered(true);
  }, []);
  useIntersectionObserver(triggerRef, autoTriggerAnimation, { threshold: 0 });

  return (
    <div className={clsx('flex flex-col w-full h-screen min-h-[667px] z-30', className)}>
      <div className={clsx('grid grow min-h-0', contentContainerClassName)}>
        {image}
        <div
          ref={triggerRef}
          className={clsx('relative grid place-content-stretch min-h-0 m-10 lg:m-11', styles.content, contentClassName)}
        >
          {content}
          {/* Top border */}
          <div
            className={clsx(
              'w-full h-1 top-0 transition-[width] origin-left',
              animatedBorderSharedStyles,
              !hasTriggered && '!w-0',
            )}
          />
          {/* Right border */}
          <div
            className={clsx(
              'w-1 h-full top-0 right-0 delay-1000 transition-[height] origin-top',
              animatedBorderSharedStyles,
              !hasTriggered && '!h-0',
            )}
          />
          {/* Bottom border */}
          <div
            className={clsx(
              'w-full h-1 right-0 bottom-0 transition-[width] origin-right',
              animatedBorderSharedStyles,
              !hasTriggered && '!w-0',
            )}
          />
          {/* Left border */}
          <div
            className={clsx(
              'w-1 h-full bottom-0 left-0 delay-1000 transition-[height] origin-bottom',
              animatedBorderSharedStyles,
              !hasTriggered && '!h-0',
            )}
          />
        </div>
      </div>
      {children}
    </div>
  );
};

export default HeroImage;
