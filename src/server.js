const express = require("express"); // common js
const path = require("path");
require("dotenv").config();
// import express from "express"; //es module

const app = express(); // khai báo app của express
const port = process.env.PORT || 8081; // port => hardcode
const hostname = process.env.HOST_NAME;

//config template engine
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

//config static files
app.use(express.static(path.join(__dirname, "public")));

// Khai báo route
app.get("/", (req, res) => {
  res.send("Hello World! & nodemon");
});

app.get("/abc", (req, res) => {
  res.send("check ABC");
});

app.get("/test", (req, res) => {
  res.render("sample.ejs");
});

app.listen(port, hostname, () => {
  console.log(`Example app listening on port ${port}`);
});
