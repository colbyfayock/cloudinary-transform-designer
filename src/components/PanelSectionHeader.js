import React from 'react';
import PropTypes from 'prop-types';

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


PanelSectionHeader.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ]),
  className: PropTypes.string
}

export default PanelSectionHeader;