const mysql = require("mysql2");
require("dotenv").config();

// create the connection to database
const connection = mysql.createConnection({
  host: process.env.DB_HOST,
  port: process.env.DB_PORT, //neu khong truyen mac dinh la 3306
  user: process.env.DB_USER, // khong truyen password default la empty
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
});

// const connection = mysql.createPool({
//   host: process.env.DB_HOST,
//   port: process.env.DB_PORT, //neu khong truyen mac dinh la 3306
//   user: process.env.DB_USER, // khong truyen password default la empty
//   password: process.env.DB_PASSWORD,
//   database: process.env.DB_NAME,
//   waitForConnections: true,
//   connectionLimit: 10,
//   queueLimit: 0,
// });

module.exports = connection;
process.env;
