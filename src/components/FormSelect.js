import React from 'react';
import PropTypes from 'prop-types';

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

FormSelect.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ]),
  className: PropTypes.string,
  id: PropTypes.string,
  name: PropTypes.string,
  value: PropTypes.string,
  options: PropTypes.array,
  onChange: PropTypes.func
}

export default FormSelect;