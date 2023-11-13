// import express from 'express';
// import { addOrderItems, getOrders, getMyOrders, getOrderById, updateOrderToPaid, updateOrderToDelivered, updateOrderToCancelled, updateOrder, deleteOrder, getOrdersByStatus, getOrdersByDate, getOrdersByUser, getOrdersByUserAndStatus, updateOrderStatus, updatePaymentDetails, updateShippingDetails, confirmOrder, cancelOrder } from '../controllers/orderController.js';
// import { protect, admin } from '../middleware/authMiddleware.js';

// const router = express.Router();

// // add order items and get orders for admin only 
// router.route('/').post(protect, addOrderItems).get(protect, admin, getOrders);


// // user--------------------------------------------------

// // get all orders for user only
// router.route('/myorders').get(protect, getMyOrders);

// // get order by id for user only
// router.route('/:id').get(protect, getOrderById);

// // get confirm order by id for user only
// router.route('/:id/confirm').get(protect, confirmOrder);

// //Update the status of a specific order for admin only
// router.route('/:id/status').put(protect, admin, updateOrderStatus);

// // cancel order by id for user only
// router.route('/:id/cancel').put(protect, cancelOrder);

// // Update Payment Details
// router.route('/:id/payment').put(protect, updatePaymentDetails);

// // Update Shipping Details
// router.route('/:id/shipping').put(protect, updateShippingDetails);

// // cancel order by id for user only
// router.route('/:id/cancel').put(protect, cancelOrder);

// // update order by id for user only
// router.route('/:id').put(protect, updateOrder);

// // update order to delivered for user only
// router.route('/:id/deliver').put(protect, updateOrderToDelivered);

// // update order to paid for user only
// router.route('/:id/pay').put(protect, updateOrderToPaid);

// // update order to confirmed for user only
// router.route('/:id/confirm').put(protect, confirmOrder);





// // admin--------------------------------------------------

// // get all orders for admin only
// router.route('/').get(protect, admin, getOrders);

// // get order by status for admin only
// router.route('/status/:status').get(protect, admin, getOrdersByStatus);

// // get order by date for admin only
// router.route('/date/:date').get(protect, admin, getOrdersByDate);

// // get order by user for admin only
// router.route('/user/:id').get(protect, admin, getOrdersByUser);

// // get order by user and status for admin only
// router.route('/user/:id/status/:status').get(protect, admin, getOrdersByUserAndStatus);

// // get order by id for admin only
// router.route('/:id').get(protect, admin, getOrderById);

// // delete order by id for admin only
// router.route('/:id').delete(protect, admin, deleteOrder);

// // update order by id for admin only
// router.route('/:id').put(protect, admin, updateOrder);

// // update order to delivered for admin only
// router.route('/:id/deliver').put(protect, admin, updateOrderToDelivered);

// // update order to cancelled for admin only
// router.route('/:id/cancel').put(protect, admin, updateOrderToCancelled);

// // update order to paid for admin only
// router.route('/:id/pay').put(protect, admin, updateOrderToPaid);




// export default router;
