// imports express
const express = require('express');
// imports the drinks db
const drinks = require('./models/db');
// imports the EJS
const ejs = require('ejs');
// Creating the express application
const app = express();
// Sets the port
const port = 3000;
// imports the drinks db
const {drinks} = require('mdodels/db'); 
// sets view engine to EJS
app.set('view engine', 'ejs');
// Sets up a route
app.get('/', (req, res) => {
res.send('Welcome to the Gitpub App!')
});

// renders the index.ejs file with drinks data
app.get('/drinks', (req, res) => {
  res.render('index', {drinks});
});

app.get('drinks/:id', (req, res) => {
  res.send(req.params.id);
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});

