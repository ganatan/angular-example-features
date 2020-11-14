/*const mysql = require('mysql');
var db = mysql.createConnection({
	host: "localhost",
	user: "root",
	password: "Trustno1"
});

db.connect(function (err) {
	if (err) throw err;
	console.log("Connected!");
});

Employee.findAll = function (result) {
	db.query("Select * from movies", function (err, res) {
		if (err) {
			console.log("error: ", err);
			result(null, err);
		}
		else {
			console.log('movies : ', res);
			result(null, res);
		}
	});
};*/

function getItems(req, res, next) {
	console.log('0001');
	res.status(200)
		.json({ message: '1111' });
}

module.exports = {
	getItems: getItems,
};
