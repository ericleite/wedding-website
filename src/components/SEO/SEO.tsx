/**
 * SEO component that queries for data with Gatsby's useStaticQuery React hook
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import { graphql, useStaticQuery } from 'gatsby';
import React, { PropsWithChildren } from 'react';

import { SiteData } from '../../types';

type Meta = Array<JSX.IntrinsicElements['meta']>;

interface SEOProps {
  description?: string;
  lang?: string;
  meta?: Array<JSX.IntrinsicElements['meta']>;
  title?: string;
}

const DEFAULT_META: Meta = [];

const SEO: React.FC<PropsWithChildren<SEOProps>> = ({ children, description = '', meta = DEFAULT_META, title }) => {
  const { site }: SiteData = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            description
            author
          }
        }
      }
    `,
  );

  const metaDescription = description || site.siteMetadata.description;
  const metaTitle = title ? `${site.siteMetadata.title} | ${title}` : site.siteMetadata.title;
  const defaultMeta: Meta = [
    {
      content: metaDescription,
      name: `description`,
    },
    {
      content: metaTitle,
      property: `og:title`,
    },
    {
      content: metaDescription,
      property: `og:description`,
    },
    {
      content: `website`,
      property: `og:type`,
    },
    {
      content: `summary`,
      name: `twitter:card`,
    },
    {
      content: site.siteMetadata.author,
      name: `twitter:creator`,
    },
    {
      content: metaTitle,
      name: `twitter:title`,
    },
    {
      content: metaDescription,
      name: `twitter:description`,
    },
  ];

  return (
    <>
      <title>{metaTitle}</title>
      {defaultMeta.concat(meta).map((metaProps) => (
        <meta key={metaProps.name} {...metaProps} />
      ))}
      {children}
    </>
  );
};

export default SEO;
