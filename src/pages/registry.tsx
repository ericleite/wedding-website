import { PageProps } from 'gatsby';
import React from 'react';

import { Divider } from '../components';
import { PageLayout, SectionContainer } from '../templates';

const Registry: React.FC<PageProps> = () => (
  <PageLayout title="Registry">
    <SectionContainer>
      <section className="col-span-full flex flex-col items-center">
        <h3 className="text-center">Stay tuned!</h3>
        <Divider />
        <p className="text-center">We&#39;ll be updating this page with more information soon!</p>
      </section>
    </SectionContainer>
  </PageLayout>
);

export default Registry;
