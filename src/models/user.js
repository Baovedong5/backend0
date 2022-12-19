const mongoose = require("mongoose");

//Shape data: dinh dang hinh thu database
const userSchema = new mongoose.Schema({
  name: String,
  email: String,
  city: String,
});

//model: ban sao cua database
const User = mongoose.model("user", userSchema);

module.exports = User;
