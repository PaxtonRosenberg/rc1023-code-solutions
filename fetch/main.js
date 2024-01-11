async function getUsers() {
  try {
    const res = await fetch('https://jsonplaceholder.typicode.com/users/');
    if (!res.ok) {
      throw new Error(`Error, failed to fetch: ${res.status}`);
    }
    const users = await res.json();
    console.log('users:', users);
  } catch (err) {
    console.error(err.message);
  }
}

getUsers();

async function getPokemon() {
  try {
    const res = await fetch('https://pokeapi.co/api/v2/pokemon/1');
    if (!res.ok) {
      throw new Error(`Error, failed to fetch: ${res.status}`);
    }
    const pokemon = await res.json();
    console.log('pokemon:', pokemon);
  } catch (err) {
    console.error(err.message);
  }
}

getPokemon();
