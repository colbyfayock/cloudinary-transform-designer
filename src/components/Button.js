import React from 'react';
import PropTypes from 'prop-types';

import { useClassName } from 'hooks';

const Button = ({ children, className, to, onClick }) => {
  const { componentClassName } = useClassName({
    component: 'button',
    additionalParent: className
  });

  function handleOnClick(e) {
    if ( typeof onClick === 'function' ) {
      onClick(e);
    }
  }

  const sharedProps = {
    className: componentClassName,
    onClick: handleOnClick
  }

  if ( to ) {
    return (
      <a href={to} rel="noopener" {...sharedProps}>
        { children }
      </a>
    )
  }

  return (
    <button {...sharedProps}>
      { children }
    </button>
  )

};

Button.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ]),
  className: PropTypes.string,
  to: PropTypes.string,
  onClick: PropTypes.func
}

export default Button;