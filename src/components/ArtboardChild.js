import React from 'react';

const ArtboardChild = ({ children, className }) => {
  let childClassName = 'artboard-child';

  if ( className ) {
    childClassName = `${childClassName} ${className}`;
  }

  return (
    <div className={childClassName}>
      { children }
    </div>
  )
};

export default ArtboardChild;