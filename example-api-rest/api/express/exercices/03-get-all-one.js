const express = require('express')
const app = express()

const cors = require('cors');

app.use(cors());

const movies =
  [
    { "id": 1001, "name": "Alien", "date": 1979, "director": "Ridley Scott" },
    { "id": 1002, "name": "Blade Runner", "date": 1982, "director": "Ridley Scott" },
    { "id": 1003, "name": "Gladiator", "date": 2000, "director": "Ridley Scott" },
    { "id": 1005, "name": "Interstellar", "date": 2014, "director": "Christopher Nolan" },
  ]


app.get('/', function (req, res) {
  res.send('API with Express.js')
})

app.get('/movies/:id', function (req, res, next) {
  const movie = movies.find(m => m.id === parseInt(req.params.id));
  if (!movie)
    res.status(404).send('The movie with the given ID ' + req.params.id + ' was not found');
  res.send(movie);
});

app.get('*', function (req, res) {
  res.json(
    {
      name: 'api-express',
      message: 'url unknown'
    }
  );
});

app.listen(5200, function () {
  console.log(`API with Express.js listening on port 5200 !`);
})