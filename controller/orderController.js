import express from "express";
import orderModel from "../models/orderModel.js";
import userModel from "../models/userModel.js";
import productModel from "../models/productModel.js";
import { protect, admin } from "../middleware/authMiddleware.js";


// @desc    Create new order
// @route   POST /api/order
// @access  Private
export const addOrderItems = async (req, res) => {
    try {
        const {
            orderItems,
            shippingAddress,
            paymentMethod,
            itemsPrice,
            taxPrice,
            shippingPrice,
            totalPrice,
        } = req.body;
        if (orderItems && orderItems.length === 0) {
            res.status(400);
            throw new Error("No order items");
            return;
        } else {
            const order = new orderModel({
                orderItems,
                user: req.user._id,
                shippingAddress,
                paymentMethod,
                itemsPrice,
                taxPrice,
                shippingPrice,
                totalPrice,
            });
            const createdOrder = await order.save();
            res.status(201).json(createdOrder);
        }
    } catch (error) {
        console.log(error);
        res.status(500).send("Server Error");
    }
};

// @desc    Get order by ID
// @route   GET /api/order/:id
// @access  Private
export const getOrderById = async (req, res) => {
    try {
        const order = await orderModel.findById(req.params.id).populate("user", "name email");
        if (order) {
            res.json(order);
        } else {
            res.status(404);
            throw new Error("Order not found");
        }
    }
    catch (error) {
        console.log(error);
        res.status(500).send("getOrderById Error");
    }
};

// @desc    Update order to paid
// @route   PUT /api/order/:id/pay
// @access  Private
export const updateOrderToPaid = async (req, res) => {
    try {
        const order = await orderModel.findById(req.params.id);
        if (order) {
            order.isPaid = true;
            order.paidAt = Date.now();
            order.paymentResult = {
                id: req.body.id,
                status: req.body.status,
                transaction_id: req.body.transaction_id,
                update_time: req.body.update_time,
                email_address: req.body.payer.email_address,
            };
            const updatedOrder = await order.save();
            res.json(updatedOrder);
        } else {
            res.status(404);
            throw new Error("Order not found");
        }

    }
    catch (error) {
        console.log(error);
        res.status(500).send("updateOrderToPaid Error");
    }
};


// @desc    Update order to delivered
// @route   PUT /api/order/:id/deliver
// @access  Private/Admin
export const updateOrderToDelivered = async (req, res) => {
    try{
        const order = await orderModel.findById(req.params.id);
        if(order){
            order.isDelivered = true;
            order.deliveredAt = Date.now();
            const updatedOrder = await order.save();
            res.json(updatedOrder);
        }else{
            res.status(404);
            throw new Error("Order not found");
        }

    }
    catch (error) {
        console.log(error);
        res.status(500).send("updateOrderToDelivered Error");
    }
};
// @desc    Get logged in user orders
// @route   GET /api/order/myorders

export const getMyOrders = async (req, res) => {
    try {
        const orders = await orderModel.find({ user: req.user._id });
        res.json(orders);
    }
    catch (error) {
        console.log(error);
        res.status(500).send("getMyOrders Error");
    }
};

// @desc    Get all orders
// @route   GET /api/order
// @access  Private/Admin
export const getOrders = async (req, res) => {
    try {
        const orders = await orderModel.find({}).populate("user", "id name");
        res.json(orders);
    }
    catch (error) {
        console.log(error);
        res.status(500).send("getOrders Error");
    }
};

// @desc    Delete order
// @route   DELETE /api/order/:id
// @access  Private/Admin
export const deleteOrder = async (req, res) => {
    try{
        const order = await orderModel.findById(req.params.id);
        if(order){
            await order.remove();
            res.json({message: "Order removed"});
        }else{
            res.status(404);
            throw new Error("Order not found");
        }
    }
    catch (error) {
        console.log(error);
        res.status(500).send("deleteOrder Error");
    }
};






