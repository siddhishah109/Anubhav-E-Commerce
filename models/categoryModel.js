import mongoose from "mongoose";

const { Schema } = mongoose;

const CategorySchema = new Schema({
    name: {
        type: String,
        require: true,
        trim: true
    },
    slug: {
        type: String,
        require: true,
        unique: true
    },
    parentId: {
        type: String,
    }
});

export default mongoose.model('category', CategorySchema)

