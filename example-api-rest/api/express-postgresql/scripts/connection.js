const config = require('../config.json')[process.env.NODE_ENV || 'dev'];

var promise = require('bluebird');
var pgp = require('pg-promise')({
  promiseLib: promise
});
const cn = {
  host: 'localhost',
  port: 5432,
  database: config.database,
  user: config.user,
  password: config.password,
  max: 30 
};
var db = pgp(cn);

module.exports = db;