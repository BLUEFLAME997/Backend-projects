import dotenv from 'dotenv'
dotenv.config();
import mongoose from 'mongoose';

async function connectToDb(){
  await mongoose.connect(process.env.MONGO_URI);
  console.log('Server connected to database');
}

export default connectToDb