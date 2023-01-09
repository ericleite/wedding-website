import clsx from 'clsx';
import { PageProps } from 'gatsby';
import { OutboundLink } from 'gatsby-plugin-google-gtag';
import { StaticImage } from 'gatsby-plugin-image';
import React, { useCallback } from 'react';

import HorizontalFloralSVG from '../assets/images/accents/horizontal-floral.inline.svg';
import VerticalFloralSVG from '../assets/images/accents/vertical-floral-main.inline.svg';
import * as globalStyles from '../assets/styles/global.module.css';
import { AnimatedDivider, ButtonLink, ExpandableContent } from '../components';
import SEO from '../components/SEO/SEO';
import { useAppState } from '../contexts';
import { PageLayout, SectionContainer } from '../templates';
import { InternalRoute, ThemeSize } from '../types';
import * as styles from './accommodations.module.css';

const Accommodations: React.FC<PageProps> = () => {
  const { setHeroImageLoaded, state } = useAppState();
  const setAccommodationsHeroImageLoaded = useCallback(() => {
    setHeroImageLoaded(InternalRoute.Accommodations);
  }, [setHeroImageLoaded]);

  return (
    <PageLayout
      className="space-y-15 my-15"
      heroImage={
        <StaticImage
          alt="Eric and Lauren walking in front of Joshua Tree"
          breakpoints={[1920, 2560, 3840]}
          className={globalStyles.heroImage}
          layout="fullWidth"
          loading="eager"
          onLoad={setAccommodationsHeroImageLoaded}
          placeholder="none"
          quality={80}
          src="../assets/images/heros/eric-and-lauren-walking-in-front-of-joshua-tree.jpg"
        />
      }
      heroImageClassName={styles.heroImageContainer}
      heroImageLoaded={state?.heroImageLoaded[InternalRoute.Accommodations]}
      subtitle="Getting to the venue"
      title="Travel & Hotel"
    >
      <SectionContainer className="place-items-center max-w-lg lg:max-w-5xl">
        <section className="col-span-4 relative hidden lg:block">
          <HorizontalFloralSVG className="text-maroonTertiary w-full m-auto" />
          <div className="absolute top-0 bottom-0 left-0 right-0 bg-gradient-to-r from-transparent to-sand opacity-75" />
        </section>
        <section className="space-y-11 flex flex-col items-center col-span-4 text-center">
          <p className={clsx(globalStyles.textHeading, 'text-darkTertiary')}>Venue</p>
          <AnimatedDivider size={ThemeSize.Sm} spacing={ThemeSize.Sm} />
          <h5>
            38402 Vista Del Sol
            <br />
            Rancho Mirage
            <br />
            CA 92270
          </h5>
          <ExpandableContent>
            <p>
              The ceremony and reception will take place at the Dubose family home. While there will be ample event
              space, parking in the area is limited, so we recommend taking an{' '}
              <OutboundLink
                href="https://m.uber.com/ul/?action=setPickup&client_id=3b4rZI9Lz4yYq9Ok7Idwd1_-fSQD83ib&pickup=my_location&dropoff[formatted_address]=38402%20Vista%20Del%20Sol%2C%20Rancho%20Mirage%2C%20CA%2092270%2C%20USA&dropoff[latitude]=33.767641&dropoff[longitude]=-116.396104"
                target="_blank"
              >
                Uber
              </OutboundLink>{' '}
              or{' '}
              <OutboundLink
                href="https://ride.lyft.com/ridetype?origin=33.800403%2C-116.417549&destination=33.76744%2C-116.39747&offerProductId=standard"
                target="_blank"
              >
                Lyft
              </OutboundLink>{' '}
              to/from the venue.
            </p>
          </ExpandableContent>
          <p>
            <ButtonLink href="https://goo.gl/maps/5ytSYu69nMvMbqT86" outbound size={ThemeSize.Sm}>
              Get directions
            </ButtonLink>
          </p>
        </section>
        <section className="col-span-4 relative hidden lg:block">
          <HorizontalFloralSVG className="text-maroonTertiary w-full m-auto -scale-x-100" />
          <div className="absolute top-0 bottom-0 left-0 right-0 bg-gradient-to-l from-transparent to-sand opacity-75" />
        </section>
      </SectionContainer>
      <SectionContainer className="place-items-center max-w-lg lg:max-w-5xl" spacingClassName="gap-15 lg:gap-13">
        <section className="space-y-11 flex flex-col items-center col-span-4 text-center">
          <p className={clsx(globalStyles.textHeading, 'text-darkTertiary')}>Travel</p>
          <AnimatedDivider size={ThemeSize.Sm} spacing={ThemeSize.Sm} />
          <h5>
            Palm Springs
            <br />
            International
            <br />
            Airport
          </h5>
          <ExpandableContent>
            <p>
              We recommend flying directly into{' '}
              <OutboundLink href="http://skipl.ag/88q31" target="_blank">
                PSP
              </OutboundLink>
              , which is a 10-minute drive from the hotel.
            </p>
            <p>
              More affordable flights can be found to{' '}
              <OutboundLink href="http://skipl.ag/88r95" target="_blank">
                ONT
              </OutboundLink>
              ,{' '}
              <OutboundLink href="http://skipl.ag/88r9x" target="_blank">
                SNA
              </OutboundLink>
              , and{' '}
              <OutboundLink href="http://skipl.ag/88ra9" target="_blank">
                LAX
              </OutboundLink>
              . However, rental car arrangements may be needed as these airports are 2-3 hours away.
            </p>
          </ExpandableContent>
          <p>
            <ButtonLink href="http://skipl.ag/88q31" outbound size={ThemeSize.Sm}>
              Book a flight
            </ButtonLink>
          </p>
        </section>
        <section className="col-span-4 relative hidden lg:block">
          <VerticalFloralSVG className="text-maroonTertiary w-1/2 m-auto" />
          <div className="absolute top-0 bottom-0 left-0 right-0 bg-gradient-to-b from-transparent to-sand opacity-75" />
        </section>
        <section className="space-y-11 flex flex-col items-center col-span-4 text-center">
          <p className={clsx(globalStyles.textHeading, 'text-darkTertiary')}>Lodging</p>
          <AnimatedDivider size={ThemeSize.Sm} spacing={ThemeSize.Sm} />
          <h5>
            The Westin
            <br />
            Golf Resort &amp; Spa
            <br />
            Rancho Mirage
          </h5>
          <ExpandableContent>
            <p>
              We recommend booking a room within our hotel block. We have reserved a limited number of rooms at a
              discounted rate on a first come, first serve basis.
            </p>
            <p>March is a popular time to visit Palm Springs, so be sure to book a room before prices go up!</p>
          </ExpandableContent>
          <p>
            <ButtonLink href="https://book.passkey.com/e/50383865" outbound size={ThemeSize.Sm}>
              Reserve a room
            </ButtonLink>
          </p>
        </section>
      </SectionContainer>
    </PageLayout>
  );
};

export default Accommodations;

export const Head = () => <SEO title="Travel & Hotel" />;
