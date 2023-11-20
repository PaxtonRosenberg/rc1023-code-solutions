/* exported omit */
function omit(source, keys) {
  const newObject = {};

  let shouldOmit;

  for (const key in source) {
    shouldOmit = true;

    for (let i = 0; i < keys.length; i++) {
      if (key === keys[i]) {
        shouldOmit = false;

        break;
      }
    }

    if (shouldOmit) {
      newObject[key] = source[key];
    }
  }

  return newObject;
}
