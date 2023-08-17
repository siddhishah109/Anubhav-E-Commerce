import slugify from 'slugify';
import categoryModel from '../models/categoryModel.js';

export const createCategoryController = async (req, res) => {
    try {
        const { name, parentId } = req.body;
        if (!name) {
            return res.send({ error: 'Name is required' });
        }
        const existingCat = await categoryModel.findOne({ name: name })
        if (existingCat) {
            return res.send({ error: 'Category already exists' });
        }

        const category = await new categoryModel({
            name, parentId, slug: slugify(name)
        }).save();

        res.status(201).send({
            success: true,
            message: 'category created successfully',
            category
        })

    } catch (error) {
        console.log(error)
        res.status(500).send({
            success: false, message: 'error in create category',
            error
        })
    }
};


export const getAllCategoriesController = async (req, res) => {
    try {
        const categories = await categoryModel.find({}).exec();
        res.status(200).send({
            success: true,
            message: 'categories fetched successfully',
            categories
        })
    } catch (error) {
        console.log(error)
        res.status(500).send({
            success: false, message: 'error in fetching categories',
            error
        })
    }
};

export const getSingleCategoryController = async (req, res) => {
    try {
        const { slug } = req.params;
        const category= await categoryModel.findOne({slug});
        res.status(200).send({
            success: true,
            message: 'single category fetched successfully',
            category
        })


    } catch (error) {
        console.log(error)
        res.status(500).send({
            success: false, message: 'error in fetching single categories',
            error
        })
        
    }
};


export const updateCategoryController = async (req, res) => {
    try {

        const { name, parentId } = req.body;
        const { id } = req.params;
        const category = await categoryModel.findByIdAndUpdate(
            id,
            { name, parentId, slug: slugify(name) },
            { new: true });
        res.status(200).send({
            success: true,
            message: 'category updated successfully',
            category
        })


    }
    catch (error) {
        console.log(error)
        res.status(500).send({
            success: false, message: 'error in updating category',
            error
        })
    }

};


export const deleteCategoryController = async (req, res) => {
    try{ 
        const { id } = req.params;
        const category = await categoryModel.findByIdAndDelete(id);
        res.status(200).send({
            success: true,
            message: 'category deleted successfully',
            category
        })
    }
    catch (error) {
        console.log(error)
        res.status(500).send({
            success: false, message: 'error in deleting category',
            error
        })
    }

};  
