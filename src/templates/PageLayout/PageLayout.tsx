/**
 * PageLayout component that queries for data with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import React from 'react';

import { Footer } from '../../components';

interface PageLayoutProps {}

const PageLayout: React.FC<React.PropsWithChildren<PageLayoutProps>> = ({ children }) => {
  return (
    <>
      <main>{children}</main>
      <Footer />
    </>
  );
};

export default PageLayout;
