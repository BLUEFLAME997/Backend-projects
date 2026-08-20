import dotenv from 'dotenv';
dotenv.config();

import app from "./src/app.js";
import connectToDb from "./src/config/database.js";

connectToDb();

app.listen(process.env.PORT,()=>{
  console.log("Server is running on port 3000...");
})