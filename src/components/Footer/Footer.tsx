import clsx from 'clsx';
import { OutboundLink } from 'gatsby-plugin-google-gtag';
import React from 'react';

import * as globalStyles from '../../assets/styles/global.module.css';
import { Routes, ThemeSize } from '../../types';
import { Button } from '../Button';
import { Divider } from '../Divider';

interface FooterProps {
  showRsvp?: boolean;
}

const Footer: React.FC<FooterProps> = ({ showRsvp }) => (
  <footer>
    {showRsvp && (
      <section className="flex flex-col items-center bg-darkPrimary py-15 px-13">
        <p className={clsx('text-center text-lightPrimary', globalStyles.textHeading)}>
          If you haven&#39;t already,
          <br />
          please take a moment to RSVP!
        </p>
        <Divider spacing={ThemeSize.Lg} />
        <p>
          <OutboundLink className="border-none inline-block" href={Routes.RsvpExternal} target="_blank">
            <Button>RSVP</Button>
          </OutboundLink>
        </p>
      </section>
    )}
    <section className="flex justify-center p-11 lg:p-13 text-center">
      © {new Date().getFullYear()} &middot; Eric Leite and Lauren Dubose
    </section>
  </footer>
);

export default Footer;
