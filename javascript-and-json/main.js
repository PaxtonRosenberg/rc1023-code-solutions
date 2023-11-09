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

const studentJSON = '{"id":98042423,"name":"Paxton"}';

console.log('studentJSON:', studentJSON);
console.log('typeof studentJSON:', typeof studentJSON);

console.log('JSON.parse of studentJSON:', JSON.parse(studentJSON));
console.log('JSON.parse typeof studentJSON:', typeof JSON.parse(studentJSON));
