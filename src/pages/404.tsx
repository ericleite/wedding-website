import { Link } from 'gatsby';
import * as React from 'react';

import Seo from '../components/seo';
import Layout from '../templates/layout';

const NotFoundPage = () => {
  return (
    <Layout>
      <Seo title="404: Not found" />
      <h1>404: Not Found</h1>
      <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
      <br />
      <Link to="/">Go home</Link>.
    </Layout>
  );
};

export default NotFoundPage;
