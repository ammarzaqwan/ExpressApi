const {Router}=require('express');
const {  createProduct, getProductById,getProduct, deleteProductById, updateProductById} = require('../controllers/products.controller');
const router = Router();

router.route('/').get(getProduct).post(createProduct);


router.route('/:id').get(getProductById).delete(deleteProductById).patch(updateProductById);

module.exports = router;