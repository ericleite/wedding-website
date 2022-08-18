import { OutboundLink } from 'gatsby-plugin-google-gtag';
import React from 'react';

import { Routes } from '../../types';
import { Button } from '../Button';
import { Divider } from '../Divider';

interface FooterProps {
  showRsvp?: boolean;
}

const Footer: React.FC<FooterProps> = ({ showRsvp }) => (
  <footer>
    {showRsvp && (
      <section className="flex flex-col items-center bg-darkPrimary p-15">
        <h4 className="text-center text-lightPrimary">If you haven&#39;t already, please take a moment to RSVP!</h4>
        <Divider />
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
