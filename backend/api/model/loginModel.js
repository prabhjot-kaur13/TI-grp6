const mongoose = require("mongoose");
const userSchema = mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  email: {
    type: String,
    required: true,
    },
  pointId: {
    type: Number,
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
  contact: {
    type: Number,
    required: true,
  },
  dept: {
    type: String,
    required: true,
  },
  role: {
    type: String,
    required: false,
  },
});

module.exports = mongoose.model("userInfo", userSchema);