var promise = require('bluebird');
var options = {
  promiseLib: promise
};
var pgp = require('pg-promise')(options);
var connectionString = "postgres://postgres:Trustno1@localhost:5432/ganatan";
var db = pgp(connectionString);

db.one("SELECT * FROM country WHERE id= 1000")
  .then(function (data) {
    console.log('0001:' + JSON.stringify(data));
  })
  .catch(function (error) {
    console.log("ERROR:", error);
  });