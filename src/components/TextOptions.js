import React from 'react';

import {
  TRANSFORM_WIDTH,
  TRANSFORM_POSITION_X,
  TRANSFORM_POSITION_Y,
  TRANSFORM_CROP,
  TRANSFORM_GRAVITY,
  TRANSFORM_COLOR,
  TRANSFORM_TEXT_FONT,
  TRANSFORM_TEXT_SIZE,
  TRANSFORM_TEXT_LINESPACING,
  TRANSFORM_TEXT_WEIGHT
} from 'data/transformations';

import PanelRow from 'components/PanelRow';
import PanelSection from 'components/PanelSection';
import PanelSectionHeader from 'components/PanelSectionHeader';
import Form from 'components/Form';
import FormInput from 'components/FormInput';
import FormSelect from 'components/FormSelect';

const TextOptions = ({ id, options: textOptions = {}, onChange }) => {

  const { text, format, options } = textOptions;

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
    <Form className="panel text-options" onChange={handleOnChange}>

      <PanelRow>
        <PanelSection>

          <div className="form-row">
            <FormInput name={`${id}-text`} value={text}>
              Text
            </FormInput>
          </div>

        </PanelSection>
      </PanelRow>

      <PanelRow>

        <PanelSection className="text-options-size">
          <PanelSectionHeader>Size</PanelSectionHeader>

          <div className="form-row">
            <FormInput name={`${id}-options-${TRANSFORM_WIDTH.param}`} type={TRANSFORM_WIDTH.type} value={options.w}>
              { TRANSFORM_WIDTH.label }
            </FormInput>
          </div>
        </PanelSection>

        <PanelSection className="text-options-position">

          <PanelSectionHeader>Position</PanelSectionHeader>

          <div className="form-row">
            <FormInput name={`${id}-options-${TRANSFORM_POSITION_X.param}`} type={TRANSFORM_POSITION_X.type} value={options.x}>
              { TRANSFORM_POSITION_X.label }
            </FormInput>
            <FormInput name={`${id}-options-${TRANSFORM_POSITION_Y.param}`} type={TRANSFORM_POSITION_Y.type} value={options.y}>
              { TRANSFORM_POSITION_Y.label }
            </FormInput>
          </div>

        </PanelSection>

        <PanelSection className="text-options-format">

          <PanelSectionHeader>Format</PanelSectionHeader>

          <div className="form-row">
            <FormSelect name={`${id}-options-${TRANSFORM_CROP.param}`} options={TRANSFORM_CROP.options} value={options.c}>
              { TRANSFORM_CROP.label }
            </FormSelect>
            <FormSelect name={`${id}-options-${TRANSFORM_GRAVITY.param}`} options={TRANSFORM_GRAVITY.options} value={options.q}>
              { TRANSFORM_GRAVITY.label }
            </FormSelect>
            <FormInput name={`${id}-options-${TRANSFORM_COLOR.param}`} type={TRANSFORM_COLOR.type} value={options.co}>
              { TRANSFORM_COLOR.label }
            </FormInput>
          </div>

        </PanelSection>

      </PanelRow>

      <PanelRow>

        <PanelSection>

          <PanelSectionHeader>Font Style</PanelSectionHeader>

          <div className="form-row">
            <FormInput name={`${id}-format-${TRANSFORM_TEXT_FONT.param}`} type={TRANSFORM_TEXT_FONT.type} value={format.font}>
              { TRANSFORM_TEXT_FONT.label }
            </FormInput>

            <FormInput name={`${id}-format-${TRANSFORM_TEXT_SIZE.param}`} type={TRANSFORM_TEXT_SIZE.type} value={format.size}>
              { TRANSFORM_TEXT_SIZE.label }
            </FormInput>

            <FormInput name={`${id}-format-${TRANSFORM_TEXT_WEIGHT.param}`} type={TRANSFORM_TEXT_WEIGHT.type} value={format.weight}>
              { TRANSFORM_TEXT_WEIGHT.label }
            </FormInput>

            <FormInput name={`${id}-format-${TRANSFORM_TEXT_LINESPACING.param}`} type={TRANSFORM_TEXT_LINESPACING.type} value={format.lineSpacing}>
              { TRANSFORM_TEXT_LINESPACING.label }
            </FormInput>
          </div>

        </PanelSection>

      </PanelRow>

    </Form>
  );

}

export default TextOptions;