interface SearchResultsProps {
  quotes: string[];
  search: string;
}

export default function SearchResults({ quotes, search }: SearchResultsProps) {
  const list = quotes

    .filter((quote) => {
      return search.toLowerCase() === ''
        ? ''
        : quote.toLowerCase().includes(search);
    })

    .map((quote, index) => {
      return <li key={index}>{quote}</li>;
    });
  return <ul>{list}</ul>;
}
