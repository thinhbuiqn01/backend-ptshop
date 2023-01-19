const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const Policy = new Schema(
  {
    name: { type: String },
    description: { type: String },
    icon: { type: String },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Policy", Policy);
