import type { GatsbyNode } from 'gatsby';

import redirects from './redirects';

export const createPages: GatsbyNode['createPages'] = async ({ actions }) => {
  const { createRedirect } = actions;

  redirects.forEach(({ fromPath, toPath }) => {
    createRedirect({
      fromPath,
      statusCode: 302,
      toPath,
    });
  });
};
