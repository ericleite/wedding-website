import { PageProps } from 'gatsby';
import { OutboundLink } from 'gatsby-plugin-google-gtag';
import { StaticImage } from 'gatsby-plugin-image';
import React from 'react';

import MountainOutlineSVG from '../assets/images/accents/mountain-outline.inline.svg';
import * as globalStyles from '../assets/styles/global.module.css';
import { Button } from '../components';
import { PageLayout, SectionContainer } from '../templates';
import { Routes, SiteData, Theme } from '../types';
import * as indexStyles from './index.module.css';

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
    heroImageClassName={indexStyles.heroImageContainer}
    subtitle="The Wedding Celebration of"
    title="Eric &amp; Lauren"
  >
    <SectionContainer className="place-items-center">
      <section className="col-start-2 col-end-5">
        <StaticImage
          alt="Watercolor drawing of decorative flowers"
          placeholder="tracedSVG"
          quality={80}
          src="../assets/images/accents/flowers-with-birds-of-paradise.jpeg"
          style={{ transform: 'scaleX(-1)' }}
          width={512}
        />
      </section>
      <section className="col-start-5 col-end-9 flex flex-col items-center space-y-15">
        <div className="flex flex-col items-center">
          <h3 className="text-center">Join the celebration</h3>
          <hr className="h-6 w-14 bg-darkTertiary mb-12" />
          <p className="text-center">
            Eric Leite and Lauren Dubose are getting married on the water&#39;s edge of the Dubose family residence,
            which sits at the base of the beautiful San Jacinto mountains near Palm Springs, California.
          </p>
        </div>
        <div className="grid grid-cols-2 w-full">
          <div className="flex flex-col items-center">
            <p className="font-bold uppercase tracking-widest leading-none">When</p>
            <hr className="h-5 w-13 bg-darkTertiary mt-10 mb-11" />
            <h5 className="text-center mb-0">
              Saturday
              <br />
              March 4, 2023
              <br />
              4:30 PM
            </h5>
          </div>
          <div className="flex flex-col items-center">
            <p className="font-bold uppercase tracking-widest leading-none">Where</p>
            <hr className="h-5 w-13 bg-darkTertiary mt-10 mb-11" />
            <h5 className="text-center mb-0">
              38402 Vista Del Sol
              <br />
              Rancho Mirage
              <br />
              CA 92270
            </h5>
          </div>
        </div>
        <div className="text-center">
          <p>
            Don&#39;t forget to RSVP and leave us a song request for the dance floor too!
            <br />
            We can&#39;t wait to celebrate with you!
          </p>
          <p>
            <OutboundLink className="border-none inline-block" href={Routes.Rsvp} target="_blank">
              <Button>RSVP</Button>
            </OutboundLink>
          </p>
        </div>
      </section>
      <section className="col-start-9 col-end-12">
        <StaticImage
          alt="Watercolor drawing of decorative flowers"
          placeholder="tracedSVG"
          quality={80}
          src="../assets/images/accents/flowers-with-birds-of-paradise.jpeg"
          width={512}
        />
      </section>
    </SectionContainer>
    <SectionContainer className="relative overflow-hidden p-15" theme={Theme.Dark}>
      <MountainOutlineSVG className="absolute bottom-0 w-full text-darkSecondary" />
      <section className="z-10 col-start-6 col-end-13">
        <h2 className="text-h1 text-lightPrimary my-15">
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
