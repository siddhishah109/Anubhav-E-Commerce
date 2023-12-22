import express from "express"
import dotenv from "dotenv"
import connectDB from "./db.js"
import colors from "colors";
import cors from 'cors';
import userRoute from './routes/userRoute.js'
import productRoute from './routes/productRoute.js'
import categoryRoute from './routes/categoryRoute.js'
import orderRoute from './routes/orderRoute.js'
import reviewRoute from './routes/reviewRoute.js'
import cartRoute from './routes/cartRoute.js'
import bodyParser from "body-parser"
dotenv.config();

connectDB();

const app =express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

app.get('/',(req,res)=>{res.send( {message:'welcome'})});

app.use('/auth',userRoute);
app.use ('/product',productRoute);
app.use('/category',categoryRoute);
app.use('/order',orderRoute);
app.use('/review',reviewRoute);
app.use('/cart',cartRoute);
const port=process.env.PORT ||8022

app.listen(port,(req,res)=>{
    console.log(`server is running on ${port}`.bgCyan.white);
});