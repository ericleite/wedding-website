import clsx from 'clsx';
import React from 'react';

import { ThemeColor, ThemeSize } from '../../types';

interface ButtonProps {
  className?: string;
  color?: ThemeColor;
  semantic?: boolean;
  size?: ThemeSize;
}

export const COLOR_MAP: Partial<Record<ThemeColor, string>> = Object.freeze({
  [ThemeColor.Gold]:
    'border-goldSecondary text-goldSecondary hover:bg-goldSecondary hover:text-darkPrimary focus:outline-none focus:ring focus:ring-goldTertiary',
  [ThemeColor.Maroon]:
    'border-maroonSecondary text-maroonSecondary hover:bg-maroonSecondary hover:text-lightPrimary focus:outline-none focus:ring focus:ring-maroonTertiary',
  [ThemeColor.Light]:
    'border-lightSecondary text-lightSecondary hover:bg-lightSecondary hover:text-lightPrimary focus:outline-none focus:ring focus:ring-lightTertiary',
  [ThemeColor.Dark]:
    'border-darkSecondary text-darkSecondary hover:bg-darkSecondary hover:text-lightPrimary focus:outline-none focus:ring focus:ring-darkTertiary',
});

export const SIZE_MAP: Partial<Record<ThemeSize, string>> = {
  [ThemeSize.Sm]: 'text-hBase px-12 py-9',
  [ThemeSize.Md]: 'text-hBase md:text-h6 px-14 py-10',
};

const Button: React.FC<React.PropsWithChildren<ButtonProps>> = ({
  children,
  className,
  color = ThemeColor.Gold,
  semantic = true,
  size = ThemeSize.Md,
}) => {
  const classNames = clsx(
    'border-5 font-bold rounded-md tracking-widest uppercase transition-colors',
    COLOR_MAP[color],
    SIZE_MAP[size],
    className,
  );

  if (!semantic) {
    return <span className={clsx('flex items-center', classNames)}>{children}</span>;
  }

  return (
    <button className={classNames}>
      <span className="flex items-center">{children}</span>
    </button>
  );
};

export default Button;
