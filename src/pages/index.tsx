import { PageProps } from 'gatsby';
import { StaticImage } from 'gatsby-plugin-image';
import React from 'react';

import { PageLayout } from '../templates';
import { SiteData } from '../types';
import * as styles from './index.module.css';

const Index: React.FC<PageProps<SiteData>> = ({ data }) => (
  <PageLayout
    heroImage={
      <StaticImage
        alt="Eric and Lauren with rock background"
        breakpoints={[428, 768, 1024, 1366, 1920, 2560, 3840]}
        className={styles.heroImage}
        layout="fullWidth"
        loading="eager"
        placeholder="dominantColor"
        quality={80}
        src="../assets/images/P1188863-2.jpg"
      />
    }
    heroImageClassName={styles.heroImageContainer}
    subtitle="The Wedding Celebration of"
    title="Eric &amp; Lauren"
  >
    <p>content</p>
  </PageLayout>
);

export default Index;

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
