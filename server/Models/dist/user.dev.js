"use strict";

var mongoose = require('mongoose');

var userSchema = new mongoose.Schema({
  username: {
    type: String,
    require: true
  },
  email: {
    type: String,
    require: true,
    unique: true
  },
  password: {
    type: String,
    require: true
  }
}, {
  timestamps: true
} //qoshilgan vaqtini jonatadi. real time
);
module.exports = mongoose.model("User", userSchema);