//DB Connections
const mongoose = require("mongoose");

mongoose
  .connect("mongodb://127.0.0.1:27017/eCommerce")
  .then(() => console.log("Connected to db...!!!"))
  .catch((err) => {
    console.log("Error Occured ", err);
  });

const Product = require("./product");
const User = require("./user_model");