import 'dotenv/config';

import type { GatsbyConfig } from 'gatsby';

const shouldAnalyzeBundle = process.env.ANALYZE_BUNDLE;

const config: GatsbyConfig = {
  plugins: [
    'gatsby-plugin-postcss',
    'gatsby-plugin-image',
    'gatsby-plugin-mdx',
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-sitemap',
    'gatsby-transformer-sharp',
    `gatsby-plugin-gatsby-cloud`,
    {
      options: {
        enableListener: true,
        mode: 'render-blocking',
        preconnect: [`https://fonts.gstatic.com`],
        web: [
          {
            file: `https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,600;1,600&display=swap`,
            name: `Playfair Display`,
          },
          {
            file: `https://fonts.googleapis.com/css2?family=Great+Vibes&display=swap`,
            name: `Great Vibes`,
          },
          {
            file: `https://fonts.googleapis.com/css2?family=Montserrat:wght@400;700&display=swap`,
            name: `Montserrat`,
          },
        ],
      },
      resolve: `gatsby-omni-font-loader`,
    },
    {
      options: {
        icon: 'static/favicon.svg',
        theme_color: `#540B0E`,
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
    shouldAnalyzeBundle && {
      options: {
        analyzerMode: `static`,
        openAnalyzer: false,
        reportFilename: `_bundle.html`,
      },
      resolve: `gatsby-plugin-webpack-bundle-analyser-v2`,
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
    description: `We joyfully request your company as we state our vows and join in marriage in the presence of family and friends.`,
    siteUrl: `https://ericandlauren.love`,
    title: `Eric & Lauren`,
  },
};

export default config;
