import slugify from 'slugify';
import productModel from '../models/productModel.js';
import categoryModel from '../models/categoryModel.js';
import fs from 'fs';


export const createProductController = async (req, res) => {
    try {
        const { name, price, description, quantity, offer, category } = req.fields ;
        const {productPictures} = req.files;
        if (!name || !price || !description || !quantity || !category) {
            return res.send({ error: 'All fields are required (name, price, desription,quantity,category)' });
        }

        // if (productPictures.size<1) {
        //     return res.send({ error: 'At least one image is required and should be less tha 1 mb' });
        // }
        const foundCategory = await categoryModel.findOne({ name: category });
        if (!foundCategory) {
            return res.status(400).send({ error: 'Invalid category' });
        }



        const product = new productModel({
            name,
            slug: slugify(name),
            price,
            description,
            quantity,
            offer,
            category: foundCategory._id,
            createdBy: req.user._id    
        });
        if(productPictures){
            product.productPictures=fs.readFileSync(productPictures.path);
            product.productPictures.contentType=productPictures.type;

        }
       
        await product.save();
        res.status(201).send({
            success: true,
            message: 'product created successfully',
            product
        })


    }
    catch (error) {
        console.log(error)
        res.status(500).send({
            success: false, message: 'error in create products',
            error
        })
    }

};

export const getAllProductsController = async (req, res) => {
    try {
        const products = await productModel.find({})
            .populate({ path: 'category', select: '_id name' })
            .populate({ path: 'createdBy', select: '_id firstName lastName' });
        res.status(200).send({
            success: true,
            message: 'products fetched successfully',
            totalProducts: products.length,
            products
        })
    }
    catch (error) {
        console.log(error)
        res.status(500).send({
            success: false, message: 'error in get products',
            error
        })
    }

};

export const getSingleProductController = async (req, res) => {
    try {
        const { slug } = req.params;
        const product = await productModel.findOne({ slug })
            .populate({ path: 'category', select: '_id name' })
            .populate({ path: 'createdBy', select: '_id firstName lastName' });
        res.status(200).send({
            success: true,
            message: 'product fetched successfully',
            product
        })
    }
    catch (error) {
        console.log(error)
        res.status(500).send({
            success: false, message: 'error in get product',
            error
        })
    }

};


export const updateProductController = async (req, res) => {
    try {
        const { _id, name, price, description, quantity, offer, category } = req.filds;
        const {productPictures} = req.files;
        if (!name || !price || !description || !quantity || !category) {
            return res.send({ error: 'All fields are required (name, price, desription,quantity,category)' });
        }

        if (productPictures.length < 1 && productPictures.size<1) {
            return res.send({ error: 'At least one image is required and should be less tha 1 mb' });
        }

        const product = await productModel.findOneAndUpdate({ _id }, {
            name,
            slug: slugify(name),
            price,
            description,
            quantity,
            offer,
            category,
            createdBy: req.user._id    
        },{new:true});
        if(productPictures){
            product.productPictures=fs.readFileSync(productPictures.path);
            product.productPictures.contentType=productPictures.type;

        }
        await product.save();
        res.status(201).send({
            success: true,
            message: 'product updated successfully',
            product
        })


    }
    catch (error) {
        console.log(error)
        res.status(500).send({
            success: false, message: 'error in update product',
            error
        })
    }
};

export const deleteProductController = async (req, res) => {
    try {
        const { _id } = req.filds;
        const product = await productModel.findOneAndDelete({ _id });
        res.status(201).send({
            success: true,
            message: 'product deleted successfully',
            product
        })
    }
    catch (error) {
        console.log(error)
        res.status(500).send({
            success: false, message: 'error in delete product',
            error
        })
    }
};