const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const Category = new Schema(
  {
    display: { type: String },
    categorySlug: { type: String },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Category", Category);
