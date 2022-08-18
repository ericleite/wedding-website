/**
 * PageLayout component that queries for data with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import { graphql, useStaticQuery } from 'gatsby';
import React from 'react';

import { Footer, Header } from '../../components';
import { SiteData } from '../../types';

interface PageLayoutProps {}

const PageLayout: React.FC<React.PropsWithChildren<PageLayoutProps>> = ({ children }) => {
  const { site }: SiteData = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);

  return (
    <>
      <Header siteTitle={site.siteMetadata.title} />
      <main>{children}</main>
      <Footer />
    </>
  );
};

export default PageLayout;
