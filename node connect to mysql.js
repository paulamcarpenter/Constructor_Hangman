const mysql = require("mysql");
const connection = mysql.createConnection({
	host: "localhost",
	port:3306,

	user: "root".

	password:"root",
	database: "playlistdb"
});


connection.connect((err) => {
	if(err) throw err;
	console.log("connected as id" + connection.threadId);
	readDatabase();
});

const readDatabase = () => {
	connection.query('select * from artists', (err, res) =>
	{
		if (err) throw err;
		console.log(res);
		connection.end();

	});
}