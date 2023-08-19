import mongoose from "mongoose";

const { Schema } = mongoose;

const OrderSchema = new Schema({
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
                require: true,
            },
            purchasedQty: {
                type: Number,
                require: true,
            },

        }
    ],
    addressId: {
        type: mongoose.Schema.Types.ObjectId, ref: 'UserAddress.address', require: true
    },
    // storeId: {
    //     type: mongoose.Schema.Types.ObjectId, ref: 'Store', require: true
    // },
    shippingAddress: {
        type: String,
        require: true,
    },
    shippingDetails: {
        type: String,
       
    },
    shippingCharges: {
        type: Number,
        require: true,
    },
    taxPrice: {
        type: Number,
        require: true,
    },
    totalAmount: {
        type: Number,
        require: true,
    },

    offerDiscount: {
        type: Number,
        require: true,
    },
    couponDiscount: {
        type: Number,
        require: true,
    },
    couponApplied: {
        type: mongoose.Schema.Types.ObjectId, ref: 'Coupon', require: true,
        couponCode: {
            type: String,
            require: true,
        },
    },
    offerApplied: {
        type: mongoose.Schema.Types.ObjectId, ref: 'Offer', require: true,
        offerCode: {
            type: String,
            require: true,
        },
    },
    paymentStatus: {
        type: String,
        enum: ['pending', 'completed', 'cancelled', 'refund', 'returned', 'exchange'],
        require: true,
    },
    paymentType: {
        type: String,
        enum: ['cod', 'card', 'upi', 'netbanking', 'wallet', 'emi'],
        require: true,
    },
    paymentDetails: {
        id: {
            type: String,
        },
        status: {
            type: String,
        },

    },
    orderStatus: [
        {
            type: {
                type: String,
                enum: ['ordered', 'packed', 'shipped', 'delivered', 'cancelled', 'paid', 'refund', 'returned', 'exchange'],
                default: 'ordered',
            },
            date: {
                type: Date,
            },
            isCompleted: {
                type: Boolean,
                default: false,
            },

        }
    ],

    isDelivered: {
        type: Boolean,
        default: false,
        deliveredDate: {
            type: Date,
        },

    },
    
    isCancelled: {
        type: Boolean,
        default: false,
        cancelledDate: {
            type: Date,
        },
    },
    
    isPaid: {
        type: Boolean,
        default: false,
        paidDate: {
            type: Date,
        },
    },
    
    isPacked: {
        type: Boolean,
        default: false,
        packedDate: {
            type: Date,
        },
    },
    
    isShipped: {
        type: Boolean,
        default: false,
        shippedDate: {
            type: Date,
        },
    },
   
    isOrdered: {
        type: Boolean,
        default: false,
        orderedDate: {
            type: Date,
        },
    },
   
    isRefund: {
        type: Boolean,
        default: false,
        refundDate: {
            type: Date,
        },
    },
   
    isReturned: {
        type: Boolean,
        default: false,
        returnedDate: {
            type: Date,
        },
    },
   
    isExchange: {
        type: Boolean,
        default: false,
        exchangeDate: {
            type: Date,
        },
    },
   

}, { timestamps: true });

export default mongoose.model('Order', OrderSchema);

