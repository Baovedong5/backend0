const getHomepage = (req, res) => {
  //processdata => call model
  res.send("Hello World! & nodemon");
};

const getABC = (req, res) => {
  res.send("check ABC");
};

const getTest = (req, res) => {
  res.render("sample.ejs");
};

module.exports = { getHomepage, getABC, getTest };
