import express from 'express'
import {createOrder,getOrders,getOrderById,updateOrderById,deleteOrderById} from '../controllers/orderControler.js'

const router = express.Router()

router.post("/", createOrder);
router.get("/", getOrders);
router.get("/:orderId", getOrderById);
router.put("/:orderId", updateOrderById);
router.delete("/:orderId", deleteOrderById);

export default router