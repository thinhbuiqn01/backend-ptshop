const mongoose = require("mongoose");
const userSchema = new mongoose.Schema({
  username: {
    type: String,
    min: 8,
    max: 30,
    unique: true,
  },
  
  phone: {
    type: String,
    length: 10,
    unique: true,
  },
  email: {
    type: String, 
    unique: true,
  },
  password: {
    type: String,
    min: 6,
    max: 20,
    require: true,
  }, 
});

module.exports = mongoose.model("Users", userSchema);
