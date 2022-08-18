import clsx from 'clsx';
import { PageProps } from 'gatsby';
import { StaticImage } from 'gatsby-plugin-image';
import React from 'react';

import * as globalStyles from '../assets/styles/global.module.css';
import { Divider } from '../components';
import { WEDDING_START_DATE } from '../constants';
import { useCountdownTimer } from '../hooks';
import { PageLayout, SectionContainer, TimelineSection } from '../templates';
import { TimelineSectionOrientation } from '../templates/TimelineSection';
import { ThemeColor } from '../types';
import * as styles from './our-story.module.css';

const OurStory: React.FC<PageProps> = () => {
  const { days, hours, minutes, seconds } = useCountdownTimer(WEDDING_START_DATE);

  return (
    <PageLayout
      className="space-y-15 my-15"
      heroImage={
        <StaticImage
          alt="Eric and Lauren walking on the beach holding hands"
          breakpoints={[1920, 2560, 3840]}
          className={globalStyles.heroImage}
          layout="fullWidth"
          loading="eager"
          placeholder="dominantColor"
          quality={80}
          src="../assets/images/heros/eric-and-lauren-walking-on-beach-holding-hands.jpg"
        />
      }
      heroImageClassName={styles.heroImageContainer}
      subtitle="A match made in Florida"
      theme={ThemeColor.Light}
      title="Our Story"
    >
      <SectionContainer className="max-w-prose 2xl:max-w-none">
        <section className="col-span-full flex flex-col items-center 2xl:col-start-4 2xl:col-end-10">
          <h3 className="text-center">Once upon a time...</h3>
          <Divider />
        </section>
        <section className="col-span-full relative 2xl:col-start-4 2xl:col-end-10">
          <div className="hidden 2xl:block absolute top-12 left-1/2 bottom-0 -translate-x-1/2 w-2 bg-lightSecondary" />
          <div className="flex flex-col space-y-13 lg:space-y-15">
            <TimelineSection
              body={
                <p>
                  Eric met Lauren while she was dressed as Waldo for her big-little sorority reveal. They started
                  talking, and he asked her out on a date. Neither knew this night would be the start of their adventure
                  together.
                </p>
              }
              date="September 2013"
              image={
                <StaticImage
                  alt="Eric and Lauren at the party where they first met"
                  aspectRatio={16 / 9}
                  layout="fullWidth"
                  quality={80}
                  src="../assets/images/moments/eric-and-lauren-first-meet.jpg"
                />
              }
              title="A boy found &#8220;Waldo&#8221;"
            />
            <TimelineSection
              body={
                <p>
                  After going on movie and dinner dates almost every day, they knew they had something special. So it
                  wasn&#39;t long before they decided to make it official.
                </p>
              }
              date="October 2013"
              image={
                <StaticImage
                  alt="Eric and Lauren laughing while taking photos before a date function"
                  aspectRatio={16 / 9}
                  layout="fullWidth"
                  quality={80}
                  src="../assets/images/moments/eric-and-lauren-laughing-during-photo-shoot.jpg"
                  transformOptions={{
                    cropFocus: 'entropy',
                  }}
                />
              }
              orientation={TimelineSectionOrientation.Right}
              title="They became #FacebookOfficial"
            />
            <TimelineSection
              body={
                <p>
                  Their relationship grew stronger over the years while attending the University of Florida together.
                  Some of their favorite moments were cheering at Gator games, taking road trips, going on date
                  functions, and hiking the trails around Gainesville.
                </p>
              }
              date="May 2015"
              image={
                <StaticImage
                  alt="Eric and Lauren doing the gator chomp in front of the University of Florida stadium"
                  aspectRatio={16 / 9}
                  layout="fullWidth"
                  quality={80}
                  src="../assets/images/moments/eric-and-lauren-at-uf-graduation.jpg"
                  transformOptions={{
                    cropFocus: 'entropy',
                  }}
                />
              }
              title="And lived their best lives at UF"
            />
            <TimelineSection
              body={
                <p>
                  After graduating, Eric got a job offer in California. Lauren was still studying, so they had to make
                  the most challenging decision in their life: to enter a long-distance relationship. They loved each
                  other very much, so they did whatever it took to make it work.
                </p>
              }
              date="November 2016"
              image={
                <StaticImage
                  alt="Eric and Lauren in New Orleans wearing Gator swag"
                  aspectRatio={16 / 9}
                  layout="fullWidth"
                  quality={80}
                  src="../assets/images/moments/eric-and-lauren-in-new-orleans.jpg"
                />
              }
              orientation={TimelineSectionOrientation.Right}
              title="2,500 miles couldn&#39;t keep them apart"
            />
            <TimelineSection
              body={
                <p>
                  After three long years apart, Lauren moved to San Francisco to be with Eric. They lived together for
                  the first time and ended up adopting Eve, their first dog together. The three of them finally felt at
                  home.
                </p>
              }
              date="September 2019"
              image={
                <StaticImage
                  alt="Eric and Lauren with Eve at Crater Lake"
                  aspectRatio={16 / 9}
                  layout="fullWidth"
                  quality={80}
                  src="../assets/images/moments/eric-and-lauren-and-eve-at-crater-lake.jpg"
                  transformOptions={{
                    cropFocus: 'entropy',
                  }}
                />
              }
              title="Eventually, they found home"
            />
            <TimelineSection
              body={
                <p>
                  Just months after Lauren moved to SF, the pandemic started. Eric and Lauren were grateful to have each
                  other, and they found new ways to make their favorite meals together, played video games, and taught
                  Eve some tricks. Despite the hectic outside world, they had their own space just for them.
                </p>
              }
              date="May 2020"
              image={
                <StaticImage
                  alt="Eric and Lauren biking to the Golden Gate Bridge"
                  aspectRatio={16 / 9}
                  layout="fullWidth"
                  quality={80}
                  src="../assets/images/moments/eric-and-lauren-biking-to-golden-gate-bridge.jpg"
                />
              }
              orientation={TimelineSectionOrientation.Right}
              title="Just in time for a global pandemic!"
            />
            <TimelineSection
              body={
                <p>
                  They tried to live a &#8220;normal&#8221; life by going outdoors as much as they could. From bike
                  rides around the city to Disneyland adventures, they became closer every day. In one short year, they
                  made new friends and unforgettable memories together.
                </p>
              }
              date="August 2021"
              image={
                <StaticImage
                  alt="Eric and Lauren with friends at Disneyland"
                  aspectRatio={16 / 9}
                  layout="fullWidth"
                  quality={80}
                  src="../assets/images/moments/eric-lauren-and-friends-at-disneyland.jpg"
                />
              }
              title="But that didn&#39;t stop them from going on adventures"
            />
            <TimelineSection
              body={
                <p>
                  For their anniversary, they went to Hawaii to surf, star gaze on top of a volcano, and hike through
                  waterfalls. Then, the day before their eighth anniversary, Eric organized a photoshoot where he got
                  down on one knee and popped the question.
                </p>
              }
              date="October 2021"
              image={
                <StaticImage
                  alt="Eric on one knee proposing to Lauren"
                  aspectRatio={16 / 9}
                  layout="fullWidth"
                  quality={80}
                  src="../assets/images/moments/eric-proposing-to-lauren.jpg"
                />
              }
              orientation={TimelineSectionOrientation.Right}
              title="And then she said &#8220;Yes!&#8221;"
            />
          </div>
        </section>
      </SectionContainer>
      <SectionContainer className="py-11 lg:py-13 2xl:py-15 max-w-prose 2xl:max-w-none">
        <section className="col-span-full flex flex-col items-center 2xl:col-start-4 2xl:col-end-10">
          <p className={clsx('text-center text-darkPrimary', globalStyles.textHeading)}>Our next chapter begins in</p>
          <Divider />
        </section>
        <section className="col-span-full flex justify-between 2xl:col-start-4 2xl:col-end-10">
          <div className="flex flex-col items-center">
            <h3 className="text-maroonTertiary">{days}</h3>
            <h6>Days</h6>
          </div>
          <div className="flex flex-col items-center">
            <h3 className="text-maroonTertiary">{hours}</h3>
            <h6>Hours</h6>
          </div>
          <div className="flex flex-col items-center">
            <h3 className="text-maroonTertiary">{minutes}</h3>
            <h6>Minutes</h6>
          </div>
          <div className="flex flex-col items-center">
            <h3 className="text-maroonTertiary">{seconds}</h3>
            <h6>Seconds</h6>
          </div>
        </section>
      </SectionContainer>
    </PageLayout>
  );
};

export default OurStory;
