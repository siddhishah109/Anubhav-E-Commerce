import orderModel from "../models/orderModel.js";

export const createOrder = async (req, res) => {
    try {
      const newOrder = new orderModel(req.body);
      const savedOrder = await newOrder.save();
      res.status(201).json(savedOrder);
    } catch (error) {
      console.error("Error creating order:", error);
      res.status(500).json({ error: "Internal Server Error" });
    }
  };

export const getOrders = async (req, res) => {
    try {
      const orders = await orderModel.find();
      res.status(200).json(orders);
    } catch (error) {
      console.error("Error getting orders:", error);
      res.status(500).json({ error: "Internal Server Error" });
    }
  };

  export const getOrderById = async (req, res) => {
    try {
      const order = await orderModel.findById(req.params.orderId);
      if (!order) {
        return res.status(404).json({ error: "Order not found" });
      }
      res.status(200).json(order);
    } catch (error) {
      console.error("Error getting order:", error);
      res.status(500).json({ error: "Internal Server Error" });
    }
  };

  export const updateOrderById = async (req, res) => {
    try {
      const updatedOrder = await orderModel.findByIdAndUpdate(
        req.params.orderId,
        req.body,
        { new: true }
      );
      if (!updatedOrder) {
        return res.status(404).json({ error: "Order not found" });
      }
      res.status(200).json(updatedOrder);
    } catch (error) {
      console.error("Error updating order:", error);
      res.status(500).json({ error: "Internal Server Error" });
    }
  };

  export const deleteOrderById = async (req, res) => {
    try {
      const deletedOrder = await orderModel.findByIdAndDelete(req.params.orderId);
      if (!deletedOrder) {
        return res.status(404).json({ error: "Order not found" });
      }
      res.status(204).json({ message: 'Order deleted' });
    } catch (error) {
      console.error("Error deleting order:", error);
      res.status(500).json({ error: "Internal Server Error" });
    }
  };