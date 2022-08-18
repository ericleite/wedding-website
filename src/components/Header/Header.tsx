import clsx from 'clsx';
import { Link } from 'gatsby';
import { OutboundLink } from 'gatsby-plugin-google-gtag';
import React, { useCallback, useState } from 'react';

import { Routes, ThemeColor } from '../../types';
import * as styles from './Header.module.css';

interface HeaderProps {
  className?: string;
  theme?: ThemeColor;
}

const Header: React.FC<HeaderProps> = ({ className, theme = ThemeColor.Light }) => {
  const isDark = theme === ThemeColor.Dark;
  const isLight = theme === ThemeColor.Light;

  const [isNavOpen, setIsNavOpen] = useState(false);

  const onClickNavToggle = useCallback(() => {
    setIsNavOpen((prevIsNavOpen) => !prevIsNavOpen);
  }, []);

  const monogram = (
    <h3 className="leading-none text-h3">
      <Link className={styles.monogramLink} to={Routes.Index}>
        <span>E</span>
        <span className="text-h5 px-7">&amp;</span>
        <span>L</span>
      </Link>
    </h3>
  );

  const navToggleButton = (
    <button
      aria-controls="navigation"
      aria-label="Menu Toggle"
      className="absolute top-1/2 left-0 -translate-y-1/2 flex flex-col space-y-6 -mx-6 px-6 py-7 md:hidden"
      onClick={onClickNavToggle}
    >
      <span className="w-11 h-3 bg-lightSecondary" />
      <span className="w-11 h-3 bg-lightSecondary" />
      <span className="w-11 h-3 bg-lightSecondary" />
    </button>
  );

  return (
    <header
      className={clsx(
        'relative flex flex-col items-center',
        isDark && styles.isDark,
        isLight && styles.isLight,
        isNavOpen && styles.isNavOpen,
        className,
      )}
    >
      {monogram}
      {navToggleButton}
      <nav
        className={clsx(
          'bg-lightPrimary break-words fixed flex flex-col font-bold h-full p-11 space-y-10 text-h5 top-0 tracking-widest transition-all uppercase w-full',
          'sm:p-13',
          'md:bg-transparent md:flex-row md:flex-wrap md:font-normal md:h-auto md:justify-center md:p-0 md:text-base md:space-y-0 md:static md:w-auto',
          {
            '-left-full': !isNavOpen,
            'left-0': isNavOpen,
          },
        )}
        id="navigation"
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
