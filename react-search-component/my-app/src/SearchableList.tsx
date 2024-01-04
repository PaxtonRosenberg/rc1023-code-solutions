import { useState, ChangeEvent } from 'react';
import SearchBar from './SearchBar';
import SearchResults from './SearchResults';

interface SearchableListProps {
  quotes: string[];
}

export default function SearchableList({ quotes }: SearchableListProps) {
  const [search, setSearch] = useState('');

  function handleChange(e: ChangeEvent<HTMLInputElement>) {
    setSearch(e.target.value);
  }

  return (
    <div className="container">
      <SearchBar onChange={handleChange} search={search} />
      <SearchResults quotes={quotes} search={search} />
    </div>
  );
}
