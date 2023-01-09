import clsx from 'clsx';
import { PageProps } from 'gatsby';
import { StaticImage } from 'gatsby-plugin-image';
import React, { useCallback } from 'react';

import * as globalStyles from '../assets/styles/global.module.css';
import { AnimatedDivider, SEO } from '../components';
import { EventDetails } from '../components/EventDetails';
import { useAppState } from '../contexts';
import { PageLayout, SectionContainer } from '../templates';
import { InternalRoute, ThemeColor, ThemeSize } from '../types';
import * as styles from './schedule.module.css';

const Schedule: React.FC<PageProps> = () => {
  const {
    setHeroImageLoaded,
    state: { heroImageLoaded },
  } = useAppState();
  const setScheduleHeroImageLoaded = useCallback(() => {
    setHeroImageLoaded(InternalRoute.Schedule);
  }, [setHeroImageLoaded]);

  return (
    <PageLayout
      className="space-y-15 my-15"
      heroImage={
        <StaticImage
          alt="Eric and Lauren"
          breakpoints={[1920, 2560, 3840]}
          className={globalStyles.heroImage}
          layout="fullWidth"
          loading="eager"
          onLoad={setScheduleHeroImageLoaded}
          placeholder="none"
          quality={80}
          src="../assets/images/heros/eric-and-lauren-holding-hands-in-front-of-cactus-and-rocks.jpg"
        />
      }
      heroImageClassName={styles.heroImageContainer}
      heroImageLoaded={heroImageLoaded[InternalRoute.Schedule]}
      subtitle="Let the adventure begin"
      title="Schedule"
    >
      <SectionContainer className="place-items-center max-w-5xl">
        <section className="col-span-full flex flex-col items-center">
          <h3 className="text-center">Event Schedule</h3>
          <AnimatedDivider color={ThemeColor.Light} size={ThemeSize.Lg} />
        </section>
        <section className="col-span-full flex flex-col items-center">
          <div className="w-full space-y-15 md:grid md:grid-cols-3 md:space-y-0 md:gap-11 lg:gap-13">
            <div className="flex flex-col items-center">
              <p className={clsx(globalStyles.textHeading, 'text-darkTertiary')}>Friday</p>
              <AnimatedDivider color={ThemeColor.Light} size={ThemeSize.Sm} spacing={ThemeSize.Sm} />
              <div className="space-y-12">
                <EventDetails
                  attendees="Wedding Party"
                  attire="Casual"
                  location="Dubose Residence"
                  locationHref="https://goo.gl/maps/1ByJ2GznuMhSXiaJ7"
                  name="Rehearsal"
                  start={new Date('2023-03-03T16:30:00.000-08:00')}
                  stop={new Date('2023-03-03T18:00:00.000-08:00')}
                />
                <EventDetails
                  attendees="Immediate Family & Friends"
                  attire="Cocktail"
                  location="Pinzimini"
                  locationHref="https://goo.gl/maps/skZd9rQGShrRYG6V7"
                  name="Rehearsal Dinner"
                  start={new Date('2023-03-03T18:00:00.000-08:00')}
                  stop={new Date('2023-03-03T20:00:00.000-08:00')}
                />
              </div>
            </div>
            <div className="flex flex-col items-center">
              <p className={clsx(globalStyles.textHeading, 'text-darkTertiary')}>Saturday</p>
              <AnimatedDivider color={ThemeColor.Light} size={ThemeSize.Sm} spacing={ThemeSize.Sm} />
              <div className="space-y-12">
                <EventDetails
                  attendees="Westin Guests"
                  location="The Westin Rancho Mirage"
                  locationHref="https://goo.gl/maps/aLZKovceAUeExEgd7"
                  name="Shuttle to Venue"
                  start={new Date('2023-03-04T15:30:00.000-08:00')}
                  stop={new Date('2023-03-04T16:30:00.000-08:00')}
                />
                <EventDetails
                  attendees="All Guests"
                  attire="Cocktail"
                  location="Dubose Residence"
                  locationHref="https://goo.gl/maps/1ByJ2GznuMhSXiaJ7"
                  name="“Unplugged” Ceremony"
                  start={new Date('2023-03-04T16:30:00.000-08:00')}
                  stop={new Date('2023-03-04T17:00:00.000-08:00')}
                />
                <EventDetails
                  attendees="All Guests"
                  attire="Cocktail"
                  location="Dubose Residence"
                  locationHref="https://goo.gl/maps/1ByJ2GznuMhSXiaJ7"
                  name="Cocktail Hour"
                  start={new Date('2023-03-04T17:00:00.000-08:00')}
                  stop={new Date('2023-03-04T18:00:00.000-08:00')}
                />
                <EventDetails
                  attendees="All Guests"
                  attire="Cocktail"
                  location="Dubose Residence"
                  locationHref="https://goo.gl/maps/1ByJ2GznuMhSXiaJ7"
                  name="Reception"
                  start={new Date('2023-03-04T18:00:00.000-08:00')}
                  stop={new Date('2023-03-04T23:00:00.000-08:00')}
                />
                <EventDetails
                  attendees="Westin Guests"
                  attire="Cocktail"
                  location="Dubose Residence"
                  locationHref="https://goo.gl/maps/1ByJ2GznuMhSXiaJ7"
                  name="Shuttle to Hotel"
                  start={new Date('2023-03-04T21:30:00.000-08:00')}
                  stop={new Date('2023-03-05T00:00:00.000-08:00')}
                />
              </div>
            </div>
            <div className="flex flex-col items-center">
              <p className={clsx(globalStyles.textHeading, 'text-darkTertiary')}>Sunday</p>
              <AnimatedDivider color={ThemeColor.Light} size={ThemeSize.Sm} spacing={ThemeSize.Sm} />
              <div className="space-y-12">
                <EventDetails
                  attendees="All Guests"
                  attire="Casual"
                  location="La Quinta Brewing Company"
                  locationHref="https://goo.gl/maps/ugUTbtM16BxGFLHz9"
                  name="Goodbye Lunch"
                  start={new Date('2023-03-05T11:30:00.000-08:00')}
                  stop={new Date('2023-03-05T13:00:00.000-08:00')}
                />
              </div>
            </div>
          </div>
        </section>
      </SectionContainer>
    </PageLayout>
  );
};

export default Schedule;

export const Head = () => <SEO title="Schedule" />;
