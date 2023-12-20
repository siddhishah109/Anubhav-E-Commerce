import express from 'express';
import {createReview,getReviewsForProduct,deleteReviewById,updateReviewById,getReviewById,getAllReviews} from '../controllers/reviewControler.js'

const router = express.Router();

router.post("/", createReview);
router.get("/", getAllReviews);
router.get("/:reviewId", getReviewById);
router.get("/:productId", getReviewsForProduct);

router.put("/:reviewId", updateReviewById);
router.delete("/:reviewId", deleteReviewById);

export default router;