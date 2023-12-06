function convertMinutesToSeconds(minutes) {
  return minutes * 60;
}
var seconds = convertMinutesToSeconds(20);
console.log('convertMinutesToSeconds:', seconds);
function greet(name) {
  return 'Hey,' + ' ' + name;
}
var greeting = greet('Paxton');
console.log('greet:', greeting);
function getArea(width, height) {
  return width * height;
}
var area = getArea(24, 8);
console.log('getArea:', area);
function getFirstName(person) {
  return person.firstName;
}
var person = {
  firstName: 'Paxton',
  lastName: 'Rosenberg',
};
var paxton = getFirstName(person);
console.log('getFirstName:', paxton);
function getLastElement(array) {
  return array[array.length - 1];
}
var lastElement = getLastElement([1, 2, 3]);
console.log('getLastElement:', lastElement);
