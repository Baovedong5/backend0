const mongoose = require("mongoose");

//Shape data: dinh dang hinh thu database
const kittySchema = new mongoose.Schema({
  name: String,
});

//model: ban sao cua database
const Kitten = mongoose.model("Kitten", kittySchema);

module.exports = Kitten;
