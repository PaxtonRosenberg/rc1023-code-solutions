/* exported defaults */
/* PSUEDOCODE:
This function should assign key value pairs from 'source'
that are not defined in 'target' to 'target'
while not overriding existing values in 'target'

Define a function named defaults thats accepts two arguements:
  1. an object 'target'
  2. an object 'source'

For each property in 'source':
  Check if that property has a value in 'target'
    If the value is not defined, add it into 'target'

    */

function defaults(target, source) {
  for (const key in source) {
    if (target[key] === undefined) {
      target[key] = source[key];
    }
  }
}
