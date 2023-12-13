import { writeFile } from 'node:fs/promises';

const randomNumber: string = Math.floor(Math.random() * 100).toString() + '\n';

async function writeToFile(): Promise<void> {
  try {
    await writeFile('random.txt', randomNumber, 'utf8');
    console.log(randomNumber);
  } catch (error: any) {
    console.log('An error occured:', error.message);
  }
}

writeToFile();
