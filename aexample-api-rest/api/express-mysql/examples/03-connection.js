var promise = require('bluebird');
var pgp = require('pg-promise')({
  promiseLib: promise
});
const cn = {
  host: 'localhost',
  port: 5432,
  database: 'ganatan',
  user: 'postgres',
  password: 'Trustno1',
  max: 30
};
var db = pgp(cn);

db.one("SELECT * FROM country WHERE id= 1000")
  .then(function (data) {
    console.log('0001:' + JSON.stringify(data));
  })
  .catch(function (error) {
    console.log("ERROR:", error);
  });