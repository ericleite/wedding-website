import type { GatsbySSR } from 'gatsby';

export const onRenderBody: GatsbySSR['onRenderBody'] = ({ setHtmlAttributes, setBodyAttributes }) => {
  setHtmlAttributes({ className: 'h-full', lang: 'en' });
  setBodyAttributes({ className: 'h-full' });
};
