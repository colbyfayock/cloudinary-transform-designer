import React from 'react';

import { useClassName } from 'hooks';

const ArtboardChild = ({ children, className }) => {
  const { componentClassName } = useClassName({
    component: 'artboard-child',
    additionalParent: className
  });

  return (
    <div className={componentClassName}>
      { children }
    </div>
  )
};

export default ArtboardChild;