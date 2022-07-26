import { PageProps } from 'gatsby';
import React from 'react';

import { SEO } from '../components';
import { PageLayout } from '../templates';

const Registry: React.FC<PageProps> = () => (
  <PageLayout>
    <SEO title="Registry" />
    <h1>Registry</h1>
  </PageLayout>
);

export default Registry;
