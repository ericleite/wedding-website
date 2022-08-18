import { PageProps } from 'gatsby';
import React from 'react';

import { PageLayout, SectionContainer } from '../templates';

const Accommodations: React.FC<PageProps> = () => (
  <PageLayout title="Accomodations">
    <SectionContainer>
      <section className="col-span-full text-center">
        <h1>Coming soon!</h1>
      </section>
    </SectionContainer>
  </PageLayout>
);

export default Accommodations;
