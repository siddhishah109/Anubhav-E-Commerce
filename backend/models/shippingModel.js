import mongoose from 'mongoose';
const { Schema } = mongoose;

const shippingSchema = new Schema({
    shippingName: {
        type: String,
        required: true,
    },
    shippingCost: {
        type: Number,
        required: true,
    },
    shippingTime: {
        type: Number,
        required: true,
    },
    shippingStatus: {
        type: String,
        enum: ['active', 'inactive'],
        default: 'active',
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },
}, { timestamps: true });

module.exports = mongoose.model('Shipping', shippingSchema);



