import express from 'express'
import {addToCart,getCart,removeFromCart,} from '../controllers/cartControler.js'

const router = express.Router()

router.post('/add', addToCart);
router.get('/:userId', getCart);
router.delete('/remove/:userId/:productId', removeFromCart);

export default router
