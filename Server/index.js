import express from "express"
import dotenv from "dotenv"
import connectDB from "./db.js"
import colors from "colors"
import userRoute from './routes/userRoute.js'
import bodyParser from "body-parser"
dotenv.config();

connectDB();

const app =express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/',(req,res)=>{res.send( {message:'welcome'})});

app.use('/auth',userRoute);
const port=process.env.PORT ||8022

app.listen(port,(req,res)=>{
    console.log(`server is running on ${port}`.bgCyan.white);
});