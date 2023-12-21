
const express = require('express');
const drinks = require('./db'); 

const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('Welcome to the Gitpub App!');
});


app.get('/drinks', (req, res) => {
  res.json(drinks); 
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});