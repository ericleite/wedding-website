import clsx from 'clsx';
import { PageProps } from 'gatsby';
import { OutboundLink } from 'gatsby-plugin-google-gtag';
import { StaticImage } from 'gatsby-plugin-image';
import React, { useCallback, useRef, useState } from 'react';
import { Accordion, AccordionBody, AccordionHeader, AccordionItem } from 'react-headless-accordion';

import MountainOutlineSVG from '../assets/images/accents/mountain-outline.inline.svg';
import VerticalFloralSVG from '../assets/images/accents/vertical-floral-with-blooms.inline.svg';
import * as globalStyles from '../assets/styles/global.module.css';
import { AnimatedText, ButtonLink, ChevronDownIcon, Divider } from '../components';
import { useIntersectionObserver } from '../hooks';
import { PageLayout, SectionContainer } from '../templates';
import { Routes, SiteData, ThemeColor, ThemeSize } from '../types';
import * as styles from './index.module.css';

const FAQ = [
  {
    answer: (
      <>
        <p>
          We&#39;d love to see you there, but we understand if you can&#39;t make it. We will be providing a live stream
          of the ceremony for you to watch from anywhere.
        </p>
        <p>
          <b>
            Please{' '}
            <OutboundLink href={Routes.RsvpExternal} target="_blank">
              RSVP
            </OutboundLink>{' '}
            even if you are not planning to attend.
          </b>{' '}
          This will help us get an accurate guest count for our vendors.
        </p>
      </>
    ),
    question: <>What if I can&#39;t make it?</>,
  },
  {
    answer: (
      <p>
        We will be providing transportation shuttles for guests staying at the Westin. If you are not staying at the
        Westin, we recommend that you call an Uber or Lyft as there will be limited parking space available at the
        venue.
      </p>
    ),
    question: <>How do I get to the wedding venue?</>,
  },
  {
    answer: (
      <p>
        We will be having an &ldquo;unplugged&rdquo; ceremony so that we can relish the moment as it happens. Our
        professional photographer and videographer will capture every moment of the ceremony for you. We would be happy
        to share these photos with you upon request!
      </p>
    ),
    question: <>Can I take pictures during the ceremony?</>,
  },
  {
    answer: (
      <p>
        Please describe your dietary restriction in the RSVP form when you submit your RSVP and we will do our best to
        accommodate your request.
      </p>
    ),
    question: <>I have dietary restrictions/allergies. What&#39;s the best way to let you know?</>,
  },
];

const Index: React.FC<PageProps<SiteData>> = () => {
  const locationSectionRef = useRef<HTMLDivElement>(null);
  const [locationSectionAnimationStarted, setLocationSectionAnimationStarted] = useState(false);
  const startLocationSectionAnimations = useCallback(() => {
    document.getElementById('c-currentColor')?.beginElement();
    document.getElementById('c-transparent')?.beginElement();
    setLocationSectionAnimationStarted(true);
  }, []);
  useIntersectionObserver(locationSectionRef, startLocationSectionAnimations);

  return (
    <PageLayout
      className="space-y-15 my-15"
      heroImage={
        <StaticImage
          alt="Eric and Lauren between two Joshua Trees"
          breakpoints={[1920, 2560, 3840]}
          className={globalStyles.heroImage}
          layout="fullWidth"
          loading="eager"
          placeholder="dominantColor"
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
      <SectionContainer ref={locationSectionRef} className="relative overflow-hidden p-15" theme={ThemeColor.Dark}>
        <MountainOutlineSVG className="absolute bottom-0 w-full text-darkSecondary" />
        <section className="z-10 col-span-full">
          <h2 className="text-center text-lightPrimary md:text-h1 md:my-15">
            <AnimatedText delay={150} hasStarted={locationSectionAnimationStarted}>
              Palm
            </AnimatedText>
            <AnimatedText delay={350} hasStarted={locationSectionAnimationStarted}>
              Springs,
            </AnimatedText>
            <AnimatedText delay={550} hasStarted={locationSectionAnimationStarted}>
              CA
            </AnimatedText>
          </h2>
        </section>
      </SectionContainer>
      <SectionContainer className="place-items-center max-w-prose 2xl:max-w-none">
        <section className="col-span-full flex flex-col items-center space-y-13 2xl:space-y-15 2xl:col-start-5 2xl:col-end-9">
          <div className="flex flex-col items-center">
            <h3 className="text-center">Questions & Answers</h3>
            <Divider color={ThemeColor.Light} />
          </div>
        </section>
        <section className="col-span-full w-full text-left">
          <Accordion className="space-y-12">
            {FAQ.map(({ question, answer }, index) => (
              <AccordionItem key={index}>
                {({ open }: { open: boolean }) => (
                  <div className="flex flex-col space">
                    <AccordionHeader>
                      <h5 className="flex justify-between items-center text-left normal-case space-x-10">
                        <span>{question}</span>
                        <ChevronDownIcon
                          className={clsx('w-12 h-12 flex-shrink-0 transition-transform', open && '-rotate-180')}
                        />
                      </h5>
                    </AccordionHeader>
                    <AccordionBody className="mt-7">{answer}</AccordionBody>
                  </div>
                )}
              </AccordionItem>
            ))}
          </Accordion>
        </section>
      </SectionContainer>
    </PageLayout>
  );
};

export default Index;
