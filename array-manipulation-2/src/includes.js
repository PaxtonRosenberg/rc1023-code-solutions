/* exported includes */
/* PSEUDOCODE:
Define a function named 'includes' that accepts 2 arguements, 'array' and 'count'
Declare a changeable variable named 'isThere' and assign its value to false
  Check if the array is emtpy
    if true, return 'isThere'
      For each index in 'array'
        check if the array value at each index is the same as value
          if true, return true and exit the loop
        Otherwise, isThere will be false
Return isThere
/*

/* includes Function */
function includes(array, value) {
  let isThere = false;

  if (array === []) {
    return isThere;
  }

  for (let i = 0; i < array.length; i++) {
    if (array[i] === value) {
      return true;
    } else {
      isThere = false;
    }
  }

  return isThere;
}
