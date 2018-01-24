const mysql = require("mysql");
const connection = mysql.createConnection({
	host: "localhost",
	port:3306,

	user: "root",

	password: "root",
	database: "playlistdb"
});


connection.connect((err) => {
	if(err) throw err;
	console.log("connected as id" + connection.threadId);
	queryAllSongs();
	queryDanceSongs();

});

function queryAllSongs() {
	connection.query("Select * FROM songs", function(err, res) {
		for (var i = 0; i < res.length; i++) {
			console.log(res[i].id + " | " + res[i].title + " | " + res[i].artist + " | " res[i].genre);
		}
		console.log("---------------------------");
	})
}

console.log(query.sql);

const readDatabase = () => {
	connection.query('select * from artists', (err, res) =>
	{
		if (err) throw err;
		console.log(res);
		connection.end();

	});
}