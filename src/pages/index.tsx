import clsx from 'clsx';
import { PageProps } from 'gatsby';
import { StaticImage } from 'gatsby-plugin-image';
import React, { useCallback, useRef, useState } from 'react';
import { Accordion, AccordionBody, AccordionHeader, AccordionItem } from 'react-headless-accordion';

import MountainOutlineSVG from '../assets/images/accents/mountain-outline.inline.svg';
import * as globalStyles from '../assets/styles/global.module.css';
import { AnimatedDivider, AnimatedText, ChevronDownIcon, SEO } from '../components';
import { FAQ } from '../content';
import { useAppState } from '../contexts';
import { useIntersectionObserver } from '../hooks';
import { PageLayout, SectionContainer } from '../templates';
import { InternalRoute, SiteData, ThemeColor, ThemeSize } from '../types';
import * as styles from './index.module.css';

const Index: React.FC<PageProps<SiteData>> = () => {
  const locationSectionRef = useRef<HTMLDivElement>(null);
  const [locationSectionAnimationStarted, setLocationSectionAnimationStarted] = useState(false);
  const startLocationSectionAnimations = useCallback(() => {
    document.getElementById('c-currentColor')?.beginElement();
    document.getElementById('c-transparent')?.beginElement();
    setLocationSectionAnimationStarted(true);
  }, []);
  useIntersectionObserver(locationSectionRef, startLocationSectionAnimations);

  const {
    setHeroImageLoaded,
    state: { heroImageLoaded },
  } = useAppState();
  const setHomeHeroImageLoaded = useCallback(() => {
    setHeroImageLoaded(InternalRoute.Home);
  }, [setHeroImageLoaded]);

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
          onLoad={setHomeHeroImageLoaded}
          placeholder="none"
          quality={80}
          src="../assets/images/heros/eric-and-lauren-between-joshua-trees.jpg"
        />
      }
      heroImageClassName={styles.heroImageContainer}
      heroImageLoaded={heroImageLoaded[InternalRoute.Home]}
      subtitle="The Wedding of"
      title="Eric &amp; Lauren"
    >
      <SectionContainer className="place-items-center max-w-prose">
        <section className="col-span-full flex flex-col items-center space-y-13 2xl:space-y-15">
          <div className="flex flex-col items-center">
            <h3 className="text-center">
              Join <span className="lowercase">the</span> Celebration
            </h3>
            <AnimatedDivider color={ThemeColor.Light} size={ThemeSize.Lg} />
            <p className="text-center">
              Eric Leite and Lauren Dubose are getting married on the water&#39;s edge of the Dubose family residence,
              which sits at the base of the beautiful San Jacinto mountains near Palm Springs, California.
            </p>
          </div>
          <div className="sm:grid sm:grid-cols-2 w-full space-y-13 sm:space-y-0">
            <div className="flex flex-col items-center">
              <p className={clsx(globalStyles.textHeading, 'text-darkTertiary')}>When</p>
              <AnimatedDivider color={ThemeColor.Light} size={ThemeSize.Sm} spacing={ThemeSize.Sm} />
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
              <AnimatedDivider color={ThemeColor.Light} size={ThemeSize.Sm} spacing={ThemeSize.Sm} />
              <h5 className="text-center">
                38402 Vista Del Sol
                <br />
                Rancho Mirage
                <br />
                CA 92270
              </h5>
            </div>
          </div>
        </section>
      </SectionContainer>
      <SectionContainer ref={locationSectionRef} className="relative overflow-hidden p-15" theme={ThemeColor.Dark}>
        <MountainOutlineSVG className="absolute bottom-0 w-full text-darkSecondary" />
        <section className="z-10 col-span-full">
          <h2 className="text-center text-lightPrimary md:text-h1 md:my-15">
            <AnimatedText delay={150} hasTriggered={locationSectionAnimationStarted}>
              Palm
            </AnimatedText>
            <AnimatedText delay={350} hasTriggered={locationSectionAnimationStarted}>
              Springs,
            </AnimatedText>
            <AnimatedText delay={550} hasTriggered={locationSectionAnimationStarted}>
              CA
            </AnimatedText>
          </h2>
        </section>
      </SectionContainer>
      <SectionContainer className="place-items-center max-w-prose">
        <section className="col-span-full flex flex-col items-center space-y-13 2xl:space-y-15">
          <div className="flex flex-col items-center">
            <h3 className="text-center">Questions & Answers</h3>
            <AnimatedDivider color={ThemeColor.Light} size={ThemeSize.Lg} />
          </div>
          <Accordion className="space-y-11">
            {FAQ.map(({ question, answer }, index) => (
              <AccordionItem key={index}>
                {({ open }: { open: boolean }) => (
                  <div className="flex flex-col space">
                    <AccordionHeader>
                      <h6 className="flex justify-between items-center text-left normal-case space-x-10">
                        <span>{question}</span>
                        <ChevronDownIcon
                          className={clsx(
                            'w-11 h-11 sm:w-12 sm:h-12 flex-shrink-0 transition-transform',
                            open && '-rotate-180',
                          )}
                        />
                      </h6>
                    </AccordionHeader>
                    <AccordionBody className="mt-10">{answer}</AccordionBody>
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

export const Head = () => <SEO title="Our Wedding" />;
