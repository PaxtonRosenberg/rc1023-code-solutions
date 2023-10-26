/* exported toObject */
/* PSEUDOCODE:
Define a function named 'toObject' that accepts one arguement, 'keyValuePair', which is an array containing two elements, a string and any other value type
Declare a variable named 'newObject' and assign its value to and object containing an array 'keyValuePair' at index 0 and keyValuePair at index 1
Return the 'newObject' variable

/* toObject Function */
function toObject(keyValuePair) {
  const newObject = { [keyValuePair[0]]: keyValuePair[1] };
  return newObject;
}
