/**
 * SectionContainer contains the standard layout of a content section.
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import clsx from 'clsx';
import React from 'react';

import { ThemeColor } from '../../types';

interface SectionContainerProps {
  className?: string;
  spacingClassName?: string;
  theme?: ThemeColor;
}

const SectionContainer: React.FC<React.PropsWithChildren<SectionContainerProps>> = ({
  children,
  className = 'place-items-stretch',
  spacingClassName = 'gap-11 lg:gap-13',
  theme = ThemeColor.Light,
}) => {
  const isDark = theme === ThemeColor.Dark;
  return (
    <div
      className={clsx(
        'grid mx-auto px-13 lg:px-0 lg:grid-cols-12',
        { 'bg-darkPrimary': isDark },
        className,
        spacingClassName,
      )}
    >
      {children}
    </div>
  );
};

export default SectionContainer;
