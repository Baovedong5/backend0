const express = require("express");
const router = express.Router();
const {
  getHomepage,
  getABC,
  getTest,
} = require("../controllers/homeController");

//router.Method("/route",handler)

router.get("/", getHomepage);

router.get("/abc", getABC);

router.get("/test", getTest);

module.exports = router; //export default
