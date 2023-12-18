import { readFile, writeFile } from 'node:fs/promises';
import express from 'express';

const app = express();
app.use(express.json());
const PORT = 8080;

type Note = {
  id: number;
  content: string;
};

type Data = {
  nextId: number;
  notes: Record<string, Note>;
};

async function readData(): Promise<Data> {
  const data = await readFile('./data.json', 'utf8');
  return JSON.parse(data);
}

async function writeToFile(data: Data): Promise<void> {
  try {
    const jsonData = JSON.stringify(data, null, 2);
    await writeFile('./data.json', jsonData, 'utf8');
  } catch (error: any) {
    console.error('An error occured:', error.message);
  }
}

app.get('/api/notes', async (req, res) => {
  try {
    const data = await readData();
    const notes: Note[] = [];
    for (const id in data.notes) {
      notes.push(data.notes[id]);
    }
    res.json(notes);
  } catch (error: any) {
    console.error(`${error.message}: An unexpected error occured`);
    res.status(500);
  }
});

app.get('/api/notes/:id', async (req, res) => {
  const data = await readData();
  const idEntered = Number(req.params.id);
  if (idEntered < 0) {
    res.status(400).json('must enter a positive value');
  } else {
    for (const id in data.notes) {
      if (Number(id) === idEntered) {
        res.json(data.notes[idEntered]);
      } else {
        res.status(404).json(`cannot find note with id ${idEntered}`);
      }
    }
  }
});

app.post('/api/notes', async (req, res) => {
  try {
    const newNote: Note = req.body;
    const data = await readData();

    if (!newNote.content) {
      res.status(400).json('content is a required field');
    } else {
      const id = data.nextId++;
      const noteToAdd = { id, content: newNote.content };
      data.notes[id] = noteToAdd;

      await writeToFile(data);
      res.status(201).json(noteToAdd);
    }
  } catch (error: any) {
    console.error(`${error.message}: An unexpected error occured`);
    res.status(500);
  }
});

app.delete('/api/notes/:id', async (req, res) => {
  try {
    const data = await readData();
    const idEntered = Number(req.params.id);
    if (idEntered < 0) {
      res.status(400).json('must enter a positive value');
    } else if (!data.notes[idEntered]) {
      res.status(404).json('must enter a valid id');
    } else {
      delete data.notes[idEntered];
      writeToFile(data);
      res.sendStatus(204);
    }
  } catch (error: any) {
    console.error(`${error.message}: An unexpected error occured`);
    res.status(500);
  }
});

app.put('/api/notes/:id', async (req, res) => {
  try {
    const data = await readData();
    const idEntered = Number(req.params.id);
    const updatedNote = req.body;
    if (idEntered < 0) {
      res.status(400).json('must enter a positive value');
    } else if (!data.notes[idEntered]) {
      res.status(404).json('must enter a valid id');
    } else {
      const id = idEntered;
      const noteToUpdate = { id, content: updatedNote.content };
      data.notes[id] = noteToUpdate;

      await writeToFile(data);
      res.status(200).json(noteToUpdate);
    }
  } catch (error: any) {
    console.error(`${error.message}: An unexpected error occured`);
    res.status(500);
  }
});

app.listen(PORT, () => {
  console.log(`Listening on ${PORT}!`);
});
