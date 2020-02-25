import React from 'react';
import PropTypes from 'prop-types';

import { useClassName, useFormInput } from 'hooks';

const FormColor = ({ children, className, id: selectId, name: selectName, onChange, value, ...props }) => {
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
      <input className={childClassName('control')} id={id} name={name} type="color" onChange={handleOnChange} value={value || ''} {...props} />
    </span>
  );

}

FormColor.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ]),
  className: PropTypes.string,
  id: PropTypes.string,
  name: PropTypes.string,
  onChange: PropTypes.func
}

export default FormColor;