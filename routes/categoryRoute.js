import express from "express"
import {createCategoryController,getAllCategoriesController,getSingleCategoryController,updateCategoryController,deleteCategoryController} from "../controller/categoryController.js"
import { requireSignIn, adminMiddleware } from "../middlewares/authMiddleware.js"

const router =express.Router()

// create category
router.post('/create',requireSignIn,adminMiddleware,createCategoryController)

// get all category
router.get('/getall',getAllCategoriesController)

// get single category
router.get('/getone/:slug',getSingleCategoryController)

// update category
router.put('/update/:id',requireSignIn,adminMiddleware,updateCategoryController)

// delete category
router.delete('/delete/:id',requireSignIn,adminMiddleware,deleteCategoryController)

export default router;
