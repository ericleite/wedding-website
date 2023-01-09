/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/browser-apis/
 */

// You can delete this file if you're not using it

import '@fontsource/great-vibes/400.css';
import '@fontsource/montserrat/400.css';
import '@fontsource/montserrat/700.css';
import '@fontsource/playfair-display/600-italic.css';
import '@fontsource/playfair-display/600.css';
import './src/assets/styles/globals.css';

import type { GatsbySSR } from 'gatsby';
import React from 'react';

import { AppStateProvider } from './src/contexts';

export const wrapRootElement: GatsbySSR['wrapRootElement'] = ({ element }) => (
  <AppStateProvider>{element}</AppStateProvider>
);

// TODO: Add route transition animations