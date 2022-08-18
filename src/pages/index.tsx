import { PageProps } from 'gatsby';
import { OutboundLink } from 'gatsby-plugin-google-gtag';
import { StaticImage } from 'gatsby-plugin-image';
import React from 'react';

import MountainOutlineSVG from '../assets/images/accents/mountain-outline.inline.svg';
import * as globalStyles from '../assets/styles/global.module.css';
import { Button, Divider } from '../components';
import { PageLayout, SectionContainer } from '../templates';
import { Routes, SiteData, ThemeColor, ThemeSize } from '../types';
import * as styles from './accommodations.module.css';

const Index: React.FC<PageProps<SiteData>> = ({ data }) => (
  <PageLayout
    className="space-y-15 mt-15"
    heroImage={
      <StaticImage
        alt="Eric and Lauren with rock background"
        breakpoints={[1920, 2560, 3840]}
        className={globalStyles.heroImage}
        layout="fullWidth"
        loading="eager"
        placeholder="dominantColor"
        quality={80}
        src="../assets/images/heros/eric-and-lauren-in-cave.jpg"
      />
    }
    heroImageClassName={styles.heroImageContainer}
    seoTitle=""
    showRsvp={false}
    subtitle="The Wedding of"
    title="Eric &amp; Lauren"
  >
    <SectionContainer className="place-items-center max-w-prose 2xl:max-w-none">
      <section className="hidden 2xl:block col-start-2 col-end-5">
        <StaticImage
          alt="Watercolor drawing of decorative flowers"
          placeholder="tracedSVG"
          quality={80}
          src="../assets/images/accents/flowers-with-birds-of-paradise.jpeg"
          style={{ transform: 'scaleX(-1)' }}
          width={512}
        />
      </section>
      <section className="col-span-full flex flex-col items-center space-y-13 2xl:space-y-15 2xl:col-start-5 2xl:col-end-9">
        <div className="flex flex-col items-center">
          <h3 className="text-center">
            Join <span className="lowercase">the</span> Celebration
          </h3>
          <Divider />
          <p className="text-center">
            Eric Leite and Lauren Dubose are getting married on the water&#39;s edge of the Dubose family residence,
            which sits at the base of the beautiful San Jacinto mountains near Palm Springs, California.
          </p>
        </div>
        <div className="md:grid md:grid-cols-2 w-full space-y-13 md:space-y-0">
          <div className="flex flex-col items-center">
            <p className={globalStyles.textHeading}>When</p>
            <Divider size={ThemeSize.Sm} spacing={ThemeSize.Sm} />
            <h5 className="text-center">
              Saturday
              <br />
              March 4, 2023
              <br />
              4:30 PM
            </h5>
          </div>
          <div className="flex flex-col items-center">
            <p className={globalStyles.textHeading}>Where</p>
            <Divider size={ThemeSize.Sm} spacing={ThemeSize.Sm} />
            <h5 className="text-center">
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
            <OutboundLink className="border-none inline-block" href={Routes.RsvpExternal} target="_blank">
              <Button>RSVP</Button>
            </OutboundLink>
          </p>
        </div>
      </section>
      <section className="hidden 2xl:block col-start-9 col-end-12">
        <StaticImage
          alt="Watercolor drawing of decorative flowers"
          placeholder="tracedSVG"
          quality={80}
          src="../assets/images/accents/flowers-with-birds-of-paradise.jpeg"
          width={512}
        />
      </section>
    </SectionContainer>
    <SectionContainer className="relative overflow-hidden p-15" theme={ThemeColor.Dark}>
      <MountainOutlineSVG className="absolute bottom-0 w-full text-darkSecondary" />
      <section className="z-10 col-span-full">
        <h2 className="text-center text-lightPrimary md:text-h1 md:my-15">
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
