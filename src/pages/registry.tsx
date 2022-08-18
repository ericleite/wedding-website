import { PageProps } from 'gatsby';
import React from 'react';

import { PageLayout, SectionContainer } from '../templates';

const Registry: React.FC<PageProps> = () => (
  <PageLayout title="Registry">
    <SectionContainer>
      <section className="col-span-full text-center">
        <h1>Coming soon!</h1>
      </section>
    </SectionContainer>
  </PageLayout>
);

export default Registry;
