import React from 'react';

import Form from 'components/Form';
import FormInput from 'components/FormInput';

const OptionsPanel = ({ id, options = {}, onChange }) => {

  function handleOnChange(e = {}) {
    const { target = {} } = e;
    const { value: targetValue, name: targetName } = target;
    const optionValue = targetValue.replace(`${id}-`, '');
    const optionName = targetName.replace(`${id}-`, '');

    const data = {
      panelId: id,
      optionValue,
      optionName
    };

    if ( typeof onChange === 'function' ) {
      onChange(data, e);
    }
  }

  return (
    <Form className="options-panel" onChange={handleOnChange}>
      <div className="panel-section">
        <h2 className="panel-section-header"><span>Size</span></h2>
        <div className="form-row">
          <FormInput name={`${id}-w`} type="number" value={options.w}>
            Width
          </FormInput>
          <FormInput name={`${id}-h`} type="number" value={options.h}>
            Height
          </FormInput>
        </div>
      </div>
    </Form>
  );

}

export default OptionsPanel;