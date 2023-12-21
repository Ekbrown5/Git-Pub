const express = require('express');
const drinks = require('./db');
const ejs = require('ejs');

const app = express();
const port = 3000;

app.set('view engine', 'ejs');

app.get('/', (req, res) => {
  res.render('index', { drinks });
});

app.get('/drinks/:id', (req, res) => {
  const id = req.params.id;
  res.render('show', { drinks, id });
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});