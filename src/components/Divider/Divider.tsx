import clsx from 'clsx';
import React from 'react';

import { ThemeColor, ThemeSize } from '../../types';

interface DividerProps {
  className?: string;
  color?: ThemeColor;
  size?: ThemeSize;
  spacing?: ThemeSize;
}

const COLOR_MAP: Record<ThemeColor, string> = {
  [ThemeColor.Dark]: 'bg-darkSecondary',
  [ThemeColor.Light]: 'bg-lightSecondary',
};

export const SIZE_MAP: Partial<Record<ThemeSize, string>> = {
  [ThemeSize.Sm]: 'h-4 lg:h-5 w-12 lg:w-13',
  [ThemeSize.Md]: 'h-5 lg:h-6 w-13 lg:w-14',
};

export const SPACING_MAP: Partial<Record<ThemeSize, string>> = {
  [ThemeSize.Sm]: 'mt-10 mb-11 lg:mt-11 lg:mb-12',
  [ThemeSize.Md]: 'mt-11 mb-12 lg:mt-12 lg:mb-13',
};

const Divider: React.FC<React.PropsWithChildren<DividerProps>> = ({
  className,
  color = ThemeColor.Dark,
  size = ThemeSize.Md,
  spacing = ThemeSize.Md,
}) => <hr className={clsx('border-0', COLOR_MAP[color], SIZE_MAP[size], SPACING_MAP[spacing], className)} />;

export default Divider;
