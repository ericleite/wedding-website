import clsx from 'clsx';
import React, { PropsWithChildren } from 'react';

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

  return (
    <div className={clsx('flex flex-col w-full h-screen min-h-[667px] z-10', className)}>
      <div className={clsx('grid grow min-h-0', contentContainerClassName)}>
        {image}
        <div
          className={clsx(
            styles.content,
            isDark && 'border-darkPrimary',
            isLight && 'border-lightPrimary',
            contentClassName,
          )}
        >
          {content}
        </div>
      </div>
      {children}
    </div>
  );
};

export default HeroImage;
