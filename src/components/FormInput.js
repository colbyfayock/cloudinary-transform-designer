import React from 'react';
import PropTypes from 'prop-types';

import { useClassName, useFormInput } from 'hooks';

const FormInput = ({ children, className, id: selectId, name: selectName, type = 'text', onChange, ...props }) => {

  const { componentClassName, childClassName } = useClassName({
    component: 'form-input',
    additionalParent: className
  });

  const { id, name } = useFormInput({
    id: selectId,
    name: selectName
  });

  function handleOnChange(e) {
    if ( typeof onChange === 'function') {
      onChange(e);
    }
  }

  return (
    <span className={componentClassName}>
      <label className="form-label" htmlFor={id}>{ children }</label>
      <input className={childClassName('control')} id={id} type={type} name={name} onChange={handleOnChange} {...props} />
    </span>
  );

}

FormInput.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ]),
  className: PropTypes.string,
  id: PropTypes.string,
  name: PropTypes.string,
  type: PropTypes.string,
  onChange: PropTypes.func
}

export default FormInput;