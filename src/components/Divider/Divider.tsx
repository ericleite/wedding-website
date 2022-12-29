import clsx from 'clsx';
import React, { CSSProperties, forwardRef } from 'react';

import { ThemeColor, ThemeSize } from '../../types';

export interface DividerProps {
  className?: string;
  color?: ThemeColor;
  size?: ThemeSize;
  spacing?: ThemeSize;
  style?: CSSProperties;
}

export const COLOR_MAP: Partial<Record<ThemeColor, string>> = {
  [ThemeColor.Dark]: 'bg-darkTertiary',
  [ThemeColor.Light]: 'bg-lightTertiary',
  [ThemeColor.ExtraLight]: 'bg-lightSecondary',
};

export const SIZE_MAP: Partial<Record<ThemeSize, string>> = {
  [ThemeSize.Sm]: 'h-1 lg:h-2 w-12 lg:w-13',
  [ThemeSize.Md]: 'h-2 lg:h-3 w-13 lg:w-14',
  [ThemeSize.Lg]: 'h-3 lg:h-4 w-14 lg:w-15',
};

export const SPACING_MAP: Partial<Record<ThemeSize, string>> = {
  [ThemeSize.Sm]: 'mt-9 mb-10 lg:mt-10 lg:mb-11',
  [ThemeSize.Md]: 'mt-10 mb-11 lg:mt-11 lg:mb-12',
  [ThemeSize.Lg]: 'mt-11 mb-12 lg:mt-12 lg:mb-13',
};

const Divider = forwardRef<HTMLHRElement, React.PropsWithChildren<DividerProps>>(
  ({ className, color = ThemeColor.Dark, size = ThemeSize.Md, spacing = ThemeSize.Md, style }, ref) => (
    <hr
      ref={ref}
      className={clsx('border-0', COLOR_MAP[color], SIZE_MAP[size], SPACING_MAP[spacing], className)}
      style={style}
    />
  ),
);

Divider.displayName = 'Divider';

export default Divider;
