import express from 'express';

const app = express();

let nextId: number = 1;

type Grade = {
  id: number;
  name: string;
  course: string;
  score: number;
};

const grades: Record<number, Grade> = {};

app.get('/api/grades', (req, res) => {
  const gradesArray = [];
  for (const id in grades) {
    gradesArray.push(grades[id]);
  }
  res.json(gradesArray);
});

app.use(express.json());

app.post('/api/grades', (req, res) => {
  const newGrade: Grade = req.body;

  if (!newGrade.name || !newGrade.course || !newGrade.score) {
    res.sendStatus(404);
  } else {
    const id = nextId++;
    grades[id] = { id, ...newGrade };
    res.status(201).json(grades[id]);
  }
});

app.listen(8081, () => {
  console.log('server is listening on 8081!');
});
