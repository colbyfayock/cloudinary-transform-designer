import React from 'react';

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

export default Form;