import clsx from 'clsx';
import React from 'react';

import * as styles from './HeroImage.module.css';

interface HeroImageProps {
  className?: string;
  contentClassName?: string;
  image: React.ReactNode;
}

const HeroImage: React.FC<HeroImageProps> = ({ children, className, contentClassName, image }) => {
  return (
    <div className={clsx('grid w-full h-screen', className)}>
      {image}
      <div className={clsx(styles.content, contentClassName)}>{children}</div>
    </div>
  );
};

export default HeroImage;
