import mongoose from 'mongoose';
const { Schema } = mongoose;

const ratingReviewSchema = new Schema({
    rating: {
        type: Number,
        enum: [1, 2, 3, 4, 5],
        require: true
    },
    review: {
        type: String,
    },
    productId: {
        type: mongoose.Schema.Types.ObjectId, ref: 'Product', require: true
    },
    userId: {
        type: mongoose.Schema.Types.ObjectId, ref: 'User', require: true
    },
    updatedAt: {
        type: Date,
        default: Date.now,
    }
}, { timestamps: true });


module.exports = mongoose.model('RatingReview', ratingReviewSchema);



