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

// Update the corresponding user's reviews array when a review is saved
reviewSchema.post('save', async function (doc, next) {
    try {
        // Find the corresponding user and push the review's ID to the reviews array
        await mongoose.model('user').findByIdAndUpdate(doc.user, { $push: { reviews: doc._id } });
        next();
    } catch (error) {
        next(error);
    }
});


export default mongoose.model('review', reviewSchema)