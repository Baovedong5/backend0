const mongoose = require("mongoose");

//Shape data: dinh dang hinh thu database
const customerSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      require: true,
    },
    address: String,
    phone: String,
    email: String,
    image: String,
    description: String,
  },
  {
    timestamps: true,
  }
);

//model: ban sao cua database
const Customer = mongoose.model("Customer", customerSchema);

module.exports = Customer;
