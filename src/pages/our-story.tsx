import { PageProps } from 'gatsby';
import React from 'react';

import { SEO } from '../components';
import { PageLayout } from '../templates';

const OurStory: React.FC<PageProps> = () => (
  <PageLayout>
    <SEO title="Our Story" />
    <h1>Our Story</h1>
  </PageLayout>
);

export default OurStory;
