import clsx from 'clsx';
import React from 'react';

import { ThemeColor, ThemeSize } from '../../types';

interface DividerProps {
  className?: string;
  color?: ThemeColor;
  size?: ThemeSize;
  spacing?: ThemeSize;
}

export const COLOR_MAP: Partial<Record<ThemeColor, string>> = {
  [ThemeColor.Dark]: 'bg-darkTertiary',
  [ThemeColor.Light]: 'bg-lightTertiary',
};

export const SIZE_MAP: Partial<Record<ThemeSize, string>> = {
  [ThemeSize.Sm]: 'h-3 lg:h-4 w-12 lg:w-13',
  [ThemeSize.Md]: 'h-4 lg:h-5 w-13 lg:w-14',
  [ThemeSize.Lg]: 'h-5 lg:h-6 w-14 lg:w-15',
};

export const SPACING_MAP: Partial<Record<ThemeSize, string>> = {
  [ThemeSize.Sm]: 'mt-9 mb-10 lg:mt-10 lg:mb-11',
  [ThemeSize.Md]: 'mt-10 mb-11 lg:mt-11 lg:mb-12',
  [ThemeSize.Lg]: 'mt-11 mb-12 lg:mt-12 lg:mb-13',
};

const Divider: React.FC<React.PropsWithChildren<DividerProps>> = ({
  className,
  color = ThemeColor.Dark,
  size = ThemeSize.Md,
  spacing = ThemeSize.Md,
}) => <hr className={clsx('border-0', COLOR_MAP[color], SIZE_MAP[size], SPACING_MAP[spacing], className)} />;

export default Divider;
