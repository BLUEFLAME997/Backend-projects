const express=require('express');
const app=express();
const cookieParser=require('cookie-parser');
const authRoute=require('./routes/auth.route');
const courseRoute=require('./routes/course.route');

app.use(express.json());
app.use(cookieParser());

app.use('/api/auth',authRoute);
app.use('/api/course',courseRoute);

module.exports=app;