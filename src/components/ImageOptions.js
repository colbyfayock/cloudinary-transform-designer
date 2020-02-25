import React from 'react';
import PropTypes from 'prop-types';

import { TRANSFORM_WIDTH, TRANSFORM_HEIGHT, TRANSFORM_CROP, TRANSFORM_QUALITY, TRANSFORM_FORMAT } from 'data/transformations';

import PanelRow from 'components/PanelRow';
import PanelSection from 'components/PanelSection';
import PanelSectionHeader from 'components/PanelSectionHeader';
import Form from 'components/Form';
import FormInput from 'components/FormInput';
import FormSelect from 'components/FormSelect';

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

        <PanelSection className="image-options-size">

          <PanelSectionHeader>Size</PanelSectionHeader>

          <div className="form-row">
            <FormInput name={`${id}-${TRANSFORM_WIDTH.param}`} type={TRANSFORM_WIDTH.type} value={options.w}>
              { TRANSFORM_WIDTH.label }
            </FormInput>
            <FormInput name={`${id}-${TRANSFORM_HEIGHT.param}`} type={TRANSFORM_HEIGHT.type} value={options.h}>
              { TRANSFORM_HEIGHT.label }
            </FormInput>
          </div>

        </PanelSection>

        <PanelSection className="image-options-format">

          <PanelSectionHeader>Format</PanelSectionHeader>

          <div className="form-row">
            <FormSelect name={`${id}-${TRANSFORM_CROP.param}`} options={TRANSFORM_CROP.options} value={options.c}>
              { TRANSFORM_CROP.label }
            </FormSelect>
            <FormSelect name={`${id}-${TRANSFORM_QUALITY.param}`} options={TRANSFORM_QUALITY.options} value={options.q}>
              { TRANSFORM_QUALITY.label }
            </FormSelect>
            <FormSelect name={`${id}-${TRANSFORM_FORMAT.param}`} options={TRANSFORM_FORMAT.options} value={options.f}>
              { TRANSFORM_FORMAT.label }
            </FormSelect>
          </div>

        </PanelSection>

      </PanelRow>

    </Form>
  );

}

ImageOptions.propTypes = {
  id: PropTypes.string,
  options: PropTypes.object,
  onChange: PropTypes.func
}

export default ImageOptions;