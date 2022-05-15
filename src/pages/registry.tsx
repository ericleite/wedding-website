import { PageProps } from 'gatsby';
import * as React from 'react';

import Seo from '../components/seo';
import Layout from '../templates/layout';

const Registry: React.FC<PageProps> = () => (
  <Layout>
    <Seo title="Registry" />
    <h1>Registry</h1>
  </Layout>
);

export default Registry;
