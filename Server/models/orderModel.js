import mongoose from "mongoose";

const { Schema } = mongoose;

const orderSchema = new Schema({
  customer: {
    type: Schema.Types.ObjectId,
    ref: 'user', 
    required: true,
  },

      products: [
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
        
        },
      ],

      totalAmount: { type: Number, required: true },
      status: {
        type: String,
        enum: ['Pending', 'Processing', 'Shipped', 'Delivered'],
        default: 'Pending',
      },

      payment: {
        method: { type: String, required: true },
        transactionId: { type: String },
        status: { type: String, enum: ['Pending', 'Success', 'Failed'], default: 'Pending' },
      },
      shipping: {
        method: { type: String, required: true },
        trackingNumber: { type: String },
        estimatedDelivery: { type: Date },
      },
      discount: {
        code: { type: String },
        amount: { type: Number, default: 0 },
      },
      notes: { type: String },

      billing: {
        name: { type: String, required: true },
        address: {
          street: { type: String, required: true },
          city: { type: String, required: true },
          state: { type: String, required: true },
          zip: { type: String, required: true },
          country: { type: String, required: true },
        },
        phoneNumber: { type: String },
        email: { type: String },
      },
}
,
{
    timestamps: true,
})

export default mongoose.model('order', orderSchema)