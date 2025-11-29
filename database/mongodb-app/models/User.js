const mongoose = require("mongoose");

// create schema for user table
const userSchema = new mongoose.Schema({
  name: String,
  email: String,
});

module.exports = mongoose.model("User", userSchema); // model and schema name in function param used to export to outside access
