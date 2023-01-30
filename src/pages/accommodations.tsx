import clsx from 'clsx';
import { PageProps } from 'gatsby';
import { OutboundLink } from 'gatsby-plugin-google-gtag';
import { StaticImage } from 'gatsby-plugin-image';
import React, { useCallback } from 'react';

import * as globalStyles from '../assets/styles/global.module.css';
import { AnimatedDivider, ButtonLink } from '../components';
import SEO from '../components/SEO/SEO';
import { useAppState } from '../contexts';
import { PageLayout, SectionContainer } from '../templates';
import { InternalRoute, ThemeColor, ThemeSize } from '../types';
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
      <SectionContainer className="place-items-center max-w-prose" spacingClassName="gap-13">
        <section className="col-span-full flex flex-col items-center space-y-13 2xl:space-y-15 text-center">
          <div className="flex flex-col items-center">
            <h3>Travel</h3>
            <AnimatedDivider color={ThemeColor.Light} size={ThemeSize.Lg} />
            <p>
              We recommend flying directly into{' '}
              <OutboundLink href="http://skipl.ag/88q31" target="_blank">
                PSP
              </OutboundLink>
              , which is a 10-minute drive from the hotel. More affordable flights can be found to{' '}
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
            <p>
              The ceremony and reception will take place at the Dubose family home. Parking in the area is limited, so
              we recommend taking an{' '}
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
          </div>
        </section>
        <section className="col-span-full space-y-11 flex flex-col items-center text-center lg:col-span-6">
          <p className={clsx(globalStyles.textHeading, 'text-darkTertiary')}>Venue</p>
          <AnimatedDivider size={ThemeSize.Sm} spacing={ThemeSize.Sm} />
          <h5>
            38402 Vista Del Sol
            <br />
            Rancho Mirage
            <br />
            CA 92270
          </h5>
          <p>
            <ButtonLink href="https://goo.gl/maps/5ytSYu69nMvMbqT86" outbound size={ThemeSize.Sm}>
              Get directions
            </ButtonLink>
          </p>
        </section>
        <section className="col-span-full space-y-11 flex flex-col items-center text-center lg:col-span-6">
          <p className={clsx(globalStyles.textHeading, 'text-darkTertiary')}>Flights</p>
          <AnimatedDivider size={ThemeSize.Sm} spacing={ThemeSize.Sm} />
          <h5>
            Palm Springs
            <br />
            International
            <br />
            Airport
          </h5>
          <p>
            <ButtonLink href="http://skipl.ag/88q31" outbound size={ThemeSize.Sm}>
              Book a flight
            </ButtonLink>
          </p>
        </section>
      </SectionContainer>

      <SectionContainer className="place-items-center max-w-prose" spacingClassName="gap-13">
        <section className="col-span-full flex flex-col items-center space-y-13 2xl:space-y-15 text-center">
          <div className="flex flex-col items-center">
            <h3>Hotel</h3>
            <AnimatedDivider color={ThemeColor.Light} size={ThemeSize.Lg} />
            <p>
              We have reserved a limited number of rooms in a hotel block at a discounted rate. These rooms are
              available for all our guests to book on a first come, first serve basis. Please use the links below to
              book a room.
            </p>
            <p>
              <b>January 30th Update:</b> The Westin hotel block is almost full! We have opened a second hotel block at
              the Courtyard by Marriott Palm Desert. This hotel will be available for booking until <b>February 10th</b>
              . Please book your room as soon as possible to ensure you get a room at the discounted rate.
            </p>
          </div>
        </section>
        <section className="col-span-full space-y-11 flex flex-col items-center text-center lg:col-span-6">
          <p className={clsx(globalStyles.textHeading, 'text-darkTertiary')}>The Westin Golf Resort & Spa</p>
          <AnimatedDivider size={ThemeSize.Sm} spacing={ThemeSize.Sm} />
          <h5>
            71333 Dinah Shore Dr
            <br />
            Rancho Mirage
            <br />
            CA 92270
          </h5>
          <p>
            <ButtonLink href="https://book.passkey.com/e/50383865" outbound size={ThemeSize.Sm}>
              Book at Westin
            </ButtonLink>
          </p>
        </section>
        <section className="col-span-full space-y-11 flex flex-col items-center text-center lg:col-span-6">
          <p className={clsx(globalStyles.textHeading, 'text-darkTertiary')}>Courtyard by Marriott</p>
          <AnimatedDivider size={ThemeSize.Sm} spacing={ThemeSize.Sm} />
          <h5>
            74895 Frank Sinatra Dr
            <br />
            Palm Desert
            <br />
            CA 92211
          </h5>
          <p>
            <ButtonLink
              buttonSpanClassName="flex-col"
              href="https://www.marriott.com/events/start.mi?id=1669936014503&key=GRP"
              outbound
              size={ThemeSize.Sm}
            >
              <span>Book at Courtyard</span>
              <span className="text-small">(available until 2/10)</span>
            </ButtonLink>
          </p>
        </section>
      </SectionContainer>
    </PageLayout>
  );
};

export default Accommodations;

export const Head = () => <SEO title="Travel & Hotel" />;
