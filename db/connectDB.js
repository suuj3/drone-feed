import mongoose from "mongoose";
let isConnected = false;

export const connectTodb = async () => {
  mongoose.set('strictQuery', true);

  if (isConnected){
     console.log("mongoose connected")
     return;
  }

  try{
    await mongoose.connect("mongodb://localhost:27017/drone")

    isConnected = true;
    console.log("mongoose connected")
  }
  catch(err){
    console.log(err)
  }

}