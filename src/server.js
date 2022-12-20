const express = require("express"); // common js
require("dotenv").config();
const configViewEngine = require("./config/viewEngine");
const webRouter = require("./routes/web");
const apiRouter = require("./routes/api");

const connection = require("./config/dataBase");

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
app.use("/v1/api/", apiRouter);

(async () => {
  //test connection
  try {
    await connection();
    app.listen(port, hostname, () => {
      console.log(`Backend zero app listening on port ${port}`);
    });
  } catch (error) {
    console.log(">>> Error connect to DB: ", error);
  }
})();
