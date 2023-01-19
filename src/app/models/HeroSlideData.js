const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const HeroSlideData = new Schema(
  {
    title: { type: String },
    description: { type: String },
    img: { type: String },
    path: { type: String },
    color: { type: String },
  },
  { timestamps: true }
);

module.exports = mongoose.model("HeroSlideData", HeroSlideData);
