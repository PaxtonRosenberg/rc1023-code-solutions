const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

const names = [
  'Ada',
  'Hedy',
  'Jean',
  'Grace',
  'Evelyn',
  'Joan',
  'Elizabeth',
  'Janese',
  'Donna',
];

function onlyEvenNums(numbers) {
  console.log(
    'Even Numbers:',
    numbers.filter((number) => number % 2 === 0)
  );
}

onlyEvenNums(numbers);

function noD(names) {
  console.log(
    'No D:',
    names.filter((name) => !name.toLowerCase().includes('d'))
  );
}

noD(names);
