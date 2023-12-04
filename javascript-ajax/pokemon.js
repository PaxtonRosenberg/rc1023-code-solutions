function getPokemonData(name) {
  const xhr = new XMLHttpRequest();
  xhr.open('GET', 'https://pokeapi.co/api/v2/pokemon/' + name);
  xhr.responseType = 'json';
  xhr.addEventListener('load', function () {
    console.log(xhr.status);
    console.log(xhr.response);
  });
  xhr.send();
}

getPokemonData('cubone');

// // Define a function getPokemonData that takes a name as its parameter
// function getPokemonData(name) {
//   // Create a new XMLHttpRequest object
//   const xhr = new XMLHttpRequest();

//   // Initialize a GET request to the PokeAPI for the specified Pokemon name
//   xhr.open('GET', 'https://pokeapi.co/api/v2/pokemon/' + name);

//   // Set the response type of the request to 'json'
//   xhr.responseType = 'json';

//   // Add an event listener for the 'load' event to handle the response when it's loaded
//   xhr.addEventListener('load', function () {
//     // Log the status code of the response
//     console.log(xhr.status);

//     // Log the response data (parsed as JSON)
//     console.log(xhr.response);
//   });

//   // Send the request
//   xhr.send();
// }

// // Call the function getPokemonData with 'cubone' as the argument to fetch data for Cubone
// getPokemonData('cubone');
