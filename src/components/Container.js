import React from 'react';
import PropTypes from 'prop-types';

const Container = ({children, type = []}) => {
  let containerClassName = 'container';

  if ( !Array.isArray(type) ) type = [type];

  containerClassName = `${containerClassName} ${type.map(t => `container-${t}`).join(' ')}`

  return (
    <div className={containerClassName}>
      { children }
    </div>
  );
};

Container.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ]),
  type: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.string),
    PropTypes.string
  ]),
};

export default Container;