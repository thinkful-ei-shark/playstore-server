const express = require('express');
const morgan = require('morgan');
const cors = require('cors');

const app = express();
app.use(morgan('common'));
app.use(cors());


const apps = require('./playstore.js');


app.get('/apps', (req, res) => {
  const {search = '', sort, genres } = req.query;

  if (sort, genres) {
    if (!['app', 'genre'].includes(sort)) {
      return res.status(400).send('Sort must be one of title or genre');
    }
  }

  let results = apps.filter(app => 
    app.App.toLowerCase().includes(search.toLowerCase())
  );

  if (sort, genres) {
    results.sort((a, b) => {
      return a[sort, genres] > b[sort, genres] ? 1 : a[sort, genres] < b[sort, genres] ? -1 : 0;
    });
  }
  res.json(results);
});

module.exports = app;