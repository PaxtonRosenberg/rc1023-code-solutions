import express from 'express';

const app = express();

app.use((req, res) => {
  console.log(req.method);
  res.send(`Paxton is cool`);
});

app.listen(8080, () => {
  console.log('listening on port 8080');
});
