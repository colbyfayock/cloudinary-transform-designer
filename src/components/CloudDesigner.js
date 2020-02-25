import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { FaPlus, FaTimes } from 'react-icons/fa';

import { arrayToObjectState, objectStateToArray } from 'lib/state';
import { useClassName } from 'hooks';

import Artboard from 'components/Artboard';
import ArtboardLayout from 'components/ArtboardLayout';
import ArtboardChild from 'components/ArtboardChild';
import ArtboardHeader from 'components/ArtboardHeader';
import AccountOptions from 'components/AccountOptions';
import ImageOptions from 'components/ImageOptions';
import TextOptions from 'components/TextOptions';
import CloudImage from 'components/CloudImage';
import Button from 'components/Button';

const DEFAULT_IMAGE_OPTIONS = {
  w: 1280,
  h: 640,
  c: 'fill',
  q: 'auto',
  f: 'auto'
};

const DEFAULT_TEXT_OPTION = {
  text: 'Your text here!',
  format: {
    font: 'Source Sans Pro',
    size: 70,
    lineSpacing: -10,
    weight: 'semibold'
  },
  options: {
    w: 860,
    c: 'fit',
    co: 'rgb:5E35B1',
    g: 'west',
    x: 80,
    y: -60,
  }
}

const DEFAULT_TEXT_OPTIONS = [DEFAULT_TEXT_OPTION];

const DEFAULT_TEXT_OPTIONS_STATE = arrayToObjectState(DEFAULT_TEXT_OPTIONS);

const CloudDesigner = ({
  className,
  accountOptions: defaultAccountOptions = {},
  imageOptions: defaultImageOptions = DEFAULT_IMAGE_OPTIONS,
  textOptions: defaultTextOptions = DEFAULT_TEXT_OPTIONS_STATE
}) => {

  const { componentClassName, childClassName } = useClassName({
    component: 'cloud-designer',
    additionalParent: className
  });

  const [accountOptions, updateAccountOptions] = useState(defaultAccountOptions);
  const [imageOptions, updateImageOptions] = useState(defaultImageOptions);
  const [textOptions, updateTextOptions] = useState(defaultTextOptions);

  const textOptionsArray = objectStateToArray(textOptions);

  const { cloudName, imageId } = accountOptions;
  const hasAccount = cloudName && imageId;

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

  /**
   * handleOnAddText
   */

  function handleOnAddText() {
    updateTextOptions(prev => {
      const prevLength = Object.keys(prev).length;
      return {
        ...prev,
        [prevLength]: DEFAULT_TEXT_OPTION
      }
    });
  }

  /**
   * handleOnTextRemove
   */

  function handleOnTextRemove({ index }) {
    updateTextOptions(prev => {
      const newStateKeys = Object.keys(prev).filter((key, i) => i !== index);
      const newState = {};

      newStateKeys.forEach((key, index) => {
        newState[index] = prev[key];
      });

      return newState;
    });
  }

  return (
    <Artboard className={componentClassName}>

      <ArtboardChild>
        <ArtboardHeader className="sr-only">Account Options</ArtboardHeader>
        <AccountOptions id="account" options={accountOptions} onChange={handleUpdateAccountOptions} />
      </ArtboardChild>

      <ArtboardLayout>
        {hasAccount && (
          <CloudImage cloudName={cloudName} imageId={imageId} options={imageOptions} text={textOptionsArray} />
        )}
        {!hasAccount && (
          <ArtboardChild>
            { !cloudName && (<p>Missing cloudName</p>)}
            { !imageId && (<p>Missing imageId</p>)}
          </ArtboardChild>
        )}
      </ArtboardLayout>

      <ArtboardChild>
        <ArtboardHeader>Image Options</ArtboardHeader>
        <ImageOptions id="image" options={imageOptions} onChange={handleOnImageOptionsChange} />
      </ArtboardChild>

      { Array.isArray(textOptionsArray) && textOptionsArray.map((options, index) => {
        const id = `text-${index}`;
        const actions = [
          {
            label: 'Remove',
            icon: <FaTimes />,
            onClick: () => handleOnTextRemove({ index })
          }
        ];
        return (
          <ArtboardChild key={id}>
            <ArtboardHeader actions={actions}>Text Options {index + 1}</ArtboardHeader>
            <TextOptions id={id} options={options} onChange={handleOnTextOptionschange} />
          </ArtboardChild>
        )
      })}

      <ArtboardChild className={childClassName('add-text')}>
        <Button className="button-icon-after button-primary" onClick={handleOnAddText}>
          Add New Text Line
          <FaPlus />
        </Button>
      </ArtboardChild>

    </Artboard>
  )
}

CloudDesigner.propTypes = {
  className: PropTypes.string
}

export default CloudDesigner;