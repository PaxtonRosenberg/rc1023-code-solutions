/* exported getValue */
/* PSEUDOCODE:
Define a function named 'getValue' that accepts two arguements, 'object' and 'key'
  Check if the 'key' in the 'object' is truthy
Return the value at that 'key' if truthy

/* getValue Function */
function getValue(object, key) {
  if (object[key]) {
    return object[key];
  }
}
