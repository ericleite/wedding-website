/**
 * SEO component that queries for data with Gatsby's useStaticQuery React hook
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import { graphql, useStaticQuery } from 'gatsby';
import * as React from 'react';
import { Helmet } from 'react-helmet';

import { SiteData } from '../types/data';

interface SeoProps {
  description?: string;
  lang?: string;
  meta?: Array<JSX.IntrinsicElements['meta']>;
  title?: string;
}

const Seo: React.FC<SeoProps> = ({ description = '', lang = 'en', meta = [], title }) => {
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
  const metaTitle = title || site.siteMetadata.title;
  const defaultMeta = [
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
      content: title,
      name: `twitter:title`,
    },
    {
      content: metaDescription,
      name: `twitter:description`,
    },
  ] as Array<JSX.IntrinsicElements['meta']>;

  return (
    <Helmet
      htmlAttributes={{
        lang,
      }}
      meta={defaultMeta.concat(meta)}
      title={metaTitle}
      titleTemplate={title ? `${site.siteMetadata.title} | %s` : undefined}
    />
  );
};

export default Seo;
