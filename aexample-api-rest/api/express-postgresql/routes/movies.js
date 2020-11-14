const express = require('express');
const router = express.Router();

const queries = require('../scripts/queries/movies');

/* router.get('/', function (req, res, next) {
  res.status(200)
    .json({ name: 'movies' });
}); */


router.get('/', function (req, res, next) { queries.getItems(req, res, next, false); });
router.get('/:id', function (req, res, next) { queries.getItem(req, res, next, false); });
router.get('/:id/actors', function (req, res, next) { queries.getItemActors(req, res, next, false); });

/* router.get('/img/:name', function (req, res, next) { queries.getItemImage(req, res, next, true); });
router.delete('/:id', function (req, res, next) { queries.deleteItem(req, res, next, false); });
router.put('/:id', function (req, res, next) { queries.updateItem(req, res, next, false); });
router.post('/', function (req, res, next) { queries.createItem(req, res, next, false); });*/

module.exports = router;

/* const express = require('express');
const router = express.Router();

const db = require('./connection');

router.get('/', function (req, res, next) {
  getItems(req, res, next);
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

function getItems(req, res, next) {
  db.any('SELECT * FROM movie ORDER BY name ASC')
    .then(function (movies) {
      res.status(200)
        .json(movies);
    })
    .catch(function (err) {
      return next(err);
    });
}

module.exports = router;*/
