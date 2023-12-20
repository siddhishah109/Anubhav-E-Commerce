import reviewModel from "../models/reviewModel.js";

export const createReview = async (req, res) => {
    try {
      const newReview = new reviewModel(req.body);
      const savedReview = await newReview.save();
      res.status(201).json(savedReview);
    } catch (error) {
      console.error("Error creating review:", error);
      res.status(500).json({ error: "Internal Server Error" });
    }
  };

export const getReviewsForProduct = async (req, res) => {
    try {
      const productId = req.params.productId;
      const reviews = await reviewModel.find({ product: productId }).populate('user');
      res.status(200).json(reviews);
    } catch (error) {
      console.error("Error getting reviews:", error);
      res.status(500).json({ error: "Internal Server Error" });
    }
};

export const deleteReviewById = async (req, res) => {
    try {
      const deletedReview = await reviewModel.findByIdAndDelete(req.params.reviewId).populate('user').populate('product');
      if (!deletedReview) {
        return res.status(404).json({ error: "Review not found" });
      }
      res.status(204).json({ message: 'Review deleted' });
    } catch (error) {
      console.error("Error deleting review:", error);
      res.status(500).json({ error: "Internal Server Error" });
    }
  };

  export const updateReviewById = async (req, res) => {
    try {
      const updatedReview = await reviewModel.findByIdAndUpdate(
        req.params.reviewId,
        req.body,
        { new: true }
      ).populate('user').populate('product');
      if (!updatedReview) {
        return res.status(404).json({ error: "Review not found" });
      }
      res.status(200).json(updatedReview);
    } catch (error) {
      console.error("Error updating review:", error);
      res.status(500).json({ error: "Internal Server Error" });
    }
  };

  export const getReviewById = async (req, res) => {
    try {
      const review = await reviewModel.findById(req.params.reviewId).populate('user').populate('product');
      if (!review) {
        return res.status(404).json({ error: "Review not found" });
      }
      res.status(200).json(review);
    } catch (error) {
      console.error("Error getting review:", error);
      res.status(500).json({ error: "Internal Server Error" });
    }
  };

  export const getAllReviews = async (req, res) => {
    try {
      const reviews = await reviewModel.find().populate('user').populate('product');
      res.status(200).json(reviews);
    } catch (error) {
      console.error("Error getting reviews:", error);
      res.status(500).json({ error: "Internal Server Error" });
    }
  };