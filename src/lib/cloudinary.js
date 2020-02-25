const DEFAULT_HOST = 'https://res.cloudinary.com';

const DEFAULT_FORMAT_OPTIONS = {
  font: {
    transformer: (value) => encodeURIComponent(value)
  },
  lineSpacing: {
    transformer: (value) => `line_spacing_${value}`
  }
}

/**
 * contructCloudinaryUrl
 */

export function contructCloudinaryUrl({ host = DEFAULT_HOST, cloudName, imageId, options = {}, text = [] } = {}) {
  const errorBase = 'Could not contruct cloudinary URL';

  if ( typeof cloudName !== 'string' ) {
    throw new Error(`${errorBase}: Invalid cloud name ${cloudName}`);
  }

  if ( typeof imageId !== 'string' ) {
    throw new Error(`${errorBase}: Invalid cloud name ${imageId}`);
  }

  if ( text && !Array.isArray(text) ) text = [text];

  let url = `${host}/${cloudName}/image/upload`;

  const optionsString = optionsToString(options);
  const textArray = text.map(option => linesToString(option));

  if ( optionsString ) {
    url = `${url}/${optionsString}`;
  }

  if ( textArray && textArray.length > 0 ) {
    url = `${url}/${textArray.join('/')}`;
  }


  return `${url}/${imageId}`
}

/**
 * linesToString
 */

export function linesToString(lines = []) {
  const errorBase = 'Failed to transform text to string';

  if ( !lines ) return undefined;
  if ( !Array.isArray(lines) ) lines = [lines];

  return lines.map((line = {}) => {
    const { text, format = {}, options = {} } = line;

    if ( typeof text !== 'string' ) {
      throw new Error(`${errorBase}: Invalid text ${text}`);
    }

    const optionsString = optionsToString(options);
    const formatOptions = formatToString(format);
    const encodedText = encodeURIComponent(text);

    return `${optionsString},l_text:${formatOptions}:${encodedText}`;
  }).join('/');
}

/**
 * optionsToString
 */

export function optionsToString(options = []) {
  if ( !options ) return undefined;
  if ( !Array.isArray(options) ) options = [options];
  return options.map(option => {
    return Object.keys(option).map(key => `${key}_${option[key]}`);
  }).join(',');
}

/**
 * optionsToString
 */

export function formatToString(options = {}) {
  return Object.keys(options).map(key => {
    const optionConfig = DEFAULT_FORMAT_OPTIONS[key];
    const isFunction = optionConfig && typeof optionConfig.transformer === 'function';

    if ( isFunction ) {
      return optionConfig.transformer(options[key]);
    }

    return options[key];
  }).join('_');
}

/**
 * hexToCloudinaryRgb
 */

export function hexToCloudinaryRgb(hex){
  return hex.replace('#', 'rgb:');
}

/**
 * cloudinaryRgbToHex
 */

export function cloudinaryRgbToHex(rgb){
  return rgb.replace('rgb:', '#');
}
