import express from 'express'
import {createOrder,getOrders,getOrderById,updateOrderById,deleteOrderById} from '../controllers/orderControler.js'
import {requireSignIn,adminMiddleware} from '../middlewares/userMiddleware.js'
const router = express.Router()

router.post("/", requireSignIn,createOrder);
router.get("/", getOrders);
router.get("/:orderId", getOrderById);
router.put("/:orderId",adminMiddleware, updateOrderById);
router.delete("/:orderId",adminMiddleware, deleteOrderById);

export default router