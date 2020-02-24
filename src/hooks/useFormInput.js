const isProd = process.env.NODE_ENV === 'production';

function useFormInput({ id, name }) {

  if ( !isValidIdentifier(id) && isValidIdentifier(name) ) {
    id = name;
  }

  if ( !isValidIdentifier(name) && isValidIdentifier(id) ) {
    name = id;
  }

  if ( !isProd && ( !isValidIdentifier(id) || !isValidIdentifier(name) ) ) {
    console.warn('useFormInput: Missing ID or Name');
  }

  return {
    id,
    name
  };

};

export default useFormInput;

/**
 * isValidIdentifier
 */

function isValidIdentifier(value) {
  return typeof value === 'string';
}