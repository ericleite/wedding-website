import { PageProps } from 'gatsby';
import * as React from 'react';

import Seo from '../components/seo';
import Layout from '../templates/layout';

const OurStory: React.FC<PageProps> = () => (
  <Layout>
    <Seo title="Our Story" />
    <h1>Our Story</h1>
  </Layout>
);

export default OurStory;
