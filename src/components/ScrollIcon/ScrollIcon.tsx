import clsx from 'clsx';
import React from 'react';

import { ThemeColor } from '../../types';
import * as styles from './ScrollIcon.module.css';

interface ScrollIconProps {
  className?: string;
  onClick: React.MouseEventHandler<HTMLButtonElement>;
  theme?: ThemeColor;
}

const ScrollIcon: React.FC<ScrollIconProps> = ({ className, onClick, theme = ThemeColor.Light }) => {
  const isDark = theme === ThemeColor.Dark;
  const isLight = theme === ThemeColor.Light;

  return (
    <button
      aria-label="Scroll down to view more"
      className={clsx('px-6', isDark && styles.isDark, isLight && styles.isLight, className)}
      onClick={onClick}
    >
      <svg className={styles.icon} fill="none" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M6.34317 7.75732L4.92896 9.17154L12 16.2426L19.0711 9.17157L17.6569 7.75735L12 13.4142L6.34317 7.75732Z"
          fill="currentColor"
        />
      </svg>
    </button>
  );
};

export default ScrollIcon;
