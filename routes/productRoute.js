import express from 'express';
import { createProductController, getAllProductsController, getSingleProductController, updateProductController, deleteProductController } from '../controller/productController.js';
import { requireSignIn, adminMiddleware } from '../middlewares/authMiddleware.js';
import formidable from 'express-formidable';

const router = express.Router();

// create product
router.post('/create', requireSignIn, adminMiddleware,formidable(), createProductController)

// get all product
router.get('/getall', getAllProductsController)

// get single product
router.get('/getone/:slug', getSingleProductController)

// update product
router.put('/update/:id', requireSignIn, adminMiddleware, updateProductController)

// delete product
router.delete('/delete/:id', requireSignIn, adminMiddleware, deleteProductController)

export default router;

