import clsx from 'clsx';
import React from 'react';

import { ThemeColor, ThemeSize } from '../../types';

interface ButtonProps {
  className?: string;
  color?: ThemeColor;
  disabled?: boolean;
  semantic?: boolean;
  size?: ThemeSize;
  spanClassName?: string;
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
  [ThemeSize.Sm]: 'text-small md:text-hBase px-11 py-8 md:px-12 md:py-9',
  [ThemeSize.Md]: 'text-hBase md:text-h6 px-13 py-9 md:px-14 md:py-10',
};

const Button: React.FC<React.PropsWithChildren<ButtonProps>> = ({
  children,
  className,
  color = ThemeColor.Gold,
  disabled = false,
  semantic = true,
  size = ThemeSize.Md,
  spanClassName,
}) => {
  const classNames = clsx(
    'border-2 md:border-3 font-bold tracking-widest uppercase transition-colors',
    COLOR_MAP[color],
    SIZE_MAP[size],
    className,
  );

  if (!semantic) {
    return <span className={clsx('flex items-center', classNames, spanClassName)}>{children}</span>;
  }

  return (
    <button className={classNames} disabled={disabled}>
      <span className={clsx('flex items-center', spanClassName)}>{children}</span>
    </button>
  );
};

export default Button;
