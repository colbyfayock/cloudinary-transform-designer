import React from 'react';
import PropTypes from 'prop-types';

import { useClassName } from 'hooks';

const ArtboardColumn = ({ children, className }) => {
  const { componentClassName } = useClassName({
    component: 'artboard-column',
    additionalParent: className
  });

  return (
    <div className={componentClassName}>
      { children }
    </div>
  )
};

ArtboardColumn.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ]),
  className: PropTypes.string
}

export default ArtboardColumn;