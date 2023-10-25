function convertMinutesToSeconds(minutes) {
  const seconds = minutes * 60;
  return seconds;
}
console.log('convertMinutesToSeconds Result:', convertMinutesToSeconds(10));

function greet(name) {
  const sayingHey = 'Hey, ' + name;
  return sayingHey;
}
console.log('greet Result:', greet('Paxton'));

function getArea(width, height) {
  const area = width * height;
  return area;
}
console.log('getArea Result:', getArea(8, 24));

function getFirstName(person) {
  return person.firstName;
}
const personExample = {
  firstName: 'Kobe',
  lastName: 'Bryant',
};
console.log('getFirstName Result:', getFirstName(personExample));

function getLastElement(array) {
  return array.at(-1);
}
const arrayExample = ['Lakers', 'Clippers', 'Suns', 'Warriors', 'Kings'];
console.log('getLastElement Result:', getLastElement(arrayExample));
