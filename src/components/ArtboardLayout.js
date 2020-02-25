import React from 'react';
import PropTypes from 'prop-types';

import ArtboardChild from 'components/ArtboardChild';

const ArtboardLayout = ({ children }) => {
  return (
    <ArtboardChild className="artboard-layout">
      { children }
    </ArtboardChild>
  )
};

ArtboardLayout.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ])
}

export default ArtboardLayout;