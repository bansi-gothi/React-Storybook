import React from 'react';
export interface CommonGridType {
  children?: React.ReactNode;
}

export const CommonGrid: React.FC<CommonGridType> = ({
  children,
  ...props
}) => {
  return (
    <div className="common-container">
      {children}
    </div>
  );
}