import clsx from 'clsx';
import { Link } from 'gatsby';
import { OutboundLink } from 'gatsby-plugin-google-gtag';
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
          <span className="text-h6 lg:text-h5 px-7">&amp;</span>
          <span>L</span>
        </Link>
      </h3>
      <nav className="hidden uppercase tracking-widest lg:static lg:flex lg:flex-row">
        <Link activeClassName={styles.isActive} className={styles.navLink} to={Routes.OurStory}>
          Our Story
        </Link>
        <span className={styles.divider}>|</span>
        <Link activeClassName={styles.isActive} className={styles.navLink} to={Routes.Accommodations}>
          Accommodations
        </Link>
        <span className={styles.divider}>|</span>
        <Link activeClassName={styles.isActive} className={styles.navLink} to={Routes.Registry}>
          Registry
        </Link>
        <span className={styles.divider}>|</span>
        <OutboundLink className={styles.navLink} href={Routes.RsvpExternal} target="_blank">
          RSVP
        </OutboundLink>
      </nav>
    </header>
  );
};

export default Header;
