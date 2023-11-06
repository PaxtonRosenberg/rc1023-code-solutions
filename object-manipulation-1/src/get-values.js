/* exported getValues */
/* PSEUDOCODE:
Define a function named 'getValues' that accepts one arguement, 'object'
Declare a variable named 'values' and assign its value to an empty array
  For each key in the 'object':
    Push the value at each key in the 'object' into the 'values' variable
Return the 'values' variable

/* getValues Function */
function getValues(object) {
  const values = [];
  for (const key in object) {
    values.push(object[key]);
  }
  return values;
}
