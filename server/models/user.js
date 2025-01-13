// Importing modules
const mongoose = require("mongoose");

// Creating user schema
const UserSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  dob: {
    type: Date,
    required: false,
  },
  phone: {
    type: String,
    required: false,
  },
  isAdmin: {
    type: Boolean,
    required: true,
  },
  photoUrl: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true, // Password is required for authentication
  },
});

// Method to check whether the entered password matches
UserSchema.methods.isValidPassword = function (enteredPassword) {
  return this.password === enteredPassword;
};

module.exports = mongoose.model("User", UserSchema);
