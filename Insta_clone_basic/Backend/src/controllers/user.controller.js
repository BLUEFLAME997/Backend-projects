const followModel = require('../models/follows.model');
const userModel = require('../models/user.model');

async function followUserController(req, res) {
  const followerUserName = req.user.userName;
  const followeeUserName = req.params.username;

  const isUserExists = await userModel.findOne({ userName: followerUserName });
  const isFolloweeExists = await userModel.findOne({ userName: followeeUserName });
  if (!isUserExists) {
    return res.status(404).json({
      Message: `User does not exists`
    })
  }
  if (!isFolloweeExists) {
    return res.status(404).json({
      Message: `User you are trying to follow does not exists`
    })
  }

  if (followeeUserName == followerUserName) {
    return res.status(400).json({
      Message: "You cannot follow yourself"
    })
  }

  const isFollowing = await followModel.findOne({
    follower: followerUserName,
    following: followeeUserName
  })

  if (isFollowing) {
    return res.status(200).json({
      Message: `You are already following ${followeeUserName}`,
      isFollowing
    })
  }

  const followRecord = await followModel.create({
    follower: followerUserName,
    following: followeeUserName
  })

  res.status(201).json({
    Message: `You are now following ${followeeUserName}`,
    followRecord
  })
}

async function unFollowUserController(req, res) {
  const followerUser=req.user.userName;
  const followeeUser=req.params.userName;

  const isFollowerExists=await userModel.findOne({
    userName:followerUser
  })
  if(!isFollowerExists){
    return res.status(404).json({
      Message:"User does not exist"
    })
  }
  if(followerUser===followeeUser){
    return res.status(400).json({
      Message:"You cannnot unfollow yourself"
    })
  }

  const isFolloweeExists=await userModel.findOne({
    userName:followeeUser
  })
  if(!isFolloweeExists){
    return res.status(404).json({
      Message:"User you are trying to unfollow does not exist"
    })
  }

  const followerRecord = await followModel.findOne({
    follower:followerUser,
    following:followeeUser
  })
  if(!followerRecord){
    return res.status(400).json({
      Message:"You are not following this user already"
    })
  }

  const deleteFollowRecord=await followModel.findByIdAndDelete({
    _id:followerRecord._id
  })
  res.status(200).json({
    Message:`You have unfollowed ${followeeUser}`,
    deleteFollowRecord
  })
}

async function followerStatusController(req,res){
  const followingUserName=req.user.userName;
  const followerUserName=req.params.userName;

  const isFollowingUserNameExist=await userModel.findOne({
    userName:followingUserName
  })
  if(!isFollowingUserNameExist){
    return res.status(404).json({
      Message:`User ${followingUserName} does not exist`
    })
  }

  if(followingUserName===followerUserName){
    return res.status(400).json({
      Message:"You cannot update status of yourself"
    })
  }

  const isFollowerUserNameExist=await userModel.findOne({
    userName:followerUserName
  })
  if(!isFollowerUserNameExist){
    return res.status(404).json({
      Message:`User ${followerUserName} does not exist`
    })
  }

  const isFollowExist=await followModel.findOne({
    follower:followerUserName,
    following:followingUserName
  })
  if(!isFollowExist){
    return res.status(400).json({
      Message:'User does not follow you'
    })
  }

  const {status}=req.body;
  await followModel.updateOne({
    follower:followerUserName,
    following:followingUserName
  },
  {$set:{status:status}})

  res.status(200).json({
    Message:"Status updated successfully"
  })
}

module.exports = {
  followUserController,
  unFollowUserController,
  followerStatusController
}