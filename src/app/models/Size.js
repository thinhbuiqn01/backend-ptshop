const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const Size = new Schema(
  {
    display: { type: String },
    size: { type: String },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Size", Size);
