import { readFile } from 'node:fs/promises';

try {
  const data = await readFile('dijkstra.txt', 'utf8');
  console.log(data);
} catch (error: any) {
  console.error('An error occurred:', error.message);
}
