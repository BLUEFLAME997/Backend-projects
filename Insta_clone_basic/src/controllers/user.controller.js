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

module.exports = {
  followUserController,
  unFollowUserController
}