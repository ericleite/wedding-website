import clsx from 'clsx';
import React from 'react';

import * as globalStyles from '../../assets/styles/global.module.css';
import { Routes, ThemeSize } from '../../types';
import { ButtonLink } from '../ButtonLink';
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
          <ButtonLink href={Routes.RsvpExternal} outbound>
            RSVP
          </ButtonLink>
        </p>
      </section>
    )}
    <section className="flex justify-center p-11 lg:p-12 text-center">
      © {new Date().getFullYear()} | Eric Leite and Lauren Dubose
    </section>
  </footer>
);

export default Footer;
