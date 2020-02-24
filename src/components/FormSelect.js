import React from 'react';

import { useClassName, useFormInput } from 'hooks';

const FormSelect = ({ children, className, id: selectId, name: selectName, value: selectValue, options = [], onChange, ...props }) => {

  const { componentClassName, childClassName } = useClassName({
    component: 'form-select',
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
      <select className={childClassName('control')} id={id} name={name} defaultValue={selectValue} onBlur={handleOnChange} {...props}>
        { Array.isArray(options) && options.map(({value, label} = {}, index) => {
          return <option key={`${childClassName('control')}-${index}`} value={value}>{ label || value }</option>;
        }) }
      </select>
    </span>
  );

}

export default FormSelect;