import React from 'react';

interface ChevronDownIconProps {
  className?: string;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
}

const ChevronDownIcon: React.FC<ChevronDownIconProps> = ({ className = 'w-12 h-12', onClick }) => {
  return (
    <i aria-label="Click to expand" className={className} onClick={onClick}>
      <svg fill="none" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M6.34317 7.75732L4.92896 9.17154L12 16.2426L19.0711 9.17157L17.6569 7.75735L12 13.4142L6.34317 7.75732Z"
          fill="currentColor"
        />
      </svg>
    </i>
  );
};

export default ChevronDownIcon;
