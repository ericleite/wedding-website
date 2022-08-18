import { PageProps } from 'gatsby';
import React from 'react';

import { PageLayout, SectionContainer } from '../templates';

const Rsvp: React.FC<PageProps> = () => (
  <PageLayout title="Rsvp">
    <SectionContainer>
      <section className="col-span-full flex flex-col items-center">
        <h3 className="text-center">Stay tuned!</h3>
        <hr className="h-6 w-14 bg-darkTertiary mb-12" />
        <p className="text-center">We&#39;ll be updating this page with more information soon!</p>
      </section>
    </SectionContainer>
  </PageLayout>
);

export default Rsvp;
