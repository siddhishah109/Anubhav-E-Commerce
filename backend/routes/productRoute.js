import express from 'express';
import { createProductController, getAllProductsController, getSingleProductController, updateProductController, deleteProductController } from '../controller/productController.js';
import { requireSignIn, adminMiddleware } from '../middlewares/authMiddleware.js';
import formidable from 'express-formidable';

const router = express.Router();

// public routes ------------------------------------------

// get all product
router.get('/getall', getAllProductsController)

// get single product
router.get('/getone/:slug', getSingleProductController)


// admin routes ------------------------------------------

// admin create product
router.post('/admin/create', requireSignIn, adminMiddleware,formidable(), createProductController)

// admin get all product
router.get('/admin/getall', requireSignIn, adminMiddleware, getAllProductsController)

// update product for admin
router.put('/admin/update/:id', requireSignIn, adminMiddleware,formidable(), updateProductController)

// delete product for admin
router.delete('/admin/delete/:id', requireSignIn, adminMiddleware, deleteProductController)

export default router;

