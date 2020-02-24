import React from 'react';

import PanelRow from 'components/PanelRow';
import PanelSection from 'components/PanelSection';
import Form from 'components/Form';
import FormInput from 'components/FormInput';

const ImageOptions = ({ id, options = {}, onChange }) => {

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
    <Form className="panel image-options" onChange={handleOnChange}>

      <PanelRow>
        <PanelSection>
          <div className="form-row">
            <FormInput name={`${id}-cloudName`} value={options.cloudName}>
              Cloud Name
            </FormInput>
            <FormInput name={`${id}-imageId`} value={options.imageId}>
              Image ID
            </FormInput>
          </div>
        </PanelSection>
      </PanelRow>

    </Form>
  );

}

export default ImageOptions;