import redirects from './redirects';

const createPages = async ({ actions }) => {
  const { createRedirect } = actions;

  redirects.forEach(({ fromPath, toPath }) => {
    createRedirect({
      fromPath,
      statusCode: 302,
      toPath,
    });
  });
};

export { createPages };
