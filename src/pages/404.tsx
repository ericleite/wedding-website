import { Link } from 'gatsby';
import { StaticImage } from 'gatsby-plugin-image';
import React from 'react';

import * as globalStyles from '../assets/styles/global.module.css';
import { AnimatedDivider, SEO } from '../components';
import { PageLayout, SectionContainer } from '../templates';
import { ThemeSize } from '../types';
import * as styles from './404.module.css';

const NotFoundPage = () => {
  return (
    <PageLayout
      className="my-15"
      heroImage={
        <StaticImage
          alt="Eve on mountain looking confused"
          breakpoints={[1920, 2560, 3840]}
          className={globalStyles.heroImage}
          layout="fullWidth"
          loading="eager"
          placeholder="dominantColor"
          quality={80}
          src="../assets/images/heros/eve-on-mountain-looking-confused.jpg"
        />
      }
      heroImageClassName={styles.heroImageContainer}
      title="Page Not Found"
    >
      <SectionContainer>
        <section className="col-span-full flex flex-col items-center">
          <h3 className="text-center">Uh oh!</h3>
          <AnimatedDivider size={ThemeSize.Lg} />
          <p className="text-center">Looks like there&#8217;s no page that matches the current URL.</p>
          <p className="text-center">
            Please double check the URL or <Link to="/">click here</Link> to go home.
          </p>
        </section>
      </SectionContainer>
    </PageLayout>
  );
};

export default NotFoundPage;

export const Head = () => <SEO title="Page Not Found" />;
