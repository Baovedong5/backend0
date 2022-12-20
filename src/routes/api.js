const express = require("express");
const routerAPI = express.Router();

//router.Method("/route",handler)

const {
  getUsersAPI,
  postCreateUserAPI,
} = require("../controllers/apiController");

routerAPI.get("/users", getUsersAPI);

routerAPI.post("/users", postCreateUserAPI);

module.exports = routerAPI; //export default
