import clsx from 'clsx';
import { Link } from 'gatsby';
import React from 'react';

import { Routes, Theme } from '../../types';
import * as styles from './Header.module.css';

interface HeaderProps {
  className?: string;
  theme?: Theme;
}

const Header: React.FC<HeaderProps> = ({ className, theme = Theme.Light }) => {
  const isDark = theme === Theme.Dark;
  const isLight = theme === Theme.Light;

  return (
    <header
      className={clsx(className, isDark && styles.isDark, isLight && styles.isLight, 'flex flex-col items-center')}
    >
      <h3>
        <Link className={styles.monogramLink} to={Routes.Index}>
          <span>E</span>
          <span className="text-h5 px-7">&amp;</span>
          <span>L</span>
        </Link>
      </h3>
      <nav className="flex uppercase tracking-widest">
        <Link activeClassName={styles.isActive} className={styles.navLink} to={Routes.OurStory}>
          Our Story
        </Link>
        <span className={styles.divider}>|</span>
        <Link activeClassName={styles.isActive} className={styles.navLink} to={Routes.Accommodations}>
          Accommodations
        </Link>
        <span className={styles.divider}>|</span>
        <Link activeClassName={styles.isActive} className={styles.navLink} to={Routes.Rsvp}>
          RSVP
        </Link>
        <span className={styles.divider}>|</span>
        <Link activeClassName={styles.isActive} className={styles.navLink} to={Routes.Registry}>
          Registry
        </Link>
      </nav>
    </header>
  );
};

export default Header;
