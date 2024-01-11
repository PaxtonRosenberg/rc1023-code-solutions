import { useEffect, useState, useCallback } from 'react';

export function Counter() {
  const [counter, setCounter] = useState(0);

  const getData = useCallback(() => {
    // fetch data
    console.log('render');
    return { foo: 'bar' };
  }, []);

  useEffect(() => {
    getData();
    setCounter((prev) => prev + 1);
  }, [getData]);

  return <div>Fetching {counter} times</div>;
}
