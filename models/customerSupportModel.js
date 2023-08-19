import mongoose from 'mongoose';
const { Schema } = mongoose;

const messageSchema = new Schema({
    sender: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true,
    },
    type: {
        type: String,
        enum: ['urgent', 'normal', 'low', 'high', 'medium', 'critical'],
        default: 'normal',
    },

    title: {
        type: String,
        enum: ['query', 'complain', 'feedback', 'suggestion', 'other', 'report', 'refund', 'payment', 'delivery', 'order', 'cancel', 'return', 'exchange', 'other'],
        required: true,
    },
    subject: {
        type: String,
        required: true,
    },

    content: {
        type: String,
        required: true,
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },
});

const customerSupportSchema = new Schema({
    coustomerId: {
        type: mongoose.Schema.Types.ObjectId, ref: 'User', require: true
    },
    ticketId: {
        type: String,
        require: true
    },
    ticketStatus: {
        type: String,
        enum: ['open', 'close'],
        default: 'open'
    },
    customerServiceAgentId: {
        type: mongoose.Schema.Types.ObjectId, ref: 'User', require: true
    },


    messages: [messageSchema],
    updatedAt: {
        type: Date,
        default: Date.now,
    }
}, { timestamps: true });

module.exports = mongoose.model('CustomerSupport', customerSupportSchema);