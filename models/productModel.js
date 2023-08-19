import mongoose from "mongoose";

const { Schema } = mongoose;

const ProductSchema = new Schema({
    name: {
        type: String,
        require: true,
        trim: true
    },
    slug: {
        type: String,
        require: true,
        unique: true
    },
    price: {
        type: Number,
        require: true,
    },
    quantity: {
        type: Number,
        require: true,
    },
    description: {
        type: String,
        require: true,
        trim: true
    },
    offer:{
        type:mongoose.Schema.Types.ObjectId, ref: 'Offer', 
    },
    productPriceAfterDiscount:{
        type: Number,
    },
    productPictures:{
        type: Array,require: true, default: [] , },
    category: {
        type: mongoose.Schema.Types.ObjectId, ref: 'Category', require: true
    },
    createdBy: {
        type: mongoose.Schema.Types.ObjectId, ref: 'User', require: true
    },
    // storeId: {
    //     type: mongoose.Schema.Types.ObjectId, ref: 'Store', require: true
    // },
    

    updatedAt: Date
}, { timestamps: true });

export default mongoose.model('Product', ProductSchema);










