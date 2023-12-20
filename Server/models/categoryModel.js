import mongoose from "mongoose";

const { Schema } = mongoose;

const categorySchema = new mongoose.Schema({
  name: { type: String, required: true, unique: true },
  description: { type: String, required: true },
  parentCategory: { type: Schema.Types.ObjectId, ref: 'category', default:'none',type:String }, 
  isActive: { type: Boolean, default: true }, 
  icon: { type: String },
  createdAt: { type: Date, default: Date.now }, 
  updatedAt: { type: Date, default: Date.now }, 

});

export default mongoose.model('category', categorySchema);
