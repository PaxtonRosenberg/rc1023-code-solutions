/* exported invert */
function invert(source) {
  const valuesArray = [];

  const propArray = [];

  const invertedObject = {};

  for (const key in source) {
    valuesArray.push(source[key]);

    propArray.push(key);
  }

  for (let i = 0; i < valuesArray.length; i++) {
    for (let i = 0; i < propArray.length; i++) {
      invertedObject[valuesArray[i]] = propArray[i];
    }
  }

  return invertedObject;
}
