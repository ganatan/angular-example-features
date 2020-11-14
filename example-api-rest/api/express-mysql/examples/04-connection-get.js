const express = require('express')
const app = express()

app.use(express.json());
const cors = require('cors');
app.use(cors());


var pgp = require("pg-promise")();
var db = pgp("postgres://postgres:Trustno1@localhost:5432/mock");

app.get('/', function (req, res) {
  res.send('GET API : with express.js')
})

app.get('/movies', function (req, res, next) {
  db.any("SELECT * FROM movie")
    .then(function (movies) {
      res.status(200).
        send(movies);
    })
    .catch(function (error) {
      console.log("ERROR:", error);
    });
});

app.post('/movies', function (req, res, next) {
  console.log('0001:' + JSON.stringify(req.body));
  console.log('0001:');
  res.status(200)
    .json({
      status: 'success',
      message: 'Inserted movie'
    });

  //  console.log('0001:' + JSON.stringify(req));
  /*  name = req.body.name;
    console.log('0001:' + name);
    db.none('insert into movie(name) values(${name})', name)
      .then(function () {
        res.status(200)
          .json({
            status: 'success',
            message: 'Inserted movie'
          });
      })
      .catch(function (err) {
        return next(err);
      });*/
});

app.get('*', function (req, res) {
  res.json(
    {
      name: 'express-api-rest',
      message: 'url unknown'
    }
  );
});

app.listen(5200, function () {
  console.log(`API with Express.js listening on port 5200 !`);
})