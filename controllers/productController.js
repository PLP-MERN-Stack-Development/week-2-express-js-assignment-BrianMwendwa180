const express = require('express');
const router = express.Router();
const validateProduct = require('../middleware/validateProduct');
const controller = require('../controllers/productController');

// RESTful routes
router.get('/', controller.getAllProducts);
router.get('/search', controller.searchProducts);
router.get('/stats', controller.getStats);
router.get('/:id', controller.getProductById);
router.post('/', validateProduct, controller.createProduct);
router.put('/:id', validateProduct, controller.updateProduct);
router.delete('/:id', controller.deleteProduct);

module.exports = router;
