/**
 * TimelineSection contains the standard layout of an entry in a timeline layout.
 */

import clsx from 'clsx';
import React from 'react';

import HeartSVG from '../../assets/images/accents/heart.inline.svg';

export enum TimelineSectionOrientation {
  Left,
  Right,
}

interface TimelineSectionProps {
  body?: React.ReactNode;
  className?: string;
  date: string;
  image: React.ReactNode;
  orientation?: TimelineSectionOrientation;
  title: string;
}

const leftClassNames = '2xl:text-right 2xl:order-1';
const rightClassNames = '2xl:text-left 2xl:order-2';

const TimelineSection: React.FC<TimelineSectionProps> = ({
  body,
  className,
  date,
  image,
  orientation = TimelineSectionOrientation.Left,
  title,
}) => (
  <section className={clsx('grid grid-cols-1 gap-11 relative lg:gap-13 2xl:gap-15 2xl:grid-cols-2', className)}>
    <HeartSVG className="absolute top-8 left-1/2 -translate-x-1/2 w-10 h-10 p-5 box-content text-maroonTertiary bg-sand" />
    <div className={orientation === TimelineSectionOrientation.Left ? rightClassNames : leftClassNames}>{image}</div>
    <div
      className={clsx(
        'text-center',
        orientation === TimelineSectionOrientation.Left ? leftClassNames : rightClassNames,
      )}
    >
      <h5 className="mb-8 lg:mb-9">{title}</h5>
      <h6 className="text-darkTertiary font-stylized mb-10 lg:mb-11">{date}</h6>
      {body}
    </div>
  </section>
);

export default TimelineSection;
