import { PageProps } from 'gatsby';
import React from 'react';

import { SEO } from '../components';
import { PageLayout } from '../templates';

const Accommodations: React.FC<PageProps> = () => (
  <PageLayout>
    <SEO title="Accommodations" />
    <h1>Accommodations</h1>
  </PageLayout>
);

export default Accommodations;
