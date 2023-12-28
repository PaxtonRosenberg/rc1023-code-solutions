import express from 'express';
import pg from 'pg';
import { ClientError } from './client-error.js';
import { errorMiddleware } from './error-middleware.js';

const app = express();
const PORT = 8080;
const db = new pg.Pool({
  connectionString: 'postgres://dev:dev@localhost/studentGradeTable',
  ssl: {
    rejectUnauthorized: false,
  },
});

app.use(express.json());

app.get('/api/grades/:gradeId', async (req, res, next) => {
  try {
    const gradeId = Number(req.params.gradeId);

    if (!Number.isInteger(gradeId) || gradeId <= 0) {
      throw new ClientError(400, '"gradeId" must be a positive integer');
    }

    const sql = `
      select *
        from "grades"
        where "gradeId" = $1
    `;

    const params = [gradeId];
    const result = await db.query(sql, params);
    const grade = result.rows[0];

    if (!grade) {
      throw new ClientError(404, `Cannot find grade with 'gradeId' ${gradeId}`);
    }

    res.json(grade);
  } catch (err) {
    next(err);
  }
});

app.get('/api/grades', async (req, res, next) => {
  try {
    const sql = `
      select *
      from "grades"
    `;
    const result = await db.query(sql);
    const grades = result.rows;
    res.json(grades);
  } catch (err) {
    next(err);
  }
});

app.post('/api/grades', async (req, res, next) => {
  try {
    const name = req.body.name;
    const course = req.body.course;
    const score = Number(req.body.score);

    if (!name || !course || !score) {
      throw new ClientError(400, 'Please enter a name, course and valid score');
    } else if (score > 100 || score < 0 || !Number.isInteger(score)) {
      throw new ClientError(400, 'score must be an integer from 0 to 100');
    } else {
      const sql = `
      insert into "grades" ("name", "course", "score")
      values ($1, $2, $3)
      returning *
      `;
      const params = [name, course, score];
      const result = await db.query(sql, params);
      const newGrade = result.rows[0];
      res.status(201).json(newGrade);
    }
  } catch (err) {
    next(err);
  }
});

app.put('/api/grades/:gradeId', async (req, res, next) => {
  try {
    const gradeId = Number(req.params.gradeId);
    const name = req.body.name;
    const course = req.body.course;
    const score = Number(req.body.score);

    if (!Number.isInteger(gradeId) || gradeId <= 0) {
      throw new ClientError(400, 'gradeId must be a number greater than 0');
    } else if (!name || !course || !score) {
      throw new ClientError(400, 'Please enter a name, course and valid score');
    }

    const sql = `
      update "grades"
      set "name" = $1,
          "course" = $2,
          "score" = $3
      where "gradeId" = $4
      returning *
      `;

    const params = [name, course, score, gradeId];
    const result = await db.query(sql, params);
    res.json(result.rows[0]);
  } catch (err) {
    next(err);
  }
});

app.delete('/api/grades/:gradeId', async (req, res, next) => {
  try {
    const gradeId = Number(req.params.gradeId);

    if (!Number.isInteger(gradeId) || gradeId <= 0) {
      throw new ClientError(400, '"gradeId" must be a positive integer');
    }

    const sql = `
      delete
        from "grades"
        where "gradeId" = $1
        returning *
    `;

    const params = [gradeId];
    const result = await db.query(sql, params);
    const grade = result.rows[0];

    if (!grade) {
      throw new ClientError(404, `Cannot find grade with 'gradeId' ${gradeId}`);
    }

    res.json(`gradeId number ${gradeId} has been deleted`);
  } catch (err) {
    next(err);
  }
});

app.use(errorMiddleware);

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});
