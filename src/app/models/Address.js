const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const Address = new Schema(
  {
      Id: { type: String },
      Name: { type: String },
      Districts: { type: Array },
    
  },
  { timestamps: true }
);

module.exports = mongoose.model("Address", Address);
