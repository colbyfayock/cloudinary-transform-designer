import React from 'react';

import { useClassName } from 'hooks';

const PanelRow = ({ children, className }) => {

  const { componentClassName } = useClassName({
    component: 'panel-row',
    additionalParent: className
  });

  return (
    <div className={componentClassName}>
      { children }
    </div>
  )
};

export default PanelRow;