import clsx from 'clsx';
import React, { useCallback, useState } from 'react';

export interface ExpandableContentProps {
  className?: string;
}

const ExpandableContent: React.FC<React.PropsWithChildren<ExpandableContentProps>> = ({ children, className }) => {
  const [isOpen, setIsOpen] = useState(false);

  const openContent = useCallback(() => {
    setIsOpen(true);
  }, []);

  return (
    <div className={clsx('relative', !isOpen && 'line-clamp-3 pb-11', className)} onClick={openContent}>
      {children}
      {!isOpen && (
        <>
          <div className="absolute top-0 w-full h-full bg-gradient-to-t from-sand pointer-events-none" />
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 flex justify-center w-full bg-sand">
            <a
              className="border-none cursor-pointer py-4 text-small tracking-widest uppercase"
              onClick={(e) => {
                e.preventDefault();
                openContent();
              }}
            >
              + show more
            </a>
          </div>
        </>
      )}
    </div>
  );
};

export default ExpandableContent;
