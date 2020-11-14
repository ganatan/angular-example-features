const config = require('./config.json')[process.env.NODE_ENV || 'dev'];

const express = require('express')
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const pretty = require('express-prettify');
const cors = require('cors');

const indexRouter = require('./routes/index');

const moviesRouter = require('./routes/movies');
const continentsRouter = require('./routes/continents');

const app = express()

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(pretty({ query: 'formatted' }));
app.use(bodyParser.json());

app.use(cors());

app.use('/', indexRouter);
// app.use('/movies', moviesRouter);
// app.use('/continents', continentsRouter);

app.get('*', function (req, res) {
  res.json({ name: 'express-api-rest-starter', message: 'url unknown' });
});

const port = process.env.PORT || config.port;
app.listen(port, function () {
  console.log(`express-api-rest-starter listening on port ${port} !`);
})