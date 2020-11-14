var pgp = require("pg-promise")(/*options*/);
var db = pgp("postgres://postgres:Trustno1@localhost:5432/mock");

db.any("SELECT * FROM movie")
  .then(function (data) {
    console.log('data : ' + JSON.stringify(data));
  })
  .catch(function (error) {
    console.log("ERROR:", error);
  });
