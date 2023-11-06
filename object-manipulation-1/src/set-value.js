/* exported setValue */
/* PSEUDOCODE:
Define a function named 'setValue' that accepts three arguements, 'object', 'key' and 'value'
  Assign the 'key' in the 'obejct' to the 'value'
Return the modified 'object'

/* setValue Function */
function setValue(object, key, value) {
  object[key] = value;
  return object;
}
