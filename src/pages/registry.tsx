import { PageProps, Script } from 'gatsby';
import { StaticImage } from 'gatsby-plugin-image';
import React, { useCallback, useRef } from 'react';

import * as globalStyles from '../assets/styles/global.module.css';
import { ButtonLink, SEO } from '../components';
import { useAppState } from '../contexts';
import { PageLayout, SectionContainer } from '../templates';
import { InternalRoute } from '../types';
import * as styles from './registry.module.css';

const Registry: React.FC<PageProps> = () => {
  const scriptId = useRef(Math.random().toString());

  const { setHeroImageLoaded, state } = useAppState();
  const setRegistryHeroImageLoaded = useCallback(() => {
    setHeroImageLoaded(InternalRoute.Registry);
  }, [setHeroImageLoaded]);

  return (
    <PageLayout
      className="bg-white space-y-15 py-15"
      heroImage={
        <StaticImage
          alt="Eric and Lauren in front of rocks"
          breakpoints={[1920, 2560, 3840]}
          className={globalStyles.heroImage}
          layout="fullWidth"
          loading="eager"
          onLoad={setRegistryHeroImageLoaded}
          placeholder="none"
          quality={80}
          src="../assets/images/heros/eric-and-lauren-standing-in-front-of-rocks.jpg"
        />
      }
      heroImageClassName={styles.heroImageContainer}
      heroImageLoaded={state?.heroImageLoaded[InternalRoute.Registry]}
      title="Registry"
    >
      <SectionContainer>
        <section className="col-span-full flex flex-col items-center">
          <ButtonLink
            className="zola-registry-embed"
            data-registry-key="eric-and-lauren"
            href="https://www.zola.com/registry/eric-and-lauren"
            outbound
          >
            Check out our Wedding Registry
          </ButtonLink>
          <Script id={scriptId.current} src="https://widget.zola.com/js/widget.js" />
        </section>
      </SectionContainer>
    </PageLayout>
  );
};

export default Registry;

export const Head = () => <SEO title="Registry" />;
