const express = require("express"); // common js
// import express from "express"; //es module
const path = require("path");
const app = express(); // khai báo app của express
const port = 8080; // port

//config template engine
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

// Khai báo route
app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/abc", (req, res) => {
  res.send("check ABC");
});

app.get("/test", (req, res) => {
  res.render("sample.ejs");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
