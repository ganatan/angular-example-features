/* Utilisation de la librairie express.js */
const express = require('express')
const app = express()

/* Utilisation de la librairie cors.js */
const cors = require('cors');

app.use(cors());

/* Routage url de base */
app.get('/', function (req, res) {
  res.send('API with Express.js')
})

app.get('/movies', function (req, res, next) {
  const movies =
    [
      { "id": 1001, "name": "Alien", "date": 1979, "director": "Ridley Scott" },
      { "id": 1002, "name": "Blade Runner", "date": 1982, "director": "Ridley Scott" },
      { "id": 1003, "name": "Gladiator", "date": 2000, "director": "Ridley Scott" },
      { "id": 1005, "name": "Interstellar", "date": 2014, "director": "Christopher Nolan" },
    ]
  res.status(200).
    send(movies);
});


/* Routage url inconnue */
app.get('*', function (req, res) {
  res.json(
    {
      name: 'api-express',
      message: '404 Not Found'
    }
  );
});

/* Ecoute sur le port 5200 */
app.listen(5200, function () {
  console.log(`API with Express.js listening on port 5200 !`);
})

