import express from "express"
import {createCategory,getCategories,getCategoryById,updateCategoryById,deleteCategoryById} from "../controllers/categoryControler.js"
const router = express.Router();

router.post("/", createCategory);
router.get("/", getCategories);
router.get("/:categoryId", getCategoryById);
router.put("/:categoryId", updateCategoryById);
router.delete("/:categoryId", deleteCategoryById);
export default router;

