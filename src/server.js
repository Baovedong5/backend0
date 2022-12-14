const express = require("express"); // common js
require("dotenv").config();
const configViewEngine = require("./config/viewEngine");
const webRouter = require("./routes/web");

const app = express(); // khai báo app của express
const port = process.env.PORT || 8081; // port => hardcode
const hostname = process.env.HOST_NAME;

//config req.body
app.use(express.json()); // convert string => JSON
app.use(express.urlencoded({ extended: true })); // for form data

//config template engine
configViewEngine(app);

// Khai báo route
app.use("/", webRouter);

//test connection

//simple query
// connection.query("select * from Users", function (err, results, fields) {
//   console.log(">>> results= ", results); // results contains rows returned by server
// });

app.listen(port, hostname, () => {
  console.log(`Example app listening on port ${port}`);
});
