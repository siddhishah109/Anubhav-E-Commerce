import mongoose from "mongoose";

const { Schema } = mongoose;

const UserSchema = new Schema({
    name: {
        type: String,
        require: true,
        trim: true
    },
    email: {
        type: String,
        require: true,
        unique: true,
    },
    password: {
        type: String,
        require: true,
    },
    phone: {
        type: String,
        require: true
    },
    address: {type: String },
    hidden: {type:Boolean,
    default:false},
    role: {
        type:Number,
        default:0
    },
    
},{timestamps:true});

export default mongoose.model('user', UserSchema)