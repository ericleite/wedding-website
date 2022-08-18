import React from 'react';

interface FooterProps {}

const Footer: React.FC<FooterProps> = () => (
  <footer className="flex justify-center p-9">
    © {new Date().getFullYear()} &middot; Eric Leite and Lauren Dubose
  </footer>
);

export default Footer;
