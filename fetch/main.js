async function getUsers() {
  try {
    const res = await fetch('https://jsonplaceholder.typicode.com/users');
    !res.ok ? new Error() : console.log('response:', res.ok);
    const users = await res.json();
    console.log('users:', users);
  } catch (err) {
    console.error(err);
  }
}

getUsers();

async function getPokemon() {
  try {
    const res = await fetch('https://pokeapi.co/api/v2/pokemon/1');
    !res.ok ? new Error() : console.log('response:', res.ok);
    const pokemon = await res.json();
    console.log('pokemon:', pokemon);
  } catch (err) {
    console.err(err);
  }
}

getPokemon();
