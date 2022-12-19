const mongoose = require("mongoose");
require("dotenv").config();

var dbState = [
  {
    value: 0,
    label: "disconnected",
  },
  {
    value: 1,
    label: "connected",
  },
  {
    value: 2,
    label: "connecting",
  },
  {
    value: 3,
    label: "disconnecting",
  },
];

const connection = async () => {
  // Or:
  const options = {
    user: process.env.DB_USER,
    pass: process.env.DB_PASSWORD,
  };
  await mongoose.connect(process.env.DB_HOST, options);
  const state = Number(mongoose.connection.readyState);
  console.log(dbState.find((f) => f.value == state).label, "to db"); // connected to db
};

module.exports = connection;
