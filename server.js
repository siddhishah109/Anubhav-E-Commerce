const express =require('express')
const colors=require('colors')


const app =express()
app.get('/',(req,res)=>{res.send( {message:'welcome'})})

const port=8080
app.listen(port,(req,res)=>{
    console.log(`server is running on ${port}`.bgCyan.white)
});