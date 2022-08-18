import clsx from 'clsx';
import React from 'react';

interface ButtonProps {
  className?: string;
}

const Button: React.FC<React.PropsWithChildren<ButtonProps>> = ({ children, className }) => (
  <button
    className={clsx(
      className,
      'px-14 py-10 font-bold uppercase tracking-widest leading-none text-lightPrimary bg-[#FAA916] hover:bg-[#FCC55F] transition-colors',
    )}
  >
    <span className="flex items-center">{children}</span>
  </button>
);

export default Button;
