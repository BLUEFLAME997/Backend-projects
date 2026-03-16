const express=require('express');
const userRoute=express.Router();
const userController=require('../controllers/user.controller');
const identifyUser=require('../middleware/auth.middleware');

userRoute.post('/follow/:username',identifyUser,userController.followUserController);
userRoute.post('/unfollow/:userName',identifyUser,userController.unFollowUserController);
userRoute.post('/follower/:userName',identifyUser,userController.followerStatusController);

module.exports=userRoute;