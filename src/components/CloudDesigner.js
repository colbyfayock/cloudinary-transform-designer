import React, { useState } from 'react';

import { arrayToObjectState, objectStateToArray } from 'lib/state';

import Artboard from 'components/Artboard';
import ArtboardLayout from 'components/ArtboardLayout';
import AccountOptions from 'components/AccountOptions';
import ImageOptions from 'components/ImageOptions';
import TextOptions from 'components/TextOptions';
import CloudImage from 'components/CloudImage';

const DEFAULT_ACCOUNT_OPTIONS = {
  cloudName: 'fay',
  imageId: 'blog-social-card-1.0'
}

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

  const [accountOptions, updateAccountOptions] = useState(DEFAULT_ACCOUNT_OPTIONS);
  const [imageOptions, updateImageOptions] = useState(DEFAULT_IMAGE_OPTIONS);
  const [textOptions, updateTextOptions] = useState(DEFAULT_TEXT_OPTIONS_STATE);

  const textOptionsArray = objectStateToArray(textOptions);

  const { cloudName, imageId } = accountOptions;

  /**
   * handleUpdateAccountOptions
   */

  function handleUpdateAccountOptions({ optionName, optionValue } = {}) {
    updateAccountOptions(prev => {
      return {
        ...prev,
        [optionName]: optionValue
      }
    });
  }

  /**
   * handleOnImageOptionsChange
   */

  function handleOnImageOptionsChange({ optionName, optionValue } = {}) {
    updateImageOptions(prev => {
      return {
        ...prev,
        [optionName]: optionValue
      }
    });
  }

  /**
   * handleOnTextOptionschange
   */

  function handleOnTextOptionschange({ panelId, optionName, optionValue }) {
    const textIndex = panelId.replace('text-', '');
    const optionNameSplit = optionName.split('-');
    const textStateCategory = optionNameSplit[0];

    updateTextOptions(prev => {
      const newState = {
        ...prev,
        [textIndex]: {
          ...prev[textIndex]
        }
      }

      if ( textStateCategory === 'text' ) {
        newState[textIndex] = {
          ...newState[textIndex],
          text: optionValue
        }
      } else if (optionNameSplit[1]) {
        newState[textIndex] = {
          ...newState[textIndex],
          [textStateCategory]: {
            ...newState[textIndex][textStateCategory],
            [optionNameSplit[1]]: optionValue
          }
        }
      }

      return newState
    })
  }

  return (
    <Artboard className="cloud-designer">

      <div className="artboard-child">
        <h2 className="artboard-header sr-only">Account Options</h2>
        <AccountOptions id="account" options={accountOptions} onChange={handleUpdateAccountOptions} />
      </div>

      <ArtboardLayout>
        <CloudImage cloudName={cloudName} imageId={imageId} options={imageOptions} text={textOptionsArray} />
      </ArtboardLayout>

      <div className="artboard-child">
        <h2 className="artboard-header">Image Options</h2>
        <ImageOptions id="image" options={imageOptions} onChange={handleOnImageOptionsChange} />
      </div>

      { Array.isArray(textOptionsArray) && textOptionsArray.map((options, index) => {
        const id = `text-${index}`;
        return (
          <div key={id} className="artboard-child">
            <h2 className="artboard-header">Text Options {index + 1}</h2>
            <TextOptions id={id} options={options} onChange={handleOnTextOptionschange} />
          </div>
        )
      })}
    </Artboard>
  )
}

export default CloudDesigner;


