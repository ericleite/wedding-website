import clsx from 'clsx';
import { PageProps } from 'gatsby';
import { StaticImage } from 'gatsby-plugin-image';
import React from 'react';

import MountainOutlineSVG from '../assets/images/accents/mountain-outline.inline.svg';
import VerticalFloralSVG from '../assets/images/accents/vertical-floral-with-blooms.inline.svg';
import * as globalStyles from '../assets/styles/global.module.css';
import { ButtonLink, Divider } from '../components';
import { PageLayout, SectionContainer } from '../templates';
import { Routes, SiteData, ThemeColor, ThemeSize } from '../types';
import * as styles from './index.module.css';

const Index: React.FC<PageProps<SiteData>> = () => (
  <PageLayout
    className="space-y-15 mt-15"
    heroImage={
      <StaticImage
        alt="Eric and Lauren between two Joshua Trees"
        breakpoints={[1920, 2560, 3840]}
        className={globalStyles.heroImage}
        layout="fullWidth"
        loading="eager"
        placeholder="tracedSVG"
        quality={80}
        src="../assets/images/heros/eric-and-lauren-between-joshua-trees.jpg"
      />
    }
    heroImageClassName={styles.heroImageContainer}
    seoTitle="Our Wedding"
    showRsvp={false}
    subtitle="The Wedding of"
    title="Eric &amp; Lauren"
  >
    <SectionContainer className="place-items-center max-w-prose 2xl:max-w-none">
      <section className="hidden 2xl:block col-start-2 col-end-5 relative">
        <VerticalFloralSVG className="text-maroonTertiary w-3/4 m-auto -scale-x-100" />
        <div className="absolute top-0 bottom-0 left-0 right-0 bg-gradient-to-b from-transparent to-white opacity-75" />
      </section>
      <section className="col-span-full flex flex-col items-center space-y-13 2xl:space-y-15 2xl:col-start-5 2xl:col-end-9">
        <div className="flex flex-col items-center">
          <h3 className="text-center">
            Join <span className="lowercase">the</span> Celebration
          </h3>
          <Divider color={ThemeColor.Light} />
          <p className="text-center">
            Eric Leite and Lauren Dubose are getting married on the water&#39;s edge of the Dubose family residence,
            which sits at the base of the beautiful San Jacinto mountains near Palm Springs, California.
          </p>
        </div>
        <div className="sm:grid sm:grid-cols-2 w-full space-y-13 sm:space-y-0">
          <div className="flex flex-col items-center">
            <p className={clsx(globalStyles.textHeading, 'text-darkTertiary')}>When</p>
            <Divider color={ThemeColor.Light} size={ThemeSize.Sm} spacing={ThemeSize.Sm} />
            <h5 className="text-center">
              Saturday
              <br />
              March 4, 2023
              <br />
              4:30 PM
            </h5>
          </div>
          <div className="flex flex-col items-center">
            <p className={clsx(globalStyles.textHeading, 'text-darkTertiary')}>Where</p>
            <Divider color={ThemeColor.Light} size={ThemeSize.Sm} spacing={ThemeSize.Sm} />
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
            <ButtonLink href={Routes.RsvpExternal} outbound>
              RSVP
            </ButtonLink>
          </p>
        </div>
      </section>
      <section className="hidden 2xl:block col-start-9 col-end-12 relative">
        <VerticalFloralSVG className="text-maroonTertiary w-3/4 m-auto" />
        <div className="absolute top-0 bottom-0 left-0 right-0 bg-gradient-to-b from-transparent to-white opacity-75" />
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
