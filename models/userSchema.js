const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  country: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
  password: { type: String, required: true },
  type: { type: String },
});

const userModel = new mongoose.model("users", userSchema);
module.exports = userModel;
