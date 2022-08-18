import { PageProps } from 'gatsby';
import { StaticImage } from 'gatsby-plugin-image';
import React from 'react';

import * as globalStyles from '../assets/styles/global.module.css';
import { Divider } from '../components';
import { PageLayout, SectionContainer, TimelineSection } from '../templates';
import { TimelineSectionOrientation } from '../templates/TimelineSection';
import { ThemeColor } from '../types';
import * as styles from './our-story.module.css';

const OurStory: React.FC<PageProps> = () => (
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
      <div className="col-span-full relative 2xl:col-start-4 2xl:col-end-10">
        <div className="hidden 2xl:block absolute top-12 left-1/2 bottom-0 -translate-x-1/2 w-2 bg-lightSecondary" />
        <div className="flex flex-col space-y-13 lg:space-y-15">
          <TimelineSection
            date="September 2013"
            image={
              <StaticImage
                alt="Eric and Lauren at the party where they first met"
                aspectRatio={16 / 9}
                layout="fullWidth"
                quality={80}
                src="../assets/images/moments/eric-and-lauren-first-meet2.jpg"
              />
            }
            title="A boy found &#8220;Waldo&#8221;"
          />
          <TimelineSection
            date="October 2013"
            image={
              <StaticImage
                alt="Eric and Lauren laughing during a photo shoot"
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
            title="Eventually, they found home in California"
          />
          <TimelineSection
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
            date="August 2021"
            image={
              <StaticImage
                alt="Eric and Lauren at Coachella"
                aspectRatio={16 / 9}
                layout="fullWidth"
                quality={80}
                src="../assets/images/moments/eric-lauren-and-friends-at-disneyland.jpg"
              />
            }
            title="But that didn&#39;t stop them from having a little fun"
          />
          <TimelineSection
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
      </div>
    </SectionContainer>
  </PageLayout>
);

export default OurStory;
