import clsx from 'clsx';
import { Link } from 'gatsby';
import { OutboundLink } from 'gatsby-plugin-google-gtag';
import React from 'react';

import { Routes, ThemeColor } from '../../types';
import * as styles from './Header.module.css';

const NAV_ID = 'navigation';

interface HeaderProps {
  className?: string;
  isNavOpen: boolean;
  onClickNavToggle: () => void;
  theme?: ThemeColor;
}

const Header: React.FC<HeaderProps> = ({ className, isNavOpen, onClickNavToggle, theme = ThemeColor.Light }) => {
  const isDark = theme === ThemeColor.Dark || isNavOpen;
  const isLight = theme === ThemeColor.Light;

  const monogramLink = (
    <h3 className="text-h3">
      <Link className={styles.monogramLink} to={Routes.Index}>
        <span>E</span>
        <span className="text-h5 px-7">&amp;</span>
        <span>L</span>
      </Link>
    </h3>
  );

  const navToggleButton = (
    <button
      aria-controls={NAV_ID}
      aria-label="Navigation Menu Toggle"
      className={clsx(
        'absolute top-1/2 left-0 -translate-y-1/2 flex flex-col -mx-6 px-6 py-7 md:hidden',
        styles.navToggle,
      )}
      onClick={onClickNavToggle}
    >
      <span className={styles.navToggleBarTop} />
      <span className={styles.navToggleBarMiddle} />
      <span className={styles.navToggleBarBottom} />
    </button>
  );

  const navBackgroundLayer = (
    <div
      className={clsx('fixed top-0 w-full h-full bg-lightPrimary transition-all md:hidden', {
        '-left-full': !isNavOpen,
        'left-0': isNavOpen,
      })}
    />
  );

  return (
    <header
      className={clsx(
        'flex flex-col items-stretch min-h-0 z-30',
        isDark && styles.isDark,
        isLight && styles.isLight,
        isNavOpen && styles.isNavOpen,
        className,
      )}
    >
      {navBackgroundLayer}
      <div className="relative flex flex-col items-center">
        {monogramLink}
        {navToggleButton}
      </div>
      <nav
        className={clsx(
          'break-words flex flex-col mt-15 space-y-11 text-h5 tracking-widest uppercase',
          'md:flex-row md:flex-wrap md:justify-center md:mt-11 md:text-base md:space-y-0',
          !isNavOpen && 'pointer-events-none md:pointer-events-auto',
        )}
        id={NAV_ID}
      >
        <Link activeClassName={styles.isActive} className={styles.navLink} to={Routes.OurStory}>
          Our Story
        </Link>
        <span className={styles.divider}>|</span>
        <Link activeClassName={styles.isActive} className={styles.navLink} to={Routes.Accommodations}>
          Travel &amp; Hotel
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
