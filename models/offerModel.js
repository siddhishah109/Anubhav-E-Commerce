const mongoose = require('mongoose');
const { Schema } = mongoose;

const offerSchema = new Schema({
    offerType: {
        type: String,
        enum: ['Coupon', 'Automatic Discount','Free Shipping', 'Free Gift', 'Sale', 'Other','product','no'],
        require: true
    },
    offerCode: {
        type: String,
        require: true
    },
    discountAmount: {
        type: Number,
        require: true
    },
    minimumPurchaseAmount: {
        type: Number,
        require: true
    },
    startDate: {
        type: Date,
        require: true
    },
    endDate: {
        type: Date,
        require: true
    }
}, { timestamps: true });

module.exports = mongoose.model('Offer', offerSchema);


