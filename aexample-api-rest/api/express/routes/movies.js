const express = require('express');
const router = express.Router();

const movies =
  [
    { "idid": 1001, "name": "Alien", "date": 1979, "director": "Ridley Scott" },
    { "idid": 1002, "name": "Blade Runner", "date": 1982, "director": "Ridley Scott" },
    { "idid": 1003, "name": "Gladiator", "date": 2000, "director": "Ridley Scott" },
    { "idid": 1004, "name": "The Dark Knight Rises", "date": 2012, "director": "Christopher Nolan" },
    { "idid": 1005, "name": "Interstellar", "date": 2014, "director": "Christopher Nolan" },
    { "idid": 1006, "name": "The Patriot", "date": 2000, "director": "Roland Emerich" },
    { "idid": 1007, "name": "The Day After Tomorrow", "date": 2004, "director": "Roland Emerich" },
    { "idid": 1008, "name": "Jaws", "date": 1975, "director": "Steven Spielberg" },
    { "idid": 1009, "name": "Raiders of the Lost", "date": 1981, "director": "Steven Spielberg" },
    { "idid": 1010, "name": "Saving Private Ryan", "date": 1998, "director": "Steven Spielberg" },
    { "idid": 1011, "name": "War of the Worlds", "date": 2005, "director": "Steven Spielberg" },
    { "idid": 1012, "name": "Aliens", "date": 1986, "director": "James Cameron" },
    { "idid": 1013, "name": "The Abyss", "date": 1989, "director": "James Cameron" },
    { "idid": 1014, "name": "Avatar", "date": 2009, "director": "James Cameron" }
  ]

router.get('/', function (req, res, next) {
  res.status(200).
    send(movies);
});

router.get('/:id', function (req, res, next) {
  const movie = movies.find(m => m.id === parseInt(req.params.id));
  if (!movie)
    res.status(404).send('The movie with the given ID ' + req.params.id + ' was not found');
  res.send(movie);
});

router.post('/', function (req, res) {
  console.log('post:req.body:' + JSON.stringify(req.body));
  if (!req.body.name || req.body.name.length < 2) {
    res.status(400)
      .send('Movie name is required and should be 2 minimum characters');
    return;
  }
  const movie = {
    id: movies.length + 1,
    name: req.body.name
  };
  res.status(201)
    .send(movie);
});

router.put('/:id', function (req, res) {
  const movie = movies.find(m => m.id === parseInt(req.params.id));
  if (!movie)
    res.status(404).send('The movie with the given ID ' + req.params.id + ' was not found');
  if (!req.body.name || req.body.name.length < 2) {
    res.status(400)
      .send('Movie name is required and should be 2 minimum characters');
    return;
  }
  movie.name = req.body.name;
  res.send(movie);
});

router.delete('/:id', function (req, res) {
  const movie = movies.find(m => m.id === parseInt(req.params.id));
  if (!movie)
    res.status(404).send('The movie with the given ID ' + req.params.id + ' was not found');
  const index = movies.indexOf(movie);
  movies.splice(index, 1);
  res.send(movie);
});

module.exports = router;
