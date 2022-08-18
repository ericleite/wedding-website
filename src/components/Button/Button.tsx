import clsx from 'clsx';
import React from 'react';

import * as globalStyles from '../../assets/styles/global.module.css';
import { ThemeColor } from '../../types';

interface ButtonProps {
  className?: string;
  color?: ThemeColor;
}

const COLOR_MAP: Partial<Record<ThemeColor, string>> = Object.freeze({
  [ThemeColor.Gold]: 'bg-goldSecondary hover:bg-goldTertiary text-lightPrimary hover:text-darkPrimary',
  [ThemeColor.Maroon]: 'bg-maroonPrimary hover:bg-maroonSecondary text-lightPrimary hover:text-darkPrimary',
  [ThemeColor.Dark]: 'bg-lightPrimary hover:bg-lightSecondary text-darkPrimary hover:text-lightPrimary',
  [ThemeColor.Light]: 'bg-darkPrimary hover:bg-darkSecondary text-lightPrimary hover:text-darkPrimary',
});

const Button: React.FC<React.PropsWithChildren<ButtonProps>> = ({ children, className, color = ThemeColor.Gold }) => (
  <button
    className={clsx(
      'px-14 py-10 font-bold leading-none transition-colors',
      COLOR_MAP[color],
      globalStyles.textHeading,
      className,
    )}
  >
    <span className="flex items-center">{children}</span>
  </button>
);

export default Button;
