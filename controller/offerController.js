import offerModel from '../models/offerModel.js';
import productModel from '../models/productModel.js';
import userModel from '../models/userModel.js';
import orderModel from '../models/orderModel.js';
import categoryModel from '../models/categoryModel.js';
import slugify from 'slugify';
import fs from 'fs';


export const createOfferController = async (req, res) => {
    try {
        const { name, description, price, discount, product, category, image } = req.body;
        const offer = await offerModel.create({ name, description, price, discount, product, category, image });
        res.status(200).json({ offer });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

export const getOffersController = async (req, res) => {
    try {
        const offers = await offerModel.find();
        res.status(200).json({ offers });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

export const getOfferbyIDController = async (req, res) => {
    try {
        const { id } = req.params;
        const offer = await offerModel.findById(id);
        res.status(200).json({ offer });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

export const updateOfferController = async (req, res) => {
    try {
        const { id } = req.params;
        const { name, description, price, discount, product, category, image } = req.body;
        const offer = await offerModel.findById(id);
        if (offer) {
            offer.name = name;
            offer.description = description;
            offer.price = price;
            offer.discount = discount;
            offer.product = product;
            offer.category = category;
            offer.image = image;
            await offer.save();
            res.status(200).json({ offer });
        } else {
            res.status(404).json({ message: 'Offer not found' });
        }
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

export const deleteOfferController = async (req, res) => {
    try {
        const { id } = req.params;
        const offer = await offerModel.findById(id);
        if (offer) {
            await offer.remove();
            res.status(200).json({ message: 'Offer deleted' });
        } else {
            res.status(404).json({ message: 'Offer not found' });
        }
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

export const getOfferById = async (req, res) => {
    try {
        const { id } = req.params;
        const offer = await offerModel.findById(id);
        if (offer) {
            res.status(200).json({ offer });
        } else {
            res.status(404).json({ message: 'Offer not found' });
        }
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

export const getOffersByCategory = async (req, res) => {
    try {
        const { id } = req.params;
        const offers = await offerModel.find({ category: id });
        if (offers) {
            res.status(200).json({ offers });
        } else {
            res.status(404).json({ message: 'Offers not found' });
        }
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

export const getOffersByProduct = async (req, res) => {
    try {
        const { id } = req.params;
        const offers = await offerModel.find({ product: id });
        if (offers) {
            res.status(200).json({ offers });
        } else {
            res.status(404).json({ message: 'Offers not found' });
        }
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

export const getOffersByUser = async (req, res) => {
    try {
        const { id } = req.params;
        const offers = await offerModel.find({ user: id });
        if (offers) {
            res.status(200).json({ offers });
        } else {
            res.status(404).json({ message: 'Offers not found' });
        }
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

export const getOffersByOrder = async (req, res) => {
    try {
        const { id } = req.params;
        const offers = await offerModel.find({ order: id });
        if (offers) {
            res.status(200).json({ offers });
        } else {
            res.status(404).json({ message: 'Offers not found' });
        }
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};





