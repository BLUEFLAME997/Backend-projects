const mongoose = require('mongoose');
const userSchema = new mongoose.Schema({
  userName: {
    type: String,
    required: [true, "Username required"],
    unique: [true, "Username already exist"]
  },
  email: {
    type: String,
    required: [true, "Email required"],
    unique: [true, "Email already exist"]
  },
  password: {
    type: String,
    required: [true, "Password required"],
    select:false
  }
})

const userModel = mongoose.model("users",userSchema);
module.exports = userModel;