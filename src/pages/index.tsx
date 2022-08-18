import { PageProps } from 'gatsby';
import { StaticImage } from 'gatsby-plugin-image';
import React from 'react';

import { Header, HeroImage, SEO } from '../components';
import * as heroImageStyles from '../components/HeroImage/HeroImage.module.css';
import { PageLayout } from '../templates';
import { SiteData } from '../types';
import * as indexStyles from './index.module.css';

const Index: React.FC<PageProps<SiteData>> = ({ data }) => (
  <PageLayout>
    <SEO />
    <HeroImage
      className={indexStyles.homeImage}
      image={
        <StaticImage
          alt="Eric and Lauren at the beach"
          breakpoints={[428, 768, 1024, 1366, 1920, 2560, 3840]}
          className={heroImageStyles.heroImageArea}
          layout="fullWidth"
          loading="eager"
          placeholder="dominantColor"
          quality={90}
          src="../assets/images/P1188863-2.jpg"
        />
      }
    >
      <div className="flex flex-col items-center justify-between">
        <Header />
        <div className="p-6 border border-lightSecondary border-solid">
          <div className="flex flex-col items-center p-9 bg-lightSecondary">
            <p className="text-darkPrimary uppercase tracking-widest leading-none">The Wedding Celebration of</p>
            <hr className="h-1 w-10 bg-darkSecondary mt-8 mb-9" />
            <h1 className="text-darkPrimary font-normal font-stylized leading-none mb-0">Eric &amp; Lauren</h1>
          </div>
        </div>
      </div>
    </HeroImage>
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
