import { Link } from 'gatsby';
import React from 'react';

import { PageLayout, SectionContainer } from '../templates';

const NotFoundPage = () => {
  return (
    <PageLayout title="Page Not Found">
      <SectionContainer>
        <section className="col-span-full text-center">
          <h1>Uh oh!</h1>
          <p>Looks like there&#8217;s no page that matches the current URL.</p>
          <p>
            Please double check the URL or <Link to="/">click here</Link> to go home.
          </p>
        </section>
      </SectionContainer>
    </PageLayout>
  );
};

export default NotFoundPage;
