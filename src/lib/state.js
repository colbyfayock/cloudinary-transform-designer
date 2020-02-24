
/**
 * arrayToObjectState
 */

export function arrayToObjectState(array) {
  const state = {};
  array.forEach((item, index) => state[index] = item);
  return state;
}

/**
 * objectStateToArray
 */

export function objectStateToArray(objectState) {
  const keys = Object.keys(objectState).sort();
  return keys.map(key => objectState[key]);
}