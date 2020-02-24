import React from 'react';

const Form = ({ children, className, onChange }) => {

  let formClassName = 'form';

  if ( className ) {
    formClassName = `${formClassName} ${className}`;
  }

  function handleOnChange(e) {
    if ( typeof onChange === 'function') {
      onChange(e);
    }
  }

  return (
    <form className={formClassName} onChange={handleOnChange}>
      { children }
    </form>
  );
}

export default Form;