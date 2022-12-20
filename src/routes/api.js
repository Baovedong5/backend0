const express = require("express");
const routerAPI = express.Router();

//router.Method("/route",handler)

const { getUsersAPI } = require("../controllers/apiController");

routerAPI.get("/", (req, res) => {
  res.send("hello world with apis");
});

routerAPI.get("/abc", (req, res) => {
  res.status(200).json({
    data: "hello world first apis",
  });
});

routerAPI.get("/users", getUsersAPI);

module.exports = routerAPI; //export default
