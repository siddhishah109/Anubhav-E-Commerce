import mongoose from "mongoose";
const {Schema}=mongoose;

const cartSchema = new mongoose.Schema({
    user: {
        type: Schema.Types.ObjectId,
        ref: 'user',
        required: true,
    },
    cartItems: [
        {
            product: {
                type: Schema.Types.ObjectId,
                ref: 'product',
                required: true,
            },
            quantity: { type: Number, default: 1 },
            price: { type: Number, required: true },
            name: { type: String },
            category: { type: String },
            image: { type: String },
            brand: { type: String },
            countInStock: { type: Number },
        },
    ],
}, {
    timestamps: true,
})

export default mongoose.model('cart', cartSchema)