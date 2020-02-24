import React from 'react';

import ArtboardChild from 'components/ArtboardChild';

const ArtboardLayout = ({ children }) => {
  return (
    <ArtboardChild className="artboard-layout">
      { children }
    </ArtboardChild>
  )
};

export default ArtboardLayout;