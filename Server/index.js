import express from "express"
import dotenv from "dotenv"
import connectDB from "./db.js"
import colors from "colors"

dotenv.config();

connectDB();
const app =express();

app.get('/',(req,res)=>{res.send( {message:'welcome'})});


const port=process.env.PORT ||8022

app.listen(port,(req,res)=>{
    console.log(`server is running on ${port}`.bgCyan.white);
});