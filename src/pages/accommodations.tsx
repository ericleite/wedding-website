import { PageProps } from 'gatsby';
import React from 'react';

import { Divider } from '../components';
import { PageLayout, SectionContainer } from '../templates';

const Accommodations: React.FC<PageProps> = () => (
  <PageLayout className="space-y-15 my-15" title="Travel &amp; Hotel">
    <SectionContainer>
      <section className="col-span-full flex flex-col items-center">
        <h3 className="text-center">Stay tuned!</h3>
        <Divider />
        <p className="text-center">We&#39;ll be updating this page with more information soon!</p>
      </section>
    </SectionContainer>
  </PageLayout>
);

export default Accommodations;
