import mongoose from 'mongoose';
import colors from "colors"
const connectDB=async()=>{
        try {
            const conn=await mongoose.connect(process.env.Mongo_URL)
            console.log(`Connected! ${conn.connection.host}`.bgMagenta.white);
            
        } catch (error) {
            console.log(`error in mongodb ${error}`.bgRed.white)
        }
}

export default connectDB;