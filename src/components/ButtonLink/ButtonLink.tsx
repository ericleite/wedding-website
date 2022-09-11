import clsx from 'clsx';
import { Link } from 'gatsby';
import { OutboundLink } from 'gatsby-plugin-google-gtag';
import React from 'react';

import { ThemeColor, ThemeSize } from '../../types';
import { Button } from '../Button';

interface ButtonLinkProps {
  className?: string;
  color?: ThemeColor;
  href: string;
  outbound?: boolean;
  size?: ThemeSize;
}

const ButtonLink: React.FC<React.PropsWithChildren<ButtonLinkProps>> = ({
  children,
  className,
  color = ThemeColor.Gold,
  href,
  outbound = false,
  size = ThemeSize.Md,
  ...props
}) => {
  const classNames = clsx('border-none inline-block', className);

  const buttonEl = (
    <Button color={color} semantic={false} size={size}>
      {children}
    </Button>
  );

  if (!outbound) {
    return (
      <Link className={classNames} to={href} {...props}>
        {buttonEl}
      </Link>
    );
  }

  return (
    <OutboundLink className={classNames} href={href} target="_blank" {...props}>
      {buttonEl}
    </OutboundLink>
  );
};

export default ButtonLink;
