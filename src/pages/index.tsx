import { PageProps } from 'gatsby';
import { StaticImage } from 'gatsby-plugin-image';
import React from 'react';

import MountainOutlineSVG from '../assets/images/accents/mountain-outline.inline.svg';
import * as globalStyles from '../assets/styles/global.module.css';
import { PageLayout, SectionContainer } from '../templates';
import { SiteData, Theme } from '../types';

const Index: React.FC<PageProps<SiteData>> = ({ data }) => (
  <PageLayout
    heroImage={
      <StaticImage
        alt="Eric and Lauren with rock background"
        breakpoints={[428, 768, 1024, 1366, 1920, 2560, 3840]}
        className={globalStyles.heroImage}
        layout="fullWidth"
        loading="eager"
        placeholder="dominantColor"
        quality={80}
        src="../assets/images/heros/eric-and-lauren-in-cave.jpg"
      />
    }
    heroImageClassName={globalStyles.heroImageContainer}
    subtitle="The Wedding Celebration of"
    title="Eric &amp; Lauren"
  >
    <SectionContainer className="place-items-center">
      <section className="col-start-1 col-end-5">
        <StaticImage
          alt="Watercolor drawing of decorative flowers"
          placeholder="tracedSVG"
          quality={80}
          src="../assets/images/accents/flowers-with-birds-of-paradise.jpeg"
          width={378}
        />
      </section>
      <section className="col-start-5 col-end-9 flex flex-col items-center">
        <h3 className="text-center">Join the celebration</h3>
        <hr className="h-6 w-14 bg-darkTertiary mt-12 mb-13" />
        <p className="text-center">
          Eric Leite and Lauren Dubose are getting married on shores of the Dubose family residence, which sits at the
          base of the beautiful San Jacinto mountains.
        </p>
        <p className="text-center">They are elated to have your company as they say &#8220;I do&#8221; on</p>
        <p className="font-bold uppercase tracking-widest leading-none">Saturday, March 4, 2023</p>
      </section>
      <section className="col-start-9 col-end-13">
        <StaticImage
          alt="Watercolor drawing of decorative flowers"
          placeholder="tracedSVG"
          quality={80}
          src="../assets/images/accents/flowers-with-birds-of-paradise.jpeg"
          style={{ transform: 'scaleX(-1)' }}
          width={378}
        />
      </section>
    </SectionContainer>
    <SectionContainer className="relative" theme={Theme.Dark}>
      <MountainOutlineSVG className="absolute bottom-0 w-full text-darkSecondary" />
      <section className="z-10 col-start-6 col-end-13">
        <h2 className="text-h1 text-lightPrimary my-18">
          Palm
          <br />
          Springs,
          <br />
          CA
        </h2>
      </section>
    </SectionContainer>
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
