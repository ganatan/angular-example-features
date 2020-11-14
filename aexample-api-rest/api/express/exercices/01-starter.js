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
