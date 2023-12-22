import mongoose from "mongoose";

const {Schema}=mongoose;

const UserSchema = new Schema({
    userId: {
        type: Schema.Types.ObjectId,
        default: () => new mongoose.Types.ObjectId(),
        required: true,
        unique: true,
      },
    name: { type: String, required: true, trim: true },
    email: { type: String, required: true, unique: true, },
    password: { type: String, required: true },
    phone: { type: Number, required: true },
    address: { type: String },
    language: { type: String },
    newsletterSubscriptions: { type: Object },
    notificationPreferences: { type: Object },
    socialMedia: {
        socialLogin: { type: Boolean, default: false },
        socialMediaId: { type: String },
        socialMediaType: { type: String },
      },
    role: { type: Number, default: 1 },
    hidden: { type: Boolean, default: false },

    reviews: [{
        type: Schema.Types.ObjectId,
        ref: 'review',
    }],

    // orderHistory:{
    //     type:Array,
    //     default:[]
    // },
    // shoppingCart:{
    //     type:Array,
    //     default:[]
    // },
    // wishlist:{
    //     type:Array,
    //     default:[]
    // },
    // recommendedProducts:{
    //     type:Array,
    //     default:[]
    // },
    // recentlyViewed:{
    //     type:Array,
    //     default:[]
    // },
    // paymentMethods:{
    //     type:Array,
    //     default:[]
    // },
    // billingInformation:{
    //     type:Object
    // },
    // defaultShippingAddress:{
    //     type:Object
    // },
    // shippingMethodPreferences:{
    //     type:Object
    // },
    // customerServiceFeedback:{
    //      type:String
    // },

    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date, default: Date.now },


    // orderHistory: [{ type: Schema.Types.ObjectId, ref: 'Order' }],
    // wishlist: [{ type: Schema.Types.ObjectId, ref: 'Product' }],
  
    // shoppingCart: [{ type: Schema.Types.ObjectId, ref: 'Product' }],
  
    // recommendedProducts: [{ type: Schema.Types.ObjectId, ref: 'Product' }],
    // recentlyViewed: [{ type: Schema.Types.ObjectId, ref: 'Product' }],
  
    // paymentMethods: [{ type: Schema.Types.ObjectId, ref: 'PaymentMethod' }],
    // billingInformation: { type: Object },
  
    // defaultShippingAddress: { type: Schema.Types.ObjectId, ref: 'Address' },
    // shippingMethodPreferences: { type: Object },
    // customerServiceFeedback: { type: String },

},{timestamps:true});

export default mongoose.model('user', UserSchema)