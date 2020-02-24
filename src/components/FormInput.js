import React from 'react';

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

export default FormInput;