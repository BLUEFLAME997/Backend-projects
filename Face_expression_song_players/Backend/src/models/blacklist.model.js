const mongoose = require('mongoose');
const blacklistSchema = new mongoose.Schema({
  token:{
    type:String,
    required:[true,"Token is required for blacklisting"],
    unique:[true,"Same token cannot be blacklisted"]
  }
},{
  timestamps:true
})

const blackListModel = mongoose.model("blackLists",blacklistSchema);

module.exports=blackListModel;