import { ChangeEvent } from 'react';

interface SearchBarProps {
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  search: string;
}

export default function SearchBar({ onChange, search }: SearchBarProps) {
  return (
    <label>
      Search:
      <input
        type="text"
        name="search"
        value={search}
        onChange={onChange}></input>
    </label>
  );
}
