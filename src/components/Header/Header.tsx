import { Link } from 'gatsby';
import React from 'react';

import { Routes } from '../../types/routes';
import * as styles from './Header.module.css';

interface HeaderProps {
  siteTitle: string;
}

const Header: React.FC<HeaderProps> = ({ siteTitle }) => (
  <header className="flex items-center justify-between">
    <h1>
      <Link to={Routes.Index}>{siteTitle}</Link>
    </h1>
    <nav className="flex">
      <Link className={styles.navLink} to={Routes.OurStory}>
        Our Story
      </Link>
      <Link className={styles.navLink} to={Routes.Accommodations}>
        Accommodations
      </Link>
      <Link className={styles.navLink} to={Routes.Rsvp}>
        RSVP
      </Link>
      <Link className={styles.navLink} to={Routes.Registry}>
        Registry
      </Link>
    </nav>
  </header>
);

export default Header;
