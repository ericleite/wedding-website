import clsx from 'clsx';
import { Link } from 'gatsby';
import { OutboundLink } from 'gatsby-plugin-google-gtag';
import React from 'react';

import { Routes, ThemeColor } from '../../types';
import * as styles from './Header.module.css';

export const HEADER_NAV_ID = 'navigation';

interface HeaderProps {
  className?: string;
  isNavOpen: boolean;
  theme?: ThemeColor;
}

const Header: React.FC<HeaderProps> = ({ className, isNavOpen, theme = ThemeColor.Dark }) => {
  const isDark = theme === ThemeColor.Dark;
  const isLight = theme === ThemeColor.Light;

  const navBackgroundLayer = (
    <div
      className={clsx('fixed top-0 w-full h-full bg-lightPrimary transition-all lg:hidden', {
        '-left-full': !isNavOpen,
        'left-0': isNavOpen,
      })}
    />
  );

  return (
    <header
      className={clsx(
        'p-13',
        'lg:p-10',
        isDark && styles.isDark,
        isLight && styles.isLight,
        isNavOpen && styles.isNavOpen,
        className,
      )}
    >
      {navBackgroundLayer}
      <nav
        className={clsx(
          'mt-18 break-words flex flex-col space-y-11 text-h5 tracking-widest uppercase',
          'lg:mt-0 lg:flex-row lg:flex-wrap lg:justify-center lg:text-base lg:space-y-0',
          !isNavOpen && 'pointer-events-none lg:pointer-events-auto',
        )}
        id={HEADER_NAV_ID}
      >
        <Link activeClassName={styles.isActive} className={styles.link} to={Routes.OurStory}>
          <span>Our Story</span>
          <span className={styles.dot} />
        </Link>
        <span className={styles.divider}>|</span>
        <Link activeClassName={styles.isActive} className={styles.link} to={Routes.Schedule}>
          <span>Schedule</span>
          <span className={styles.dot} />
        </Link>
        <span className={styles.divider}>|</span>
        <Link activeClassName={styles.isActive} className={styles.link} to={Routes.Accommodations}>
          <span>Travel &amp; Hotel</span>
          <span className={styles.dot} />
        </Link>
        <span className={styles.divider}>|</span>
        <Link activeClassName={styles.isActive} className={styles.link} to={Routes.Registry}>
          <span>Registry</span>
          <span className={styles.dot} />
        </Link>
        <span className={styles.divider}>|</span>
        <OutboundLink className={styles.link} href={Routes.RsvpExternal} target="_blank">
          <span>RSVP</span>
          <span className={styles.dot} />
        </OutboundLink>
      </nav>
    </header>
  );
};

export default Header;
