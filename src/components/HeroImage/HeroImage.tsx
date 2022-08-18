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
    <div className={clsx(className, 'grid w-full h-screen p-15')}>
      {image}
      <div className={clsx(contentClassName, styles.content)}>{children}</div>
    </div>
  );
};

export default HeroImage;
