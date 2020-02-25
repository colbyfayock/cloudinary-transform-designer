import React from 'react';
import PropTypes from 'prop-types';

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

ArtboardChild.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ]),
  className: PropTypes.string
}

export default ArtboardChild;