import { Link } from 'gatsby';
import React from 'react';

import { PageLayout, SectionContainer } from '../templates';

const NotFoundPage = () => {
  return (
    <PageLayout title="Page Not Found">
      <SectionContainer>
        <section className="col-span-full flex flex-col items-center">
          <h3 className="text-center">Uh oh!</h3>
          <hr className="h-6 w-14 bg-darkTertiary mb-12" />
          <p className="text-center">Looks like there&#8217;s no page that matches the current URL.</p>
          <p className="text-center">
            Please double check the URL or <Link to="/">click here</Link> to go home.
          </p>
        </section>
      </SectionContainer>
    </PageLayout>
  );
};

export default NotFoundPage;
