import express from 'express';
import { getOfferbyIDController, getOffersController, createOfferController, updateOfferController, deleteOfferController } from '../controllers/offerController.js';
const router = express.Router();


// get offer by id for user only
router.route('/:id').get(getOfferbyIDController);

// get offer by id for admin only
router.route('/:id').get(getOfferbyIDController);

// get all offers for user only
router.route('/').get(getOffersController);

// get all offers for admin only
router.route('/admin').get(getOffersController);

// add offer items and get offers for admin only
router.route('/').post(protect, admin, createOfferController);

// update offer by id for admin only
router.route('/:id').put(protect, admin, updateOfferController);

// delete offer by id for admin only
router.route('/:id').delete(protect, admin, deleteOfferController);

export default router;

