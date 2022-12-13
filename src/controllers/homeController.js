const connection = require("../config/dataBase");

const getHomepage = (req, res) => {
  //processdata => call model
  let users = [];
  connection.query("select * from Users", function (err, results, fields) {
    users = results;
    console.log(">>> results= ", results); // results contains rows returned by server
    // console.log(">>> check users ", users);
    res.send(JSON.stringify(users));
  });
};

const getABC = (req, res) => {
  res.send("check ABC");
};

const getTest = (req, res) => {
  res.render("sample.ejs");
};

module.exports = { getHomepage, getABC, getTest };
