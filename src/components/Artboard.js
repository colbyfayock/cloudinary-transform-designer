import React from 'react';
import PropTypes from 'prop-types';

import { useClassName } from 'hooks';

const Artboard = ({ children, className }) => {
  const { componentClassName } = useClassName({
    component: 'artboard',
    additionalParent: className
  });

  return (
    <section className={componentClassName}>
      { children }
    </section>
  )
}

Artboard.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ]),
  className: PropTypes.string
}

export default Artboard;