// PORT=5000
// JWT_SECRET=rankridge_secret_key

const mysql = require("mysql2");

const db = mysql.createPool({
  host: "localhost",
  user: "root",
  password: "root",
  database: "rankridge",
  waitForConnections: true,
  connectionLimit: 10
});

module.exports = db;
