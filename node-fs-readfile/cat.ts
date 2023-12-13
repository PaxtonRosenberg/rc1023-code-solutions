import { readFile } from 'node:fs/promises';

const files: string[] = process.argv.slice(2);

const mappedFiles: Promise<string>[] = files.map((file: string) =>
  readFile(file, 'utf8')
);

try {
  const data: string[] = await Promise.all(mappedFiles);
  for (let i = 0; i < data.length; i++) {
    console.log(data[i]);
  }
} catch (error: any) {
  console.error('An error occurred:', error.message);
}
