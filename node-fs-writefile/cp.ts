import { readFile, writeFile } from 'node:fs/promises';

const fileToRead = process.argv[2];

try {
  const data = await readFile(fileToRead, 'utf8');
  await writeFile('copy-of-note.txt', data, 'utf8');
} catch (error: any) {
  console.log('An error ocurred:', error.message);
}
