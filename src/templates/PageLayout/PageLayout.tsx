/**
 * PageLayout component that queries for data with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import clsx from 'clsx';
import React from 'react';

import * as globalStyles from '../../assets/styles/global.module.css';
import { Divider, Footer, Header, HeroImage, SEO } from '../../components';
import { ThemeColor } from '../../types';

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

  return (
    <>
      <SEO title={seoTitle ?? title} />

      <HeroImage
        className={heroImageClassName}
        contentClassName={clsx({ 'bg-darkPrimary': isDark && !heroImage, 'bg-lightPrimary': isLight && !heroImage })}
        image={heroImage}
      >
        <div className="flex flex-col items-center justify-between">
          <Header className="w-full" theme={isDark ? ThemeColor.Light : ThemeColor.Dark} />
          <div className="flex flex-col items-center">
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
