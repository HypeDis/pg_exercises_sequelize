const express = require('express');
const app = express();
const PORT = 3000;
const path = require('path');

const getRawQuery = require('../utils/getRawQuery.js');

app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(express.static(path.join(__dirname, '..', 'client', 'public')));

app.get('/', (req, res, next) => {
  res.sendFile('index.html');
});

app.get('/query', (req, res, next) => {
  const query = req.query.sql;
  getRawQuery(query)
    .then(results => {
      res.status(201).json(results);
    })
    .catch(next);
});

app.use((err, req, res, next) => {
  // console.log(err);
  res.status(400).json([{ error: err.message }]);
});

app.listen(PORT, () => {
  console.log('listening on port ', PORT);
});
