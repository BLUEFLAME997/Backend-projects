import bcrypt from 'bcrypt';
import mongoose from "mongoose";
const userSchema = new mongoose.Schema({
  username:{
    type:String,
    required:[true,"Username required"],
    unique:[true,"Username already exist"]
  },
  email:{
    type:String,
    required:[true,"Email required"],
    unique:[true,"Email already exist"]
  },
  password:{
    type:String,
    required:[true,"Password required"],
    minlength:6
  },
  verified:{
    type:Boolean,
    default:false
  }
},{
  timestamps:true
})

userSchema.pre('save',async function(next){
  if(!this.isModified('password')) return next();
  this.password = await bcrypt.hash(this.password,10);
  next();
})

const userModel = mongoose.model('users',userSchema);
export default userModel;