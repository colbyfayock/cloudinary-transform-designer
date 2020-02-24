import React from 'react';

import { useClassName } from 'hooks';

const PanelSection = ({ children, className }) => {

  const { componentClassName } = useClassName({
    component: 'panel-section',
    additionalParent: className
  });

  return (
    <div className={componentClassName}>
      { children }
    </div>
  )
};

export default PanelSection;