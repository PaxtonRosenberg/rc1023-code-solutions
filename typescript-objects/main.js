var student = {
  firstName: 'Paxton',
  lastName: 'Rosenberg',
  age: 29,
};
var fullName = student.firstName + ' ' + student.lastName;
console.log('value offullName:', fullName);
student.livesInIrvine = false;
student.previousOccupation = 'Supply Chain Manager';
console.log('value of livesInIrvine:', student.livesInIrvine);
console.log('value of previousOccupation:', student.previousOccupation);
console.log('value of student:', student);
var vehicle = {
  make: 'Bentley',
  model: 'Continental GT S',
  year: 2023,
};
vehicle['color'] = 'British Racing Green';
vehicle['isConvertible'] = false;
console.log('value of ["color"]:', vehicle['color']);
console.log('value of ["isConvertible"]:', vehicle['isConvertible']);
console.log('value of vehicle:', vehicle);
var pet = {
  name: 'Rip',
  kind: 'Cane Corso',
};
delete pet.name;
delete pet.kind;
console.log('value of pet:', pet);
