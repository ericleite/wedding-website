import clsx from 'clsx';
import React from 'react';

import { ThemeColor } from '../../types';
import { HEADER_NAV_ID } from '../Header';
import * as styles from './NavToggle.module.css';

interface NavToggleProps {
  className?: string;
  isNavOpen: boolean;
  onClick: React.MouseEventHandler<HTMLButtonElement>;
  theme?: ThemeColor;
}

const NavToggle: React.FC<NavToggleProps> = ({ className, isNavOpen, onClick, theme = ThemeColor.Dark }) => {
  const isDark = theme === ThemeColor.Dark || isNavOpen;
  const isLight = theme === ThemeColor.Light;

  return (
    <button
      aria-controls={HEADER_NAV_ID}
      aria-label="Navigation Menu Toggle"
      className={clsx(
        'flex flex-col px-6 -mx-6 py-7 -my-7 md:hidden',
        isDark && styles.isDark,
        isLight && styles.isLight,
        isNavOpen && styles.isNavOpen,
        className,
      )}
      onClick={onClick}
    >
      <span className={styles.navToggleBarTop} />
      <span className={styles.navToggleBarMiddle} />
      <span className={styles.navToggleBarBottom} />
    </button>
  );
};

export default NavToggle;
