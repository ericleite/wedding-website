import 'dotenv/config';

import type { GatsbyConfig } from 'gatsby';

const config: GatsbyConfig = {
  plugins: [
    'gatsby-plugin-postcss',
    'gatsby-plugin-image',
    'gatsby-plugin-sitemap',
    'gatsby-transformer-sharp',
    `gatsby-plugin-gatsby-cloud`,
    {
      options: {
        icon: 'static/favicon.svg',
        theme_color: `#667F8C`,
      },
      resolve: 'gatsby-plugin-manifest',
    },
    {
      options: {
        defaults: {
          quality: 60,
        },
      },
      resolve: `gatsby-plugin-sharp`,
    },
    {
      options: {
        name: 'images',
        path: './src/assets/images/',
      },
      resolve: 'gatsby-source-filesystem',
    },
    {
      options: {
        name: 'pages',
        path: './src/pages/',
      },
      resolve: 'gatsby-source-filesystem',
    },
    {
      options: {
        rule: {
          include: /\.inline\.svg$/,
        },
      },
      resolve: 'gatsby-plugin-react-svg',
    },
    {
      options: {
        trackingIds: [process.env.GTAG_ID].filter(Boolean),
      },
      resolve: `gatsby-plugin-google-gtag`,
    },
  ].filter(Boolean) as GatsbyConfig['plugins'],
  siteMetadata: {
    author: `@ericleite`,
    description: `Join the celebration as Eric Leite and Lauren Dubose say “I do” in stylish Palm Springs, California.`,
    siteUrl: `https://ericandlauren.love`,
    title: `Eric & Lauren`,
  },
};

export default config;
