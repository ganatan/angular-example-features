
const express = require('express')
const app = express()
const pretty = require('express-prettify');

const cookieParser = require('cookie-parser');
const cors = require('cors');

const config = require('./config.json')[process.env.NODE_ENV || 'dev'];

const moviesRouter = require('./routes/movies');
const continentsRouter = require('./routes/continents');

/* app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(pretty({ query: 'formatted' }));
app.use(cookieParser());
app.use(cors());

app.use('/movies', moviesRouter);
app.use('/continents', continentsRouter);

app.get('/', function (req, res) {
  res.send('GET API : express-api-rest')
}) */

const mysql = require('mysql');
var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "Trustno1"
});

con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
});


app.get('*', function (req, res) {
  res.json(
    {
      name: 'express-api-rest',
      message: 'url unknown'
    }
  );
});

const port = process.env.PORT || config.port;
app.listen(port, function () {
  console.log(`API RestFul with Express listening on port ${port} !`);
})