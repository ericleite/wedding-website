import React from 'react';

interface FooterProps {}

const Footer: React.FC<FooterProps> = () => (
  <footer className="flex justify-center p-11 lg:p-13 text-center">
    © {new Date().getFullYear()} &middot; Eric Leite and Lauren Dubose
  </footer>
);

export default Footer;
