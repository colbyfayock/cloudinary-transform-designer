import React from 'react';
import PropTypes from 'prop-types';

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

PanelSection.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ]),
  className: PropTypes.string
}

export default PanelSection;