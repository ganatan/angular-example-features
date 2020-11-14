
const express = require('express')
const app = express()


const moviesRouter = require('./movies');

const movies = require('./movies');


const mysql = require('mysql');
var db = mysql.createConnection({
	host: "localhost",
	user: "root",
  password: "Trustno1",
  database:"mock"
});

db.connect(function (err) {
	if (err) throw err;
	console.log("Connected!");
});


app.get('/movies', function (req, res, next) {
  db.query('SELECT * FROM movie', function (err, rows) {
    if (err) {
      console.log('000;:'+ err);
      res.json(
        {
          message: 'ok'
        }
      );
    } else {
      console.log('0001:' + JSON.stringify(rows));
      res.json(
        {
          message: 'not ok'
        }
      );
    }
  });
});

app.get('*', function (req, res) {
  res.json(
    {
      name: 'express-api-rest',
      message: 'url unknown'
    }
  );
});

const port = 5201;
app.listen(port, function () {
  console.log(`API RestFul with Express listening on port ${port} !`);
})