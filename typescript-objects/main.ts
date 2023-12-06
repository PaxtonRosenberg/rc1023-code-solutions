interface StudentProps {
  firstName: string;
  lastName: string;
  age: number;
  livesInIrvine?: boolean;
  previousOccupation?: string;
}

const student: StudentProps = {
  firstName: 'Paxton',
  lastName: 'Rosenberg',
  age: 29,
};

const fullName: string = student.firstName + ' ' + student.lastName;
console.log('value offullName:', fullName);

student.livesInIrvine = false;
student.previousOccupation = 'Supply Chain Manager';

console.log('value of livesInIrvine:', student.livesInIrvine);
console.log('value of previousOccupation:', student.previousOccupation);
console.log('value of student:', student);

interface Vehicle {
  make: string;
  model: string;
  year: number;
  color?: string;
  isConvertible?: boolean;
}

const vehicle: Vehicle = {
  make: 'Bentley',
  model: 'Continental GT S',
  year: 2023,
};

vehicle['color'] = 'British Racing Green';
vehicle['isConvertible'] = false;

console.log('value of ["color"]:', vehicle['color']);
console.log('value of ["isConvertible"]:', vehicle['isConvertible']);
console.log('value of vehicle:', vehicle);

interface Pet {
  name?: string;
  kind?: string;
}

const pet: Pet = {
  name: 'Rip',
  kind: 'Cane Corso',
};

delete pet.name;
delete pet.kind;

console.log('value of pet:', pet);
