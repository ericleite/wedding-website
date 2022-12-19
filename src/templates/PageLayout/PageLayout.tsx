/**
 * PageLayout component that queries for data with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import clsx from 'clsx';
import { Link } from 'gatsby';
import React, { useCallback, useEffect, useState } from 'react';
import resolveConfig from 'tailwindcss/resolveConfig';

import tailwindConfig from '../../../tailwind.config.js';
import * as globalStyles from '../../assets/styles/global.module.css';
import { Divider, Footer, Header, HeroImage, NavToggle, ScrollIcon, SEO } from '../../components';
import { ThemeColor } from '../../types';
import { Routes } from '../../types/routes';

const resolvedTailwindConfig = resolveConfig(tailwindConfig);

interface PageLayoutProps {
  className?: string;
  heroImageClassName?: string;
  heroImage?: React.ReactNode;
  seoTitle?: string;
  showRsvp?: boolean;
  subtitle?: string;
  theme?: ThemeColor;
  title: string;
}

const PageLayout: React.FC<React.PropsWithChildren<PageLayoutProps>> = ({
  children,
  className,
  heroImageClassName,
  heroImage,
  seoTitle,
  showRsvp = true,
  subtitle,
  theme = ThemeColor.Light,
  title,
}) => {
  const isDark = theme === ThemeColor.Dark;
  const isLight = theme === ThemeColor.Light;
  const complementaryTheme = isDark ? ThemeColor.Light : ThemeColor.Dark;

  const [isNavOpen, setIsNavOpen] = useState(false);

  const onClickNavToggle = useCallback(() => {
    setIsNavOpen((prevIsNavOpen) => !prevIsNavOpen);
  }, []);

  useEffect(() => {
    function handleMatchMedia() {
      if (isNavOpen) {
        setIsNavOpen(false);
      }
    }
    const navOpenMediaQueryList = matchMedia(`(min-width: ${resolvedTailwindConfig.theme.screens.md})`);
    navOpenMediaQueryList.addEventListener('change', handleMatchMedia);
    return () => {
      navOpenMediaQueryList.removeEventListener('change', handleMatchMedia);
    };
  }, [isNavOpen]);

  const monogram = (
    <div className="absolute w-full top-13 flex justify-center">
      <h4 className="text-h4 leading-none">
        <Link
          className={clsx(
            'border-none flex items-center font-serif transition-colors',
            isDark && !isNavOpen && 'text-darkTertiary hover:text-darkPrimary',
            isLight && !isNavOpen && 'text-lightSecondary hover:text-lightPrimary',
            isNavOpen && 'text-lightTertiary hover:text-darkTertiary',
          )}
          onClick={() => {
            setIsNavOpen(false);
          }}
          to={Routes.Index}
        >
          <span>E</span>
          <span className="text-h6 px-7">&amp;</span>
          <span>L</span>
        </Link>
      </h4>
    </div>
  );

  const content = (
    <div className="relative">
      <div className="relative top-1/3 -translate-y-1/2 flex flex-col items-center">
        {subtitle && (
          <>
            <p
              className={clsx(
                'text-center',
                globalStyles.textHeading,
                isDark && 'text-darkPrimary',
                isLight && 'text-lightPrimary',
              )}
            >
              {subtitle}
            </p>
            <Divider color={isLight ? ThemeColor.ExtraLight : ThemeColor.Dark} />
          </>
        )}
        <h1
          className={clsx(
            'text-h3 sm:text-h2 md:text-h1 text-center font-normal font-stylized',
            isDark && 'text-darkPrimary',
            isLight && 'text-lightPrimary',
          )}
        >
          {title}
        </h1>
      </div>
      <div className="absolute bottom-11 flex justify-center w-full">
        <ScrollIcon
          onClick={() => {
            window.scrollBy({ behavior: 'smooth', top: window.innerHeight });
          }}
          theme={theme}
        />
      </div>
    </div>
  );

  return (
    <>
      <SEO bodyAttributes={{ class: isNavOpen && 'overflow-hidden md:overflow-visible' }} title={seoTitle ?? title} />
      <HeroImage
        className={clsx('relative', isNavOpen && 'overflow-y-auto', heroImageClassName)}
        content={content}
        contentClassName={clsx({ 'bg-darkPrimary': isDark && !heroImage, 'bg-lightPrimary': isLight && !heroImage })}
        image={heroImage}
        theme={theme}
      >
        <Header
          className={clsx(
            'absolute inset-0 md:static md:inset-auto',
            !isNavOpen && 'pointer-events-none md:pointer-events-auto',
          )}
          isNavOpen={isNavOpen}
          theme={complementaryTheme}
        />
        {monogram}
        <NavToggle className="absolute top-14 left-13" isNavOpen={isNavOpen} onClick={onClickNavToggle} theme={theme} />
      </HeroImage>
      <main className={className}>{children}</main>
      <Footer showRsvp={showRsvp} />
    </>
  );
};

export default PageLayout;
