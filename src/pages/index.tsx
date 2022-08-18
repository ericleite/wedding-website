import { PageProps } from 'gatsby';
import { StaticImage } from 'gatsby-plugin-image';
import React from 'react';

import MountainOutline from '../assets/images/accents/mountain-outline.inline.svg';
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
    <SectionContainer>
      <section className="col-start-1 col-end-5 border border-darkPrimary border-solid p-13">
        <p className="text-darkPrimary uppercase tracking-widest leading-none">
          Join the celebration as Eric Leite and Lauren Dubose say &ldquo;I do&rdquo; on the shores of the Dubose
          residence in Palm Springs, California.
        </p>
      </section>
      <section className="col-start-5 col-end-9">[Insert graphic here]</section>
      <section className="col-start-9 col-end-13 flex flex-col items-center justify-between border border-darkPrimary border-solid p-13">
        <p className="text-darkPrimary uppercase tracking-widest leading-none">The Date</p>
        <hr className="h-6 w-14 bg-darkTertiary mt-12 mb-13" />
        <h3>
          Saturday
          <br />
          March 4th
          <br />
          2023
        </h3>
      </section>
    </SectionContainer>
    <SectionContainer className="relative" theme={Theme.Dark}>
      <MountainOutline className="absolute bottom-0 w-full text-darkSecondary" />
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
