const express = require("express"); // common js
require("dotenv").config();
const configViewEngine = require("./config/viewEngine");
const webRouter = require("./routes/web");

const mysql = require("mysql2");

const app = express(); // khai báo app của express
const port = process.env.PORT || 8081; // port => hardcode
const hostname = process.env.HOST_NAME;

//config template engine
configViewEngine(app);

// Khai báo route
app.use("/", webRouter);

//test connection
// create the connection to database
const connection = mysql.createConnection({
  host: "localhost",
  port: 3307, //neu khong chuyen mac dinh la 3306
  user: "root", // khong chuyen password default la empty
  password: "123456",
  database: "hoidanit",
});

//simple query
connection.query("select * from Users", function (err, results, fields) {
  console.log(">>> results= ", results); // results contains rows returned by server
  console.log(">>>fields= ", fields); // fields contains extra meta data about results, if available
});

app.listen(port, hostname, () => {
  console.log(`Example app listening on port ${port}`);
});
