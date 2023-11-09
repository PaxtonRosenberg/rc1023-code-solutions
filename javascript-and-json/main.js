const library = [
  {
    isbn: '978-0060935467',
    title: 'To Kill a Mockingbird',
    author: 'Harper Lee',
  },
  {
    isbn: '978-0060256678',
    title: 'Where the Sidewalk Ends',
    author: 'Shel Silverstein',
  },
  {
    isbn: '978-0141439563',
    title: 'Great Expectations',
    author: 'Charles Dickens',
  },
];

console.log('typeof library:', typeof library);

console.log('JSON.stringify typeof library:', typeof JSON.stringify(library));

const student = JSON.stringify({ id: '98042423', name: 'Paxton' });

console.log('JSON string:', student + ' typeof student: ' + typeof student);

console.log('typeof JSON.parse:', typeof JSON.parse(student));
