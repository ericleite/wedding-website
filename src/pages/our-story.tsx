import { PageProps } from 'gatsby';
import { StaticImage } from 'gatsby-plugin-image';
import React from 'react';

import { HeaderTheme, SEO } from '../components';
import { PageLayout } from '../templates';
import * as styles from './global.module.css';

const OurStory: React.FC<PageProps> = () => (
  <PageLayout
    heroImage={
      <StaticImage
        alt="Eric and Lauren with rock background"
        breakpoints={[428, 768, 1024, 1366, 1920, 2560, 3840]}
        className={styles.heroImage}
        layout="fullWidth"
        loading="eager"
        placeholder="dominantColor"
        quality={80}
        src="../assets/images/eric-and-lauren-walking-up-stairs.jpg"
      />
    }
    subtitle="How we found each other"
    theme={HeaderTheme.Dark}
    title="Our Story"
  >
    <SEO title="Our Story" />
    <h1>Hi</h1>
  </PageLayout>
);

export default OurStory;
