import React from 'react';
import PropTypes from 'prop-types';

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

PanelRow.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ]),
  className: PropTypes.string
}

export default PanelRow;