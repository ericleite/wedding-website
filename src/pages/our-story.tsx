import { PageProps } from 'gatsby';
import { StaticImage } from 'gatsby-plugin-image';
import React from 'react';

import * as globalStyles from '../assets/styles/global.module.css';
import { Divider } from '../components';
import { PageLayout, SectionContainer } from '../templates';
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
    subtitle="How we found each other"
    theme={ThemeColor.Light}
    title="Our Story"
  >
    <SectionContainer>
      <section className="col-span-full flex flex-col items-center">
        <h3 className="text-center">Stay tuned!</h3>
        <Divider />
        <p className="text-center">We&#39;ll be updating this page with more information soon!</p>
      </section>
    </SectionContainer>
  </PageLayout>
);

export default OurStory;
