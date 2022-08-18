import { PageProps } from 'gatsby';
import { OutboundLink } from 'gatsby-plugin-google-gtag';
import { StaticImage } from 'gatsby-plugin-image';
import React from 'react';

import * as globalStyles from '../assets/styles/global.module.css';
import { ButtonLink, Divider, ExpandableContent } from '../components';
import { PageLayout, SectionContainer } from '../templates';
import { ThemeColor, ThemeSize } from '../types';
import * as styles from './accommodations.module.css';

const Accommodations: React.FC<PageProps> = () => (
  <PageLayout
    className="space-y-15 my-15"
    heroImage={
      <StaticImage
        alt="Eric and Lauren holding hands on a pier"
        breakpoints={[1920, 2560, 3840]}
        className={globalStyles.heroImage}
        layout="fullWidth"
        loading="eager"
        placeholder="dominantColor"
        quality={80}
        src="../assets/images/heros/eric-and-lauren-at-sunset.png"
      />
    }
    heroImageClassName={styles.heroImageContainer}
    subtitle="Getting to the venue"
    title="Travel &amp; Hotel"
  >
    <SectionContainer className="place-items-center max-w-5xl">
      <section className="space-y-11 flex flex-col items-center col-span-4 text-center">
        <p className={globalStyles.textHeading}>Travel</p>
        <Divider size={ThemeSize.Sm} spacing={ThemeSize.Sm} />
        <h5>
          Palm Springs
          <br />
          International
          <br />
          Airport
        </h5>
        <ExpandableContent>
          <p>
            We reccommend flying directly into{' '}
            <OutboundLink href="https://palmspringsairport.com" target="_blank">
              PSP
            </OutboundLink>{' '}
            as it is a short 10-minute ride from the hotel.
          </p>
          <p>
            More affordable flights can be found to{' '}
            <OutboundLink href="https://www.flyontario.com" target="_blank">
              ONT
            </OutboundLink>
            ,{' '}
            <OutboundLink href="https://www.ocair.com" target="_blank">
              SNA
            </OutboundLink>
            , and{' '}
            <OutboundLink href="https://www.flylax.com" target="_blank">
              LAX
            </OutboundLink>
            . However, rental car arrangements may be needed as these airports are 2-3 hours away.
          </p>
        </ExpandableContent>
        <p>
          <ButtonLink
            color={ThemeColor.Maroon}
            href="https://www.google.com/travel/flights/search?tfs=CBwQAhomagcIARIDU0ZPEgoyMDIzLTAzLTAzcgcIARIDUFNQQABIF1AAWBEaJmoHCAESA1BTUBIKMjAyMy0wMy0wNXIHCAESA1NGT0APSBdQAFgXcAGCAQsI____________AUABSAGYAQE"
            outbound
            size={ThemeSize.Sm}
          >
            Book a flight
          </ButtonLink>
        </p>
      </section>
      <section className="col-span-4">
        <StaticImage
          alt="Watercolor drawing of decorative flowers"
          placeholder="tracedSVG"
          quality={80}
          src="../assets/images/accents/flowers-with-birds-of-paradise.jpeg"
        />
      </section>
      <section className="space-y-11 flex flex-col items-center col-span-4 text-center">
        <p className={globalStyles.textHeading}>Lodging</p>
        <Divider size={ThemeSize.Sm} spacing={ThemeSize.Sm} />
        <h5>
          The Westin
          <br />
          Golf Resort &amp; Spa
          <br />
          Rancho Mirage
        </h5>
        <ExpandableContent>
          <p>
            We reccommend booking a room within our hotel block. We have reserved a limited number of rooms at a
            discounted rate on a first come, first serve basis.
          </p>
          <p>March is a popular time to visit Palm Springs, so be sure to reserve accomodations before prices go up!</p>
        </ExpandableContent>
        <p>
          <ButtonLink
            href="https://www.marriott.com/reservation/availabilitySearch.mi?destinationAddress.country=&lengthOfStay=2&fromDate=03%2F03%2F2023&toDate=03%2F05%2F2023&numberOfRooms=1&numberOfAdults=2&guestCountBox=2+Adults+Per+Room&childrenCountBox=0+Children+Per+Room&roomCountBox=1+Rooms&childrenCount=0&childrenAges=&clusterCode=none&corporateCode=&groupCode=&isHwsGroupSearch=true&propertyCode=PSPWI&useRewardsPoints=false&flexibleDateSearch=false&t-start=03%2F03%2F2023&t-end=03%2F05%2F2023&fromDateDefaultFormat=03%2F03%2F2023&toDateDefaultFormat=03%2F05%2F2023&fromToDate_submit=03%2F05%2F2023&fromToDate="
            outbound
            size={ThemeSize.Sm}
          >
            Reserve a room
          </ButtonLink>
        </p>
      </section>
    </SectionContainer>
    <SectionContainer className="place-items-center max-w-5xl">
      <section className="col-span-4">
        <StaticImage
          alt="Watercolor drawing of decorative flowers"
          placeholder="tracedSVG"
          quality={80}
          src="../assets/images/accents/flowers-with-birds-of-paradise.jpeg"
        />
      </section>
      <section className="space-y-11 flex flex-col items-center col-span-4 text-center">
        <p className={globalStyles.textHeading}>Venue</p>
        <Divider size={ThemeSize.Sm} spacing={ThemeSize.Sm} />
        <h5>
          38402 Vista Del Sol
          <br />
          Rancho Mirage
          <br />
          CA 92270
        </h5>
        <ExpandableContent>
          <p>
            The ceremony and reception will take place at the Dubose family home. While there will be ample event space,
            parking in the area is limited, so we reccommend taking an{' '}
            <OutboundLink href="" target="_blank">
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
          <ButtonLink color={ThemeColor.Dark} href="https://goo.gl/maps/5ytSYu69nMvMbqT86" outbound size={ThemeSize.Sm}>
            Get directions
          </ButtonLink>
        </p>
      </section>
      <section className="col-span-4">
        <StaticImage
          alt="Watercolor drawing of decorative flowers"
          placeholder="tracedSVG"
          quality={80}
          src="../assets/images/accents/flowers-with-birds-of-paradise.jpeg"
        />
      </section>
    </SectionContainer>
    <SectionContainer className="relative overflow-hidden p-15" theme={ThemeColor.Dark}>
      <section className="z-10 col-span-full">insert map here</section>
    </SectionContainer>
  </PageLayout>
);

export default Accommodations;
