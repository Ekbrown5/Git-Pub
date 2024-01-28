const express = require('express');
const { drinks } = require('./models/db');
const ejs = require('ejs');
const app = express();
const port = 3000;

app.set('view engine', 'ejs');

app.get('/', (req, res) => {
  res.send('Welcome to the Gitpub App!');
});

app.get('/drinks', (req, res) => {
  res.render('index', { drinks });
});

app.get('/drinks/:id', (req, res) => {
  res.send(req.params.id);
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
