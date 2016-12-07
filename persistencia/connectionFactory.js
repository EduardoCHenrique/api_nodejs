var mysql = require('mysql');

function createDBConnection() {
  return mysql.createConnection({
    host: 'localhost',
    port: '8889',
    user: 'root',
    password: 'root',
    database: 'payfast'
  });
}

module.exports = function() {
  return createDBConnection;
}
