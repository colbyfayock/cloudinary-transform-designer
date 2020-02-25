import React from 'react';
import PropTypes from 'prop-types';

import { useClassName } from 'hooks';

const Form = ({ children, className, onChange }) => {
  const { componentClassName } = useClassName({
    component: 'form',
    additionalParent: className
  });

  function handleOnChange(e) {
    if ( typeof onChange === 'function') {
      onChange(e);
    }
  }

  return (
    <form className={componentClassName} onChange={handleOnChange}>
      { children }
    </form>
  );
}

Form.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ]),
  className: PropTypes.string,
  onChange: PropTypes.func
}

export default Form;