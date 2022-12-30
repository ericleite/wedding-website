import clsx from 'clsx';
import React from 'react';

import * as globalStyles from '../../assets/styles/global.module.css';
import { Routes, ThemeSize } from '../../types';
import { AnimatedDivider } from '../AnimatedDivider';
import { ButtonLink } from '../ButtonLink';

interface FooterProps {
  showRsvp?: boolean;
}

const Footer: React.FC<FooterProps> = ({ showRsvp }) => (
  <footer className="bg-lightTertiary">
    {showRsvp && (
      <section className="flex flex-col items-center bg-darkPrimary py-15 px-13">
        <p className={clsx('text-center text-lightPrimary', globalStyles.textHeading)}>
          If you haven&#39;t already,
          <br />
          please take a moment to RSVP!
        </p>
        <AnimatedDivider spacing={ThemeSize.Lg} />
        <p>
          <ButtonLink href={Routes.RsvpExternal} outbound>
            RSVP
          </ButtonLink>
        </p>
      </section>
    )}
    <section className="flex justify-center p-11 text-small md:text-base text-center">
      © {new Date().getFullYear()} | Eric Leite and Lauren Dubose
    </section>
  </footer>
);

export default Footer;
