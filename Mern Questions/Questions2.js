const express = require('express');
const Product = require('../models/Product');

const router = express.Router();

router.get('/products/:minPrice', async (req, res) => {
  const { minPrice } = req.params;
  try {
    const products = await Product.find({ price: { $gt: minPrice } }).sort({ price: -1 });
    res.status(200).json(products);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'An error occurred when fetching products' });
  }
});

module.exports = router;
