const mongoose = require("mongoose");

const items = mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  Category: String,
  Count: String,
  Condition: String,
  Mode: String,
  Date: String
});

module.exports = mongoose.model("items",items ,'items');