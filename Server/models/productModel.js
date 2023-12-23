import mongoose from "mongoose";
const {Schema}=mongoose;

const productSchema = new mongoose.Schema(
{    
    productId: {
    type: Schema.Types.ObjectId,
    default: () => new mongoose.Types.ObjectId(),
    required: true,
    unique: true,
  },
    name: { type: String, required: true, unique: true },
    images: {
      type: [String], 
      required: true,
    },
    brand: { type: String, required: true },
    category: { type: String, required: true },
    description: { type: String, required: true },
    price: { type: Number, default: 0, required: true },
    countInStock: { type: Number, default: 0, required: true },
    isAvailable:{type:Boolean,default:true},
    ratings: {average: { type: Number, default: 0, min: 0, max: 5 },count: { type: Number, default: 0, min: 0 }, },
    numReviews: { type: Number, default: 0, required: true },
    tags:{ type:[String], default:[]},
    specifications:{ type:Map, of:String},
    manufacturer: { name: { type: String }, location: { type: String }},
    isFeatured: {type: Boolean, default: false,},
    // reviews: [{ type: Schema.Types.ObjectId, ref: 'Review' }],

},
{
    timestamps: true,
}
);
export default mongoose.model('product', productSchema)