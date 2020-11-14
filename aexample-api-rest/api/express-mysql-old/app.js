
var express = require('express');

var app = express();

var connection = require('express-myconnection');
var mysql = require('mysql');


/*app.use(
  connection(mysql,{
      
      host: 'mysql://mysql:3306/', 
      user: 'root',
      password : 'Trustno1Boromir',
      port : 3306, 
      database:'mock'

  },'pool')
);*/

/*con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
});*/





/*connection(mysql, {

  host: 'mysql://mysql:3306/',
  user: 'root',
  password: 'Trustno1Boromir',
  port: 3306,
  database: 'mock'

});*/


var mysql      = require('mysql');
var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : 'Trustno1Boromir'
});

connection.connect();

connection.query('SELECT 1 + 1 AS solution', function(err, rows, fields) {
  if (err) throw err;
  console.log('The solution is: ', rows[0].solution);
});

connection.end();
