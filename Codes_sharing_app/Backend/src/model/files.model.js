const mongoose=require('mongoose');

const fileSchema=new mongoose.Schema({
  snippetId:{
    type:String,
    required:[true,"Snipped id is required"],
    unique:[true,"Snipped id already exist"]
  },
  fileName:{
    type:String,
    required:[true,"Filename is required"],
    unique:[true,"Filename already exist"]
  },
  language:{
    type:String,
    required:[true,"Language specification is required"],
  },
  userId:{
    type:mongoose.Schema.Types.ObjectId,
    required:[true,"User id required"]
  },
  codeSnippet:{
    type:String,
    required:[true,"Code content required"]
  },
  isPublic:{
    type:Boolean,
    default:true
  }
})

const fileModel=mongoose.model('CodeFiles',fileSchema);

module.exports=fileModel;