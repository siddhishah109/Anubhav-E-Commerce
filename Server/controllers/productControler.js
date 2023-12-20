import productModel from "../models/productModel.js";

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
      const requiredFields = ['name', 'images', 'brand', 'category', 'description', 'price', 'countInStock'];
      const missingFields = requiredFields.filter(field => !newProductData[field]);
  
      if (missingFields.length > 0) {
        return res.status(400).json({
          success: false,
          message: `Missing required fields: ${missingFields.join(', ')}`,
        });
      }
  
      // Check if a product with the same name already exists
      // const existingProduct = await productModel.findOne({ name: newProductData.name });
  
      // if (existingProduct) {
      //   return res.status(400).json({
      //     success: false,
      //     message: 'A product with the same name already exists',
      //   });
      // }
  
      // Create a new product
      const newProduct = new productModel(newProductData);
  
      // Save the new product
      const savedProduct = await newProduct.save();
  
      res.status(201).json({
        success: true,
        product: savedProduct,
      });
    } catch (error) {
      console.error(error);
      res.status(500).json({ success: false, message: 'Internal Server Error' });
    }
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