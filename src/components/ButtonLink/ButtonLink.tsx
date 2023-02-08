import clsx from 'clsx';
import { Link } from 'gatsby';
import { OutboundLink } from 'gatsby-plugin-google-gtag';
import React from 'react';

import { ThemeColor, ThemeSize } from '../../types';
import { Button } from '../Button';

interface ButtonLinkProps {
  buttonClassName?: string;
  buttonSpanClassName?: string;
  className?: string;
  color?: ThemeColor;
  disabled?: boolean;
  href: string;
  outbound?: boolean;
  size?: ThemeSize;
}

const ButtonLink: React.FC<React.PropsWithChildren<ButtonLinkProps>> = ({
  buttonClassName,
  buttonSpanClassName,
  children,
  className,
  color = ThemeColor.Gold,
  disabled,
  href,
  outbound = false,
  size = ThemeSize.Md,
  ...props
}) => {
  const classNames = clsx('border-none inline-block', className);
  const buttonEl = (
    <Button
      className={buttonClassName}
      color={color}
      disabled={disabled}
      semantic={false}
      size={size}
      spanClassName={buttonSpanClassName}
    >
      {children}
    </Button>
  );

  if (!outbound) {
    return (
      <Link aria-disabled={disabled} className={classNames} to={href} {...props}>
        {buttonEl}
      </Link>
    );
  }

  return (
    <OutboundLink className={classNames} disabled={disabled} href={href} target="_blank" {...props}>
      {buttonEl}
    </OutboundLink>
  );
};

export default ButtonLink;
