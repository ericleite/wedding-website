/**
 * SectionContainer contains the standard layout of a content section.
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import clsx from 'clsx';
import React from 'react';

import { Theme } from '../../types';
import * as styles from './SectionContainer.module.css';

interface SectionContainerProps {
  className?: string;
  theme?: Theme;
}

const SectionContainer: React.FC<React.PropsWithChildren<SectionContainerProps>> = ({
  children,
  className = 'place-items-stretch',
  theme = Theme.Light,
}) => {
  const isDark = theme === Theme.Dark;
  return (
    <div className={clsx(className, styles.container, { 'bg-darkPrimary': isDark }, 'grid grid-cols-12 gap-13')}>
      {children}
    </div>
  );
};

export default SectionContainer;
