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
    parentName: {
        type: String,
    },
    parentId: {
        type: String,
    },
    categoryImage: {
        type: String,
    },
    status: {
        type: Boolean,
        default: true,
    },
    createdBy: {
        type: mongoose.Schema.Types.ObjectId, ref: 'User', require: true
    },
    updatedBy: {
        type: mongoose.Schema.Types.ObjectId, ref: 'User', require: true
    },
}, { timestamps: true
});

export default mongoose.model('category', CategorySchema)

