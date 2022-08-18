import clsx from 'clsx';
import React from 'react';

import * as styles from './HeroImage.module.css';

interface HeroImageProps {
  className?: string;
  image: React.ReactNode;
}

const HeroImage: React.FC<HeroImageProps> = ({ children, className, image }) => {
  return (
    <div className={clsx(className, 'grid w-full h-screen p-9')}>
      {image}
      <div className={styles.heroImageArea}>{children}</div>
    </div>
  );
};

export default HeroImage;
