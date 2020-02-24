import React from 'react';

import { useClassName } from 'hooks';

const PanelSectionHeader = ({ children, className }) => {

  const { componentClassName } = useClassName({
    component: 'panel-section-header',
    additionalParent: className
  });

  return (
    <h3 className={componentClassName}>
      <span>{ children }</span>
    </h3>
  );
};

export default PanelSectionHeader;