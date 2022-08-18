import { graphql, PageProps } from 'gatsby';
import { StaticImage } from 'gatsby-plugin-image';
import React from 'react';

import { SEO } from '../components';
import { DESKTOP_BREAKPOINTS } from '../constants';
import { PageLayout } from '../templates';
import { SiteData } from '../types';

const Index: React.FC<PageProps<SiteData>> = ({ data }) => (
  <PageLayout>
    <SEO />
    <StaticImage
      alt="Eric and Lauren at the beach"
      breakpoints={DESKTOP_BREAKPOINTS}
      layout="fullWidth"
      loading="eager"
      quality={90}
      src="../assets/images/P1199322.jpg"
    />
  </PageLayout>
);

export default Index;

export const query = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`;

// In case we need to fetch some API:
// export async function getServerData() {
//   try {
//     const res = await fetch(`https://dog.ceo/api/breed/shiba/images/random`);
//     if (!res.ok) {
//       throw new Error(`Response failed`);
//     }
//     return {
//       props: await res.json(),
//     };
//   } catch (error) {
//     return {
//       headers: {},
//       props: {},
//       status: 500,
//     };
//   }
// }
