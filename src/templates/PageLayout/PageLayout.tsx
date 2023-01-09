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
import {
  AnimatedDivider,
  AnimatedText,
  AnimationType,
  Footer,
  Header,
  HeroImage,
  NavToggle,
  ScrollIcon,
} from '../../components';
import { InternalRoute, ThemeColor } from '../../types';

const resolvedTailwindConfig = resolveConfig(tailwindConfig);

interface PageLayoutProps {
  className?: string;
  heroImageClassName?: string;
  heroImageLoaded: boolean;
  heroImage?: React.ReactNode;
  showRsvp?: boolean;
  subtitle?: string;
  theme?: ThemeColor;
  title: string;
}

const PageLayout: React.FC<React.PropsWithChildren<PageLayoutProps>> = ({
  children,
  className,
  heroImage,
  heroImageClassName,
  heroImageLoaded,
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
    if (isNavOpen) {
      document.body.classList.add('overflow-hidden');
      document.body.classList.add('lg:overflow-visible');
    } else {
      document.body.classList.remove('overflow-hidden');
      document.body.classList.remove('lg:overflow-visible');
    }

    function closeNav() {
      if (isNavOpen) {
        setIsNavOpen(false);
      }
    }
    const closeBreakpoint = resolvedTailwindConfig?.theme?.screens?.lg;
    const navOpenMediaQueryList = matchMedia(`(min-width: ${closeBreakpoint})`);
    navOpenMediaQueryList.addEventListener('change', closeNav);
    return () => {
      navOpenMediaQueryList.removeEventListener('change', closeNav);
    };
  }, [isNavOpen]);

  const monogram = (
    <div className="absolute w-full top-[12.5%] -translate-y-1/2 flex justify-center">
      <h4 className="text-h4 leading-none">
        <AnimatedText animationType={AnimationType.FadeIn} delay={1400} hasTriggered={heroImageLoaded}>
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
            to={InternalRoute.Home}
          >
            <span>E</span>
            <span className="text-h6 px-7">&amp;</span>
            <span>L</span>
          </Link>
        </AnimatedText>
      </h4>
    </div>
  );

  const content = (
    <div className="relative">
      <div className="relative top-1/4 flex flex-col items-center">
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
              <AnimatedText delay={500} hasTriggered={heroImageLoaded}>
                {subtitle}
              </AnimatedText>
            </p>
            <AnimatedDivider
              color={isLight ? ThemeColor.ExtraLight : ThemeColor.Dark}
              delay={700}
              hasTriggered={heroImageLoaded}
            />
          </>
        )}
        <h1
          className={clsx(
            'text-h3 sm:text-h2 md:text-h1 text-center font-normal font-stylized',
            isDark && 'text-darkPrimary',
            isLight && 'text-lightPrimary',
          )}
        >
          <AnimatedText delay={subtitle ? 700 : 500} duration={1000} hasTriggered={heroImageLoaded}>
            {title}
          </AnimatedText>
        </h1>
      </div>
      <div className="absolute bottom-10 flex justify-center w-full md:bottom-11">
        <ScrollIcon
          onClick={() => {
            window.scroll({ behavior: 'smooth', top: window.innerHeight });
          }}
          theme={theme}
        />
      </div>
    </div>
  );

  return (
    <>
      <HeroImage
        className={clsx('relative', isNavOpen && 'overflow-y-auto', heroImageClassName)}
        content={content}
        contentClassName={clsx({ 'bg-darkPrimary': isDark && !heroImage, 'bg-lightPrimary': isLight && !heroImage })}
        image={heroImage}
        imageLoaded={heroImageLoaded}
        theme={theme}
      >
        <Header
          className={clsx('flex-shrink-0', !isNavOpen && 'pointer-events-none')}
          isNavOpen={isNavOpen}
          theme={complementaryTheme}
        />
        {monogram}
        <NavToggle
          className="absolute top-13 right-13"
          isNavOpen={isNavOpen}
          onClick={onClickNavToggle}
          theme={theme}
        />
      </HeroImage>
      <main className={className}>{children}</main>
      <Footer showRsvp={showRsvp} />
    </>
  );
};

export default PageLayout;
