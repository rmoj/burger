// Set up MySQL connection.
var mysql = require('mysql');

var connection;

if (process.env.CLEARDB_DATABASE_URL) {
  connection = mysql.createConnection(process.env.CLEARDB_DATABASE_URL);
} else {
  connection = mysql.createConnection({
    host: localhost,
    port: 3306,
    user: rene,
    password: password,
    database: burgers_db
  });
}

// HOST = us-cdbr-iron-east-01.cleardb.net
// PORT = 3306
// USERNAME = b7c146a9a66aa4
// PASSWORD = aab43920
// DATABASE = heroku_23aec9798cb77c3

// Make connection.
connection.connect(function(err) {
  if (err) {
    console.error('error connecting: ' + err.stack);
    return;
  }
  console.log('connected as id ' + connection.threadId);
});

// Export connection for our ORM to use.
module.exports = connection;
