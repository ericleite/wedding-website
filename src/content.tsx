import { OutboundLink } from 'gatsby-plugin-google-gtag';
import React from 'react';

import { Routes } from './types/routes';

export const FAQ = [
  {
    answer: (
      <>
        <p>
          We&#39;d love to see you there, but we understand if you can&#39;t make it. We will be providing a live stream
          of the ceremony for you to watch from anywhere.
        </p>
        <p>
          <b>
            Please{' '}
            <OutboundLink href={Routes.RsvpExternal} target="_blank">
              RSVP
            </OutboundLink>{' '}
            even if you are not planning to attend.
          </b>{' '}
          This will help us get an accurate guest count for our vendors.
        </p>
      </>
    ),
    question: <>What if I can&#39;t make it?</>,
  },
  {
    answer: (
      <p>
        We will be providing transportation shuttles for guests staying at the Westin. If you are not staying at the
        Westin, we recommend that you call an Uber or Lyft as there will be limited parking space available at the
        venue.
      </p>
    ),
    question: <>How do I get to the wedding venue?</>,
  },
  {
    answer: (
      <p>
        We will be having an &ldquo;unplugged&rdquo; ceremony so that we can all relish the moment as it happens. Our
        professional photographer and videographer will capture every moment of the ceremony for you. We would be happy
        to share their photos with you upon request!
      </p>
    ),
    question: <>Can I take pictures during the ceremony?</>,
  },
  {
    answer: (
      <p>
        Please describe your dietary restriction in the RSVP form when you submit your RSVP and we will do our best to
        accommodate your request.
      </p>
    ),
    question: <>I have dietary restrictions/allergies. What&#39;s the best way to let you know?</>,
  },
];
