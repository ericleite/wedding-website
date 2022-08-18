import clsx from 'clsx';
import { Link } from 'gatsby';
import React from 'react';

import { Routes } from '../../types/routes';
import * as styles from './Header.module.css';

interface HeaderProps {
  className?: string;
}

const Header: React.FC<HeaderProps> = ({ className }) => {
  return (
    <header className={clsx(className, 'flex flex-col items-center')}>
      <h3>
        <Link
          className="flex items-center font-serif text-lightSecondary hover:text-lightPrimary transition-colors"
          to={Routes.Index}
        >
          <span>E</span>
          <span className="text-h5 px-4">&amp;</span>
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
