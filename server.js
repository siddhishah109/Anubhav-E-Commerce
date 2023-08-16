// const express =require('express')
// const colors=require('colors')
import express from "express"
import colors from "colors"
import dotenv from "dotenv"
import morgan from "morgan"
import connectDB from "./config/db.js"


// config .env
dotenv.config();
// database
connectDB();
//rest obj
const app =express();


//middlewares
app.use(express.json());
app.use(morgan('dev'));


//api
app.get('/',(req,res)=>{res.send( {message:'welcome'})});



//port
const port=process.env.PORT ||8081


//listen
app.listen(port,(req,res)=>{
    console.log(`server is running on ${port}`.bgCyan.white);
});