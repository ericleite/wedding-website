import { graphql, PageProps } from 'gatsby';
import { StaticImage } from 'gatsby-plugin-image';
import * as React from 'react';

import Seo from '../components/seo';
import Layout from '../templates/layout';
import { SiteData } from '../types/data';

const Index: React.FC<PageProps<SiteData>> = ({ data }) => (
  <Layout>
    <Seo />
    <StaticImage
      alt="Eric and Lauren at the beach"
      breakpoints={[1080, 1366, 1920, 2560, 3440]}
      loading="eager"
      quality={100}
      src="../assets/images/P1199322.jpg"
    />
  </Layout>
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
