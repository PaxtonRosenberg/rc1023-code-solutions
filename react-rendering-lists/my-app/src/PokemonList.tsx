type Props = {
  pokedex: PokedexEntries[];
};

type PokedexEntries = {
  number: string;
  name: string;
};

export default function PokemonList({ pokedex }: Props) {
  const pokemon = pokedex.map((pokedexEntry) => <li>{pokedexEntry.name}</li>);
  return <ul>{pokemon}</ul>;
}
