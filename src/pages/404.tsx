import { Link } from 'gatsby';
import React from 'react';

import { SEO } from '../components';
import { PageLayout } from '../templates';

const NotFoundPage = () => {
  return (
    <PageLayout>
      <SEO title="404: Not found" />
      <h1>404: Not Found</h1>
      <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
      <br />
      <Link to="/">Go home</Link>.
    </PageLayout>
  );
};

export default NotFoundPage;
