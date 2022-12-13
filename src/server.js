const express = require("express"); // common js
require("dotenv").config();
const configViewEngine = require("./config/viewEngine");
const webRouter = require("./routes/web");

const app = express(); // khai báo app của express
const port = process.env.PORT || 8081; // port => hardcode
const hostname = process.env.HOST_NAME;

//config template engine
configViewEngine(app);

// Khai báo route
app.use("/", webRouter);

app.listen(port, hostname, () => {
  console.log(`Example app listening on port ${port}`);
});
