import clsx from 'clsx';
import { PageProps } from 'gatsby';
import { StaticImage } from 'gatsby-plugin-image';
import React from 'react';

import * as globalStyles from '../assets/styles/global.module.css';
import { Divider } from '../components';
import { EventDetails } from '../components/EventDetails';
import { PageLayout, SectionContainer } from '../templates';
import { ThemeColor, ThemeSize } from '../types';
import * as styles from './schedule.module.css';

const Schedule: React.FC<PageProps> = () => {
  return (
    <PageLayout
      className="space-y-15 mt-15"
      heroImage={
        <StaticImage
          alt="Eric and Lauren"
          breakpoints={[1920, 2560, 3840]}
          className={globalStyles.heroImage}
          layout="fullWidth"
          loading="eager"
          placeholder="tracedSVG"
          quality={80}
          src="../assets/images/heros/eric-and-lauren-holding-hands-in-front-of-cactus-and-rocks.jpg"
        />
      }
      heroImageClassName={styles.heroImageContainer}
      showRsvp={false}
      subtitle="Play by play for the big day"
      title="Schedule"
    >
      <SectionContainer className="justify-items-stretch max-w-5xl 2xl:max-w-none">
        <section className="col-span-full flex flex-col items-center">
          <h3 className="text-center">Event Schedule</h3>
          <Divider color={ThemeColor.Light} />
        </section>
        <section className="col-span-full flex flex-col items-center">
          <div className="w-full space-y-13 sm:grid sm:grid-cols-3 sm:space-y-0 sm:gap-11 lg:gap-13">
            <div className="flex flex-col items-center">
              <p className={clsx(globalStyles.textHeading, 'text-darkTertiary')}>Friday</p>
              <Divider color={ThemeColor.Light} size={ThemeSize.Sm} spacing={ThemeSize.Sm} />
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
              <Divider color={ThemeColor.Light} size={ThemeSize.Sm} spacing={ThemeSize.Sm} />
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
                  name="Ceremony"
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
              <Divider color={ThemeColor.Light} size={ThemeSize.Sm} spacing={ThemeSize.Sm} />
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
      <SectionContainer theme={ThemeColor.Dark}>
        <section className="col-span-full p-15">
          <h3 className="text-center text-lightPrimary">FAQ</h3>
        </section>
      </SectionContainer>
    </PageLayout>
  );
};

export default Schedule;
