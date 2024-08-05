const express = require('express');
const Order = require('../models/Order');
const Product = require('../models/Product');

const router = express.Router();

// Add product to cart
router.post('/cart/add', async (req, res) => {
  if (!req.isAuthenticated()) {
    return res.status(401).json({ message: 'Not authenticated' });
  }

  try {
    const { productId, quantity, description } = req.body;
    const userId = req.user._id;

    let order = await Order.findOne({ userId, status: 'active' });

    if (!order) {
      order = new Order({ userId, products: [] });
    }

    const existingProductIndex = order.products.findIndex(
      (p) => p.productId.toString() === productId
    );

    if (existingProductIndex > -1) {
      order.products[existingProductIndex].quantity = quantity;
      order.products[existingProductIndex].description = description;
    } else {
      order.products.push({ productId, quantity, description });
    }

    await order.save();

    res.json({ message: 'Product added to cart', order });
  } catch (error) {
    res.status(500).json({ message: 'Error adding product to cart', error: error.message });
  }
});

// Remove product from cart
router.post('/cart/remove', async (req, res) => {
  if (!req.isAuthenticated()) {
    return res.status(401).json({ message: 'Not authenticated' });
  }

  try {
    const { productId } = req.body;
    const userId = req.user._id;

    const order = await Order.findOne({ userId, status: 'active' });

    if (!order) {
      return res.status(404).json({ message: 'No active order found' });
    }

    const productIndex = order.products.findIndex(
      (p) => p.productId.toString() === productId
    );

    if (productIndex > -1) {
      order.products.splice(productIndex, 1);
      await order.save();
      res.json({ message: 'Product removed from cart', order });
    } else {
      res.status(404).json({ message: 'Product not found in cart' });
    }
  } catch (error) {
    res.status(500).json({ message: 'Error removing product from cart', error: error.message });
  }
});

// Get cart items count
router.get('/cart/count', async (req, res) => {
  if (!req.isAuthenticated()) {
    return res.status(401).json({ message: 'Not authenticated' });
  }

  try {
    const userId = req.user._id;
    const order = await Order.findOne({ userId, status: 'active' });

    if (!order) {
      return res.json({ count: 0 });
    }

    const count = order.products.length;
    res.json({ count });
  } catch (error) {
    res.status(500).json({ message: 'Error fetching cart count', error: error.message });
  }
});

// Get active order details
router.get('/cart', async (req, res) => {
  if (!req.isAuthenticated()) {
    return res.status(401).json({ message: 'Not authenticated' });
  }

  try {
    const userId = req.user._id;
    const order = await Order.findOne({ userId, status: 'active' }).populate('products.productId');

    if (!order) {
      return res.json({ message: 'No active order found', order: null });
    }

    res.json({ order });
  } catch (error) {
    res.status(500).json({ message: 'Error fetching cart details', error: error.message });
  }
});

// Confirm order
router.post('/cart/confirm', async (req, res) => {
  if (!req.isAuthenticated()) {
    return res.status(401).json({ message: 'Not authenticated' });
  }

  try {
    const userId = req.user._id;
    const order = await Order.findOne({ userId, status: 'active' });

    if (!order) {
      return res.status(404).json({ message: 'No active order found' });
    }

    order.status = 'terminated';
    await order.save();

    res.json({ message: 'Order confirmed successfully', order });
  } catch (error) {
    res.status(500).json({ message: 'Error confirming order', error: error.message });
  }
});

// Cancel entire order
router.post('/cart/cancel', async (req, res) => {
  if (!req.isAuthenticated()) {
    return res.status(401).json({ message: 'Not authenticated' });
  }

  try {
    const userId = req.user._id;
    const result = await Order.findOneAndDelete({ userId, status: 'active' });

    if (!result) {
      return res.status(404).json({ message: 'No active order found' });
    }

    res.json({ message: 'Order cancelled successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Error cancelling order', error: error.message });
  }
});

module.exports = router;