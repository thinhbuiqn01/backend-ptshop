const mongoose = require("mongoose");
const slug = require("mongoose-slug-generator");
const Schema = mongoose.Schema;
mongoose.plugin(slug);

const Product = new Schema(
  {
    title: { type: String },
    price: { type: Number },
    image01: { type: String },
    image02: { type: String },
    categorySlug: { type: String },
    color: { type: Array, default: ["red", "white", "orange"] },
    size: { type: Array, default: ["s", "m", "l", "xl"] },
    description: { type: String },
    slug: { type: String, slug: "title", unique: true },
  },

  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Product", Product);
