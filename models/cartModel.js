import mongoose from "mongoose";

const { Schema } = mongoose;

const cartSchema = new Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId, ref: 'User', require: true
    },
    items: [
        {
            productId: {
                type: mongoose.Schema.Types.ObjectId, ref: 'Product', require: true
            },
            payablePrice: {
                type: Number,
                require: true
            },
            purchasedQty: {
                type: Number,
                require: true
            }
        }
    ],
    createdAt: {
        type: Date,
        default: Date.now()
    },
    updatedAt: Date,
    

}, { timestamps: true });