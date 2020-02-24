import React from 'react';

const FormInput = ({ children, className, id, name, type = 'text', onChange, ...props }) => {

  let formInputClassName = 'form-input';

  if ( className ) {
    formInputClassName = `${formInputClassName} ${className}`;
  }

  if ( !id && name ) {
    id = name;
  }

  if ( !name && id ) {
    name = id;
  }

  if ( typeof id === 'undefined' ) {
    console.warn('Missing ID in FormInput');
  }

  if ( typeof name === 'undefined' ) {
    console.warn('Missing ID in FormInput');
  }

  function handleOnChange(e) {
    if ( typeof onChange === 'function') {
      onChange(e);
    }
  }

  return (
    <span className={formInputClassName}>
      <label className="form-label" for={id}>{ children }</label>
      <input className="form-input-control" id={id} type={type} name={`${id}-w`} onChange={handleOnChange} {...props} />
    </span>
  );

}

export default FormInput;