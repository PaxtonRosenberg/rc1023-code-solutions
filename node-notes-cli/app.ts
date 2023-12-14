import { readFile, writeFile } from 'node:fs/promises';

const [, , operation, arg1, arg2] = process.argv;

type Data = {
  nextId: number;
  notes: Record<string, string>;
};

async function getData(): Promise<Data> {
  const file = await readFile('data.json', 'utf-8');
  return JSON.parse(file);
}

async function readNotes(): Promise<void> {
  const data = await getData();
  for (const key in data.notes) {
    console.log(`${key}: ${data.notes[key]}`);
  }
}

async function addNote(note: string): Promise<void> {
  if (!note) {
    console.log('A note is required');
    return;
  }
  const data = await getData();
  data.notes[data.nextId] = note;
  data.nextId++;
  await writeFile('data.json', JSON.stringify(data, null, 2));
}

async function deleteNote(id: string): Promise<void> {
  const data = await getData();
  if (!id || data.notes[id] === undefined) {
    console.log('Please provide valid entry number to delete');
    return;
  }
  for (const key in data.notes) {
    if (id === key) {
      delete data.notes[key];
      await writeFile('data.json', JSON.stringify(data, null, 2));
    }
  }
}

async function updateNote(id: string, updatedNote: string): Promise<void> {
  const data = await getData();
  if (data.notes[id] === undefined) {
    console.log('Please provide valid entry number to update');
  } else if (!updatedNote) {
    console.log('Please enter an update');
  }
  for (const key in data.notes) {
    if (id === key) {
      data.notes[id] = updatedNote;
      await writeFile('data.json', JSON.stringify(data, null, 2));
    }
  }
}

try {
  switch (operation) {
    case 'read':
      await readNotes();
      break;
    case 'add':
      await addNote(arg1);
      break;
    case 'delete':
      await deleteNote(arg1);
      break;
    case 'update':
      await updateNote(arg1, arg2);
      break;
    default:
      console.log(
        'Please provide a valid operation: add, delete, read, update'
      );
  }
} catch (error: any) {
  console.log(error.message);
}
