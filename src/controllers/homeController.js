const connection = require("../config/dataBase");
const { getAllUsers } = require("../services/CRUDService");

const getHomepage = async (req, res) => {
  let results = await getAllUsers();
  return res.render("home.ejs", { listUsers: results });
};

const getABC = (req, res) => {
  res.send("check ABC");
};

const getTest = (req, res) => {
  res.render("sample.ejs");
};

const postCreateUser = async (req, res) => {
  let email = req.body.email;
  let name = req.body.myname;
  let city = req.body.city;

  console.log(">>> email = ", email, " name = ", name, " city = ", city);

  // connection.query(
  //   `INSERT INTO Users (email,name,city)
  //     VALUES (?,?,?)`,
  //   [email, name, city],
  //   function (err, results) {
  //     res.send("Create user succeed !");
  //   }
  // );

  let [results, fields] = await connection.query(
    `INSERT INTO Users (email,name,city)
      VALUES (?,?,?)`,
    [email, name, city]
  );

  console.log(">>> check results: ", results);
  res.send("Create user succeed !");
};

const getCreatePage = (req, res) => {
  res.render("create.ejs");
};

const getUpdatePage = (req, res) => {
  res.render("edit.ejs");
};

module.exports = {
  getHomepage,
  getABC,
  getTest,
  postCreateUser,
  getCreatePage,
  getUpdatePage,
};
