const express = require("express");
const router = express.Router();
const {
  getHomepage,
  getABC,
  getTest,
  postCreateUser,
} = require("../controllers/homeController");

//router.Method("/route",handler)

router.get("/", getHomepage);

router.get("/abc", getABC);

router.get("/test", getTest);

router.post("/create-user", postCreateUser);

module.exports = router; //export default
