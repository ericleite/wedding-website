/**
 * PageLayout component that queries for data with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import clsx from 'clsx';
import React from 'react';

import { Footer, Header, HeroImage, SEO } from '../../components';
import { Theme } from '../../types';

interface PageLayoutProps {
  heroImageClassName?: string;
  heroImage?: React.ReactNode;
  subtitle?: string;
  theme?: Theme;
  title: string;
}

const PageLayout: React.FC<React.PropsWithChildren<PageLayoutProps>> = ({
  children,
  heroImageClassName,
  heroImage,
  subtitle,
  theme = Theme.Dark,
  title,
}) => {
  const isDark = theme === Theme.Dark;
  const isLight = theme === Theme.Light;

  return (
    <>
      <SEO title={title} />
      <HeroImage
        className={heroImageClassName}
        contentClassName={clsx({ 'bg-darkPrimary': isDark && !heroImage, 'bg-lightPrimary': isLight && !heroImage })}
        image={heroImage}
      >
        <div className="flex flex-col items-center justify-between border border-lightPrimary border-solid p-13">
          <Header theme={isDark ? Theme.Light : Theme.Dark} />
          <div className="flex flex-col items-center">
            {subtitle && (
              <>
                <p className="text-lightPrimary uppercase tracking-widest leading-none">{subtitle}</p>
                <hr className="h-6 w-14 bg-lightSecondary mt-12 mb-13" />
              </>
            )}
            <h1 className="text-lightPrimary font-normal font-stylized leading-none mb-0">{title}</h1>
          </div>
        </div>
      </HeroImage>
      <main>{children}</main>
      <Footer />
    </>
  );
};

export default PageLayout;
