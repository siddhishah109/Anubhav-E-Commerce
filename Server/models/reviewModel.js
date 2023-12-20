import mongoose from "mongoose";

const { Schema } = mongoose;

const reviewSchema = new Schema({
    user: {
        type: Schema.Types.ObjectId,
        ref: 'user',
        required: true,
    },
    product: {
        type: Schema.Types.ObjectId,
        ref: 'product',
        required: true,
    },
    rating: { type: Number, required: true, min: 0, max: 5 },
    comment: { type: String },
}, {
    timestamps: true,
})

export default mongoose.model('review', reviewSchema)