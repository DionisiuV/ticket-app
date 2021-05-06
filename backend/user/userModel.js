var mongoose = require("mongoose");
const passportLocal = require("passport-local").Strategy;

//schema
var userSchema = mongoose.Schema({
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
  department: {
    type: String,
    required: true,
  },
  username: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  userType: {
    type: String,
    default: "user",
  },
  created_at: {
    type: Date,
    default: Date.now,
  },
});

// Export User Model
module.exports = mongoose.model("user", userSchema);

module.exports.get = function (callback, limit) {
  User.find(callback).limit(limit);
};
