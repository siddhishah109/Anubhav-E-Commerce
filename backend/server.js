// const express =require('express')
// const colors=require('colors')
import express from "express"
import colors from "colors"
import dotenv from "dotenv"
import morgan from "morgan"
import cors from "cors"
import connectDB from "./config/db.js"
import authRoutes from './routes/authRoute.js'
import categoryRoute from './routes/categoryRoute.js'
import productRotue from './routes/productRoute.js'
// import orderRoute from './routes/orderRoute.js'
import formidable from 'express-formidable';
// config .env
dotenv.config();
// database
connectDB();
//rest obj
const app =express();

app.use(cors());
//middlewares
app.use(express.json());
app.use(morgan('dev'));
app.use(formidable());

// routes
app.use('/api/auth',authRoutes);
app.use('/api/category',categoryRoute);
app.use('/api/product',productRotue);
// app.use('/api/order',orderRoute);
//api
app.get('/',(req,res)=>{res.send( {message:'welcome'})});



//port
const port=process.env.PORT ||8081


//listen
app.listen(port,(req,res)=>{
    console.log(`server is running on ${port}`.bgCyan.white);
});