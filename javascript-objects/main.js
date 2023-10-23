const student = {
  firstName: 'Paxton',
  lastName: 'Rosenberg',
  age: 29,
};

const fullName = student.firstName + ' ' + student.lastName;
console.log('value of fullName:', fullName);

student.livesInIrvine = false;
student.previousOccupation = 'Supply Chain Manager';
console.log('value of student.livesInIrvine:', student.livesInIrvine);
console.log('value of student.previousOccupation:', student.previousOccupation);

console.log('value of student:', student);

const vehicle = {
  make: 'Bentley',
  model: 'Continental GT',
  year: 2023,
};

vehicle['color'] = 'Black';
vehicle['isConvertible'] = true;
console.log('value of vehicle["color"]:', vehicle['color']);
console.log('value of vehicle["isConvertible"]:', vehicle['isConvertible']);

console.log('value of vehicle:', vehicle);

const pet = {
  name: 'Buddy',
  type: 'dog',
};

delete pet.name;
delete pet.type;

console.log('value of pet:', pet);
