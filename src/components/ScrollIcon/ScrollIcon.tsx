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
      className={clsx(styles.mouse, isDark && styles.isDark, isLight && styles.isLight, className)}
      onClick={onClick}
    >
      <span className={styles.dot} />
    </button>
  );
};

export default ScrollIcon;
