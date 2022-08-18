import clsx from 'clsx';
import React from 'react';

import * as globalStyles from '../../assets/styles/global.module.css';

interface ButtonProps {
  className?: string;
}

const Button: React.FC<React.PropsWithChildren<ButtonProps>> = ({ children, className }) => (
  <button
    className={clsx(
      'px-14 py-10 font-bold leading-none text-lightPrimary bg-[#FAA916] hover:bg-[#FCC55F] transition-colors',
      globalStyles.textHeading,
      className,
    )}
  >
    <span className="flex items-center">{children}</span>
  </button>
);

export default Button;
