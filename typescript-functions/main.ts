function convertMinutesToSeconds(minutes: number): number {
  return minutes * 60;
}

const seconds: number = convertMinutesToSeconds(20);
console.log('convertMinutesToSeconds:', seconds);

function greet(name: string): string {
  return 'Hey,' + ' ' + name;
}

const greeting: string = greet('Paxton');
console.log('greet:', greeting);

function getArea(width: number, height: number): number {
  return width * height;
}

const area: number = getArea(24, 8);
console.log('getArea:', area);

function getFirstName(person: { firstName: string; lastName: string }): string {
  return person.firstName;
}

const person: { firstName: string; lastName: string } = {
  firstName: 'Paxton',
  lastName: 'Rosenberg',
};
const paxton: string = getFirstName(person);
console.log('getFirstName:', paxton);

function getLastElement(array: number[]): number {
  return array[array.length - 1];
}

const lastElement: number = getLastElement([1, 2, 3]);
console.log('getLastElement:', lastElement);
