const express = require('express');
const drinks = require('./db');
const ejs = require('ejs');

const app = express();
const port = 3000;

// Set EJS as the view engine
app.set('view engine', 'ejs');

app.get('/', (req, res) => {
  res.send('Welcome to the Gitpub App!');
});

// Create a new route for /drinks
app.get('/drinks', (req, res) => {
  res.render('index', { drinks }); // Render index.ejs and pass drinks data
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});