const express = require('express');
const router = express.Router();
const Product = require('../models/Product');

// POST /api/products - Create a new product
router.post('/', async (req, res) => {
    try {
        const product = new Product(req.body);
        const savedProduct = await product.save();
        res.status(201).json({
            success: true,
            data: savedProduct
        });
    } catch (error) {
        res.status(400).json({
            success: false,
            error: error.message
        });
    }
});

// GET /api/products - Get all products
router.get('/', async (req, res) => {
    try {
        const products = await Product.find();
        res.send({
            success: true,
            data: products
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            error: error.message
        });
    }
});

module.exports = router;