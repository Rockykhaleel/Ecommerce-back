const mongoose = require("mongoose");
const categorySchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    decs: {
      type: String,
      required: true,
    }
  },
  { timestamps: true }
);
const Category = mongoose.model("Categories", categorySchema);
module.exports = Category;