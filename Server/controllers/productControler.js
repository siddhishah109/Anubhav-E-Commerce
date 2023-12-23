import productModel from "../models/productModel.js";
import cloudinary from 'cloudinary';
import express from 'express';
import fileUpload from 'express-fileupload';
const app = express();
app.use(fileUpload());

cloudinary.config({ 
  cloud_name: 'dhqqyxmom', 
  api_key: '652266196299527', 
  api_secret: '8bAb4KJQzRc-Bul0dq2oHUn52Qg' 
});


export const getAllProducts = async (req, res) => {
    try {
      const products = await productModel.find();
      res.json(products);
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Internal Server Error' });
    }
  };

  export const getProductById = async (req, res) => {
    const { productId } = req.params;
  
    try {
      const product = await productModel.findById(productId);
      if (!product) {
        return res.status(404).json({ message: 'Product not found' });
      }
      res.json(product);
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Internal Server Error' });
    }
  };
  
export const createProduct = async (req, res) => {
    const newProductData = req.body;
  
    try {
      // Verify required fields
      const requiredFields = ['name', 'brand', 'category', 'description', 'price', 'countInStock'];
      const missingFields = requiredFields.filter((field) => !newProductData[field]);
  
      if (missingFields.length > 0) {
        return res.status(400).json({
          success: false,
          message: `Missing required fields: ${missingFields.join(', ')}`,
        });
      }
  if (!req.files || !req.files.images) {
        return res.status(400).json({
          success: false,
          message: 'No images uploaded.',
        });
      }

      console.log('req.body:----------', req.body);


      const uploadedImages = req.files.images;
      console.log('uploadedImages:----------', uploadedImages);
      
      const cloudinaryUploadPromises = Array.isArray(uploadedImages)
        ? uploadedImages.map(async (image) => {
            const result = await cloudinary.v2.uploader.upload(image.tempFilePath, {
              folder: 'Anubhav', // Optional: Set a folder name in your Cloudinary account
            });
            return result.secure_url;
          })
        : [uploadedImages].map(async (image) => {
            const result = await cloudinary.v2.uploader.upload(image.tempFilePath, {
              folder: 'Anubhav', // Optional: Set a folder name in your Cloudinary account
            });
            return result.secure_url;
          });
      const cloudinaryResults = await Promise.all(cloudinaryUploadPromises);
      const validCloudinaryImageUrls = cloudinaryResults.filter(url => url !== null);
      newProductData.images = validCloudinaryImageUrls;
      // Create a new product
      const newProduct = new productModel(newProductData);

      const savedProduct = await newProduct.save();
      
      res.status(201).json({
        success: true,
        product: savedProduct,
      });
    } catch (error) {
      console.error(error);
      res.status(500).json({ success: false, message: 'Internal Server Error' });
    }


    // try {
    //   const requiredFields = ['name', 'images', 'brand', 'category', 'description', 'price', 'countInStock'];
    //   const missingFields = requiredFields.filter(field => !newProductData[field]);
  
    //   if (missingFields.length > 0) {
    //     return res.status(400).json({
    //       success: false,
    //       message: `Missing required fields: ${missingFields.join(', ')}`,
    //     });
    //   }
  
    //   const newProduct = new productModel(newProductData);
  
    //   const savedProduct = await newProduct.save();
  
    //   res.status(201).json({
    //     success: true,
    //     product: savedProduct,
    //   });
    // } catch (error) {
    //   console.error(error);
    //   res.status(500).json({ success: false, message: 'Internal Server Error' });
    // }
  };

    export const updateProductById = async (req, res) => {
    const { productId } = req.params;
    const updatedProductData = req.body;
  
    try {
      const updatedProduct = await productModel.findByIdAndUpdate(
        productId,
        { $set: updatedProductData }, // Use $set to update only the specified fields
        { new: true }
      );
  
      if (!updatedProduct) {
        return res.status(404).json({ message: 'Product not found' });
      }
  
      res.json(updatedProduct);
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Internal Server Error' });
    }
  };


  export const deleteProductById = async (req, res) => {
    const { productId } = req.params;
  
    try {
      const deletedProduct = await productModel.findByIdAndDelete(productId);
      if (!deletedProduct) {
        return res.status(404).json({ message: 'Product not found' });
      }
      res.json(deletedProduct);
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Internal Server Error' });
    }
  };