import { Link } from 'gatsby';
import * as React from 'react';

import { Routes } from '../types/routes';

interface HeaderProps {
  siteTitle: string;
}

const Header: React.FC<HeaderProps> = ({ siteTitle }) => (
  <header>
    <h1>
      <Link to={Routes.Index}>{siteTitle}</Link>
    </h1>
    <nav>
      <ul>
        <li>
          <Link to={Routes.OurStory}>Our Story</Link>
        </li>
        <li>
          <Link to={Routes.Accommodations}>Accommodations</Link>
        </li>
        <li>
          <Link to={Routes.Rsvp}>RSVP</Link>
        </li>
        <li>
          <Link to={Routes.Registry}>Registry</Link>
        </li>
      </ul>
    </nav>
  </header>
);

export default Header;
