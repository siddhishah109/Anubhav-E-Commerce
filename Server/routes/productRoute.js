import express from "express"
import {getAllProducts,getProductById,createProduct,updateProductById,deleteProductById} from '../controllers/productControler.js'
const router = express.Router();


router.get('/', getAllProducts);
router.get('/:productId', getProductById);
router.post('/', createProduct);
router.patch('/:productId', updateProductById);
router.delete('/:productId', deleteProductById);

export default router;