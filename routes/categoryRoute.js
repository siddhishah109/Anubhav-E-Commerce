import express from "express"
import {createCategoryController,getAllCategoriesController,getSingleCategoryController,updateCategoryController,deleteCategoryController} from "../controller/categoryController.js"
import { requireSignIn, adminMiddleware } from "../middlewares/authMiddleware.js"

const router =express.Router()

// public routes ------------------------------------------

// get all category
router.get('/getall',getAllCategoriesController)

// get single category
router.get('/:slug',getSingleCategoryController)




// admin routes ------------------------------------------




// get all category for admin
router.get('/admin/getall',requireSignIn,adminMiddleware,getAllCategoriesController)

// get single category for admin
router.get('/admin/getone/:slug',requireSignIn,adminMiddleware,getSingleCategoryController)

// create category for admin
router.post('/admin/create',requireSignIn,adminMiddleware,createCategoryController)

// update category for admin
router.put('/admin/update/:id',requireSignIn,adminMiddleware,updateCategoryController)

// delete category for admin
router.delete('/admin/delete/:id',requireSignIn,adminMiddleware,deleteCategoryController)

export default router;
