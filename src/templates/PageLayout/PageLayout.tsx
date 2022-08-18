/**
 * PageLayout component that queries for data with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import clsx from 'clsx';
import React, { useCallback, useEffect, useState } from 'react';
import resolveConfig from 'tailwindcss/resolveConfig';

import tailwindConfig from '../../../tailwind.config.js';
import * as globalStyles from '../../assets/styles/global.module.css';
import { Divider, Footer, Header, HeroImage, SEO } from '../../components';
import { ThemeColor } from '../../types';

const resolvedTailwindConfig = resolveConfig(tailwindConfig);

interface PageLayoutProps {
  className?: string;
  heroImageClassName?: string;
  heroImage?: React.ReactNode;
  seoTitle?: string;
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
  subtitle,
  theme = ThemeColor.Dark,
  title,
}) => {
  const isDark = theme === ThemeColor.Dark;
  const isLight = theme === ThemeColor.Light;

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

  return (
    <>
      <SEO bodyAttributes={{ class: isNavOpen && 'overflow-hidden md:overflow-visible' }} title={seoTitle ?? title} />

      <HeroImage
        className={clsx(isNavOpen && 'overflow-y-auto', heroImageClassName)}
        contentClassName={clsx({ 'bg-darkPrimary': isDark && !heroImage, 'bg-lightPrimary': isLight && !heroImage })}
        image={heroImage}
      >
        <div className="flex flex-col items-stretch justify-between min-h-0">
          <Header
            isNavOpen={isNavOpen}
            onClickNavToggle={onClickNavToggle}
            theme={isDark ? ThemeColor.Light : ThemeColor.Dark}
          />
          <div className={clsx('flex-col items-center', isNavOpen ? 'hidden md:flex' : 'flex')}>
            {subtitle && (
              <>
                <p className={clsx('text-center text-lightPrimary', globalStyles.textHeading)}>{subtitle}</p>
                <Divider color={ThemeColor.Light} />
              </>
            )}
            <h1 className="text-h3 md:text-h1 text-center text-lightPrimary font-normal font-stylized">{title}</h1>
          </div>
        </div>
      </HeroImage>

      <main className={className}>{children}</main>

      <Footer />
    </>
  );
};

export default PageLayout;
