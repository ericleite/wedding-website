/**
 * Layout component that queries for data with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import { graphql, useStaticQuery } from 'gatsby';
import * as React from 'react';

import Footer from '../components/footer';
import Header from '../components/header';
import { SiteData } from '../types/data';

interface LayoutProps {}

const Layout: React.FC<React.PropsWithChildren<LayoutProps>> = ({ children }) => {
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
      <div>
        <main>{children}</main>
        <Footer />
      </div>
    </>
  );
};

export default Layout;
