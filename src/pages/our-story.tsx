import { PageProps } from 'gatsby';
import { StaticImage } from 'gatsby-plugin-image';
import React from 'react';

import * as styles from '../assets/styles/global.module.css';
import { Divider } from '../components';
import { PageLayout, SectionContainer } from '../templates';
import { ThemeColor } from '../types';

const OurStory: React.FC<PageProps> = () => (
  <PageLayout
    heroImage={
      <StaticImage
        alt="Eric and Lauren with rock background"
        breakpoints={[320, 428, 768, 1024, 1366, 1920, 2560, 3840]}
        className={styles.heroImage}
        layout="fullWidth"
        loading="eager"
        placeholder="dominantColor"
        quality={80}
        src="../assets/images/heros/eric-and-lauren-walking-up-stairs.jpg"
      />
    }
    subtitle="How we found each other"
    theme={ThemeColor.Dark}
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
