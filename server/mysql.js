const mysql = require('mysql');
const connection = mysql.createConnection({
  host: 'cs3743.fulgentcorp.com',
  user: 'ocg512',
  password: 'stRLON6GCL6mWFMDnXpz',
  database: 'cs4783_ocg512'
});

connection.connect((err) => {
  if (err) throw err;
  console.log('Connected to MySQL Server!');
});

module.exports = connection;