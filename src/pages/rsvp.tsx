import { PageProps } from 'gatsby';
import * as React from 'react';

import Seo from '../components/seo';
import Layout from '../templates/layout';

const Rsvp: React.FC<PageProps> = () => (
  <Layout>
    <Seo title="RSVP" />
    <h1>RSVP</h1>
  </Layout>
);

export default Rsvp;
