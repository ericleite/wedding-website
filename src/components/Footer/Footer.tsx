import React from 'react';

interface FooterProps {}

const Footer: React.FC<FooterProps> = () => (
  <footer>© {new Date().getFullYear()} &middot; Eric Leite and Lauren Dubose</footer>
);

export default Footer;
