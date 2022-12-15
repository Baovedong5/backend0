const express = require("express");
const router = express.Router();
const {
  getHomepage,
  getABC,
  getTest,
  postCreateUser,
  getCreatePage,
  getUpdatePage,
  postUpdateUser,
} = require("../controllers/homeController");

//router.Method("/route",handler)

router.get("/", getHomepage);

router.get("/abc", getABC);

router.get("/test", getTest);

router.get("/create", getCreatePage);

router.get("/update/:id", getUpdatePage);

router.post("/create-user", postCreateUser);
router.post("/update-user", postUpdateUser);

module.exports = router; //export default
