const mongoose = require("mongoose");
const userSchema = new mongoose.Schema({
  name: String,
  mobile: Number,
  age: Number,
});
module.exports = mongoose.model("node", userSchema);
