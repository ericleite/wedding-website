import { PageProps } from 'gatsby';
import React from 'react';

import { SEO } from '../components';
import { PageLayout } from '../templates';

const Rsvp: React.FC<PageProps> = () => (
  <PageLayout>
    <SEO title="RSVP" />
    <h1>RSVP</h1>
  </PageLayout>
);

export default Rsvp;
