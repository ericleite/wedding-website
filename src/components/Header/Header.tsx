import clsx from 'clsx';
import { Link } from 'gatsby';
import React from 'react';

import { Routes } from '../../types/routes';
import * as styles from './Header.module.css';

interface HeaderProps {
  className?: string;
}

const Header: React.FC<HeaderProps> = ({ className }) => {
  // const [isFloating, setIsFloating] = useState(() => window.scrollY > 0);

  // useEffect(() => {
  //   function updateScrollState() {
  //     window.requestAnimationFrame(() => {
  //       setIsFloating(window.scrollY > 0);
  //     });
  //   }
  //   updateScrollState();
  //   window.addEventListener('scroll', updateScrollState);

  //   return () => {
  //     window.removeEventListener('scroll', updateScrollState);
  //   };
  // }, []);

  return (
    <header className={clsx(className, 'flex flex-col items-center transition-colors')}>
      <h3>
        <Link className="flex items-center" to={Routes.Index}>
          <span className="font-serif text-lightPrimary">E</span>
          <span className="font-serif text-lightSecondary text-h5 px-6">&amp;</span>
          <span className="font-serif text-lightPrimary">L</span>
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
