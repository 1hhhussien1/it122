const items = [
  {
    id: 1,
    name: "Car A",
    make: "Ford",
    model: "Mustang",
    year: 2021
  },
  {
    id: 2,
    name: "Car B",
    make: "Tesla",
    model: "Model S",
    year: 2021
  },
  {
    id: 3,
    name: "Car C",
    make: "BMW",
    model: "M4",
    year: 2021
  },
  {
    id: 4,
    name: "Car D",
    make: "Chevrolet",
    model: "Corvette",
    year: 2021
  },
  {
    id: 5,
    name: "Car E",
    make: "Audi",
    model: "R8",
    year: 2021
  }
];

const getAll = () => {
  return items;
};

const getItem = (id) => {
  return items.find((item) => item.id === id);
};

module.exports = { getAll, getItem };


//index.js

const express = require('express');
const app = express();
const data = require('./data.js');

app.set('view engine', 'ejs');

app.get('/', (req, res) => {
  const items = data.getAll();
  res.render('home', { items });
});

app.get('/detail', (req, res) => {
  const id = parseInt(req.query.id);
  const item = data.getItem(id);
  if (item) {
    res.render('detail', { item });
  } else {
    res.status(404).send('Item not found');
  }
});

app.listen(3000, () => {
  console.log('Server started on port 3000');
});