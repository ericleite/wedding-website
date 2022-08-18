/**
 * PageLayout component that queries for data with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import React from 'react';

import { Footer, Header, HeroImage, SEO } from '../../components';

interface PageLayoutProps {
  heroImageClassName?: string;
  heroImage: React.ReactNode;
  subtitle?: string;
  title: string;
}

const PageLayout: React.FC<React.PropsWithChildren<PageLayoutProps>> = ({
  children,
  heroImageClassName,
  heroImage,
  subtitle,
  title,
}) => {
  return (
    <>
      <SEO />
      <HeroImage className={heroImageClassName} image={heroImage}>
        <div className="flex flex-col items-center justify-between border border-lightPrimary border-solid p-9">
          <Header />
          <div className="flex flex-col items-center">
            {subtitle && (
              <>
                <p className="text-lightPrimary uppercase tracking-widest leading-none">{subtitle}</p>
                <hr className="h-px w-10 bg-lightSecondary mt-8 mb-9" />
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
