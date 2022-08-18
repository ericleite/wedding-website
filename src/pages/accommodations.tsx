import { PageProps } from 'gatsby';
import * as React from 'react';

import Seo from '../components/seo';
import Layout from '../templates/layout';

const Accommodations: React.FC<PageProps> = () => (
  <Layout>
    <Seo title="Accommodations" />
    <h1>Accommodations</h1>
  </Layout>
);

export default Accommodations;
