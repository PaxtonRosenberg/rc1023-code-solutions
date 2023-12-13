import { writeFile } from 'node:fs/promises';

const note: string = process.argv[2] + '\n';

async function writeToFile(): Promise<void> {
  try {
    await writeFile('note.txt', note, 'utf8');
    console.log(note);
  } catch (error: any) {
    console.log('An error occured:', error.message);
  }
}

writeToFile();
