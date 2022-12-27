import clsx from 'clsx';
import { Link } from 'gatsby';
import { OutboundLink } from 'gatsby-plugin-google-gtag';
import React, { useLayoutEffect, useRef, useState } from 'react';

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

  const headerRef = useRef<HTMLElement>(null);

  const [isStuck, setIsStuck] = useState<boolean>(false);
  const [unstuckPosition, setUnstuckPosition] = useState<number>();

  useLayoutEffect(() => {
    function handleScroll() {
      if (headerRef.current && typeof unstuckPosition !== 'undefined') {
        const isStuck = window.scrollY >= unstuckPosition;
        setIsStuck(isStuck);
      }
    }
    handleScroll();
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [unstuckPosition]);

  useLayoutEffect(() => {
    function handleResize() {
      if (headerRef.current && headerRef.current.offsetTop > 0) {
        setUnstuckPosition(headerRef.current.offsetTop);
      }
    }
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

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
      ref={headerRef}
      className={clsx(
        'absolute inset-0 p-13',
        'lg:static lg:inset-auto lg:inset-x-0 lg:p-10',
        isDark && styles.isDark,
        isLight && styles.isLight,
        isNavOpen && styles.isNavOpen,
        isStuck && styles.isStuck,
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
        </Link>
        <span className={styles.divider}>|</span>
        <Link activeClassName={styles.isActive} className={styles.link} to={Routes.Schedule}>
          <span>Schedule</span>
        </Link>
        <span className={styles.divider}>|</span>
        <Link activeClassName={styles.isActive} className={styles.link} to={Routes.Accommodations}>
          <span>Travel &amp; Hotel</span>
        </Link>
        <span className={styles.divider}>|</span>
        <Link activeClassName={styles.isActive} className={styles.link} to={Routes.Registry}>
          <span>Registry</span>
        </Link>
        <span className={styles.divider}>|</span>
        <OutboundLink className={styles.link} href={Routes.RsvpExternal} target="_blank">
          <span>RSVP</span>
        </OutboundLink>
      </nav>
    </header>
  );
};

export default Header;
