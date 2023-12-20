import categoryModel from "../models/categoryModel.js";

export const createCategory = async (req, res) => {
    try {
      const newCategory = new categoryModel(req.body);
      const savedCategory = await newCategory.save();
      res.status(201).json(savedCategory);
    } catch (error) {
      console.error("Error creating category:", error);
      res.status(500).json({ error: "Internal Server Error" });
    }
  };
  
  export const getCategories = async (req, res) => {
    try {
      const categories = await categoryModel.find();
      res.status(200).json(categories);
    } catch (error) {
      console.error("Error getting categories:", error);
      res.status(500).json({ error: "Internal Server Error" });
    }
  };

  export const getCategoryById = async (req, res) => {
    try {
      const category = await categoryModel.findById(req.params.categoryId);
      if (!category) {
        return res.status(404).json({ error: "Category not found" });
      }
      res.status(200).json(category);
    } catch (error) {
      console.error("Error getting category:", error);
      res.status(500).json({ error: "Internal Server Error" });
    }
  };
  
  export const updateCategoryById = async (req, res) => {
    try {
      const updatedCategory = await categoryModel.findByIdAndUpdate(
        req.params.categoryId,
        req.body,
        { new: true }
      );
      if (!updatedCategory) {
        return res.status(404).json({ error: "Category not found" });
      }
      res.status(200).json(updatedCategory);
    } catch (error) {
      console.error("Error updating category:", error);
      res.status(500).json({ error: "Internal Server Error" });
    }
  };

  export const deleteCategoryById = async (req, res) => {
    try {
      const deletedCategory = await categoryModel.findByIdAndDelete(req.params.categoryId);
      if (!deletedCategory) {
        return res.status(404).json({ error: "Category not found" });
      }
      res.status(200).json({ message: 'Category deleted '});
    } catch (error) {
      console.error("Error deleting category:", error);
      res.status(500).json({ error: "Internal Server Error" });
    }
  };