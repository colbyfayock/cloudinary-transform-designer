import React, { useState } from 'react';

import Artboard from 'components/Artboard';
import ArtboardLayout from 'components/ArtboardLayout';
import OptionsPanel from 'components/OptionsPanel';
import CloudImage from 'components/CloudImage';

const DEFAULT_IMAGE_OPTIONS = {
  w: 1280,
  h: 640,
  c: 'fill',
  q: 'auto',
  f: 'auto'
};

const DEFAULT_TEXT_OPTIONS = [
  {
    text: 'What is the JAMstack and how do I get started?',
    format: {
      font: 'Source Sans Pro',
      size: 70,
      lineSpacing: -10,
      weight: 'semibold'
    },
    options: {
      w: 860,
      c: 'fit',
      co: 'rgb:232129',
      g: 'south_west',
      x: 80,
      y: 180,
    }
  }
];

const DEFAULT_TEXT_OPTIONS_STATE = arrayToObjectState(DEFAULT_TEXT_OPTIONS);

const CloudDesigner = () => {

  const [imageOptions, updateImageOptions] = useState(DEFAULT_IMAGE_OPTIONS);
  const [textOptions, updateTextOptions] = useState(DEFAULT_TEXT_OPTIONS_STATE);

  const textOptionsArray = objectStateToArray(textOptions);

  function handleOnImageOptionsChange({ optionName, optionValue } = {}) {
    updateImageOptions(prev => {
      return {
        ...prev,
        [optionName]: optionValue
      }
    });
  }

  return (
    <Artboard className="cloud-designer">
      <ArtboardLayout>
        <CloudImage cloudName="fay" imageId="blog-social-card-1.0" options={imageOptions} text={textOptionsArray} />
      </ArtboardLayout>
      <div className="artboard-child">
        <OptionsPanel id="image" options={imageOptions} onChange={handleOnImageOptionsChange} />
      </div>
    </Artboard>
  )
}

export default CloudDesigner;

/**
 * arrayToObjectState
 */

function arrayToObjectState(array) {
  const state = {};
  array.forEach((item, index) => state[index] = item);
  return state;
}

/**
 * objectStateToArray
 */

function objectStateToArray(objectState) {
  const keys = Object.keys(objectState).sort();
  return keys.map(key => objectState[key]);
}

