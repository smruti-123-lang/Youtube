// require("dotenv").config({path:'./env'})
import dotenv from "dotenv";
import mongoose from "mongoose";
import { DB_NAME } from "./constants.js";

import connectDB  from "./db/index.js";

dotenv.config({
    path:'./env'
})



connectDB(async () => {
    try{
        const connectionInstance = await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
        console.log(`MONGODB connected !! DB HOST: ${connectionInstance.connection.host}`)
    }
    catch(error){
        console.log("MONGODB connection error:",error)
        process.exit(1)
    }
})





/*
import express from "express";

try{
   await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
   app.on("error",(error) => {
    console.log("err:",error)
    throw error
   })
   app.listen(process.env.PORT, () =>{
    console.log(`app is listening on port ${process.env.PORT}`);
   })
}
catch(error){
    console.error("ERROR:",error)
    throw err
}
(async () => {})()*/