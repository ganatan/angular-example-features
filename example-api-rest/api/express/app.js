const express = require('express')
const app = express()

const cookieParser = require('cookie-parser');
const cors = require('cors');

const config = require('./config.json')[process.env.NODE_ENV || 'dev'];

const moviesRouter = require('./routes/movies');

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.use(cors());

app.use('/movies', moviesRouter);

app.get('/', function (req, res) {
  res.send('GET API : api-ganatan')
})

app.get('*', function (req, res) {
  res.json(
    {
      name: 'api-ganatan',
      message: 'url unknown'
    }
  );
});

const port = process.env.PORT || config.port;
app.listen(port, function () {
  console.log(`API RestFul with Express listening on port ${port} !`);
})