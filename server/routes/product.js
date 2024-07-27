const express = require('express');
const Product = require('../models/Product');
const fileUpload = require('../middleware/fileUpload');
const path = require('path');

const router = express.Router();

router.post('/add', fileUpload, async (req, res) => {
    try {
        console.log('Received product data:', req.body);
        console.log('Received files:', req.files);

        let productData = {
            IdRestaurant: req.body.IdRestaurant,
            name: req.body.name,
            price: parseFloat(req.body.price),
            Quantity: parseInt(req.body.Quantity),
            description: req.body.description
        };

        if (req.files && req.files.photo && req.files.photo[0]) {
            productData.photo = path.basename(req.files.photo[0].path);
        }

        const newProduct = new Product(productData);
        const savedProduct = await newProduct.save();

        console.log('Product saved:', savedProduct);

        res.status(201).json({ message: 'Product created successfully', product: savedProduct });
    } catch (error) {
        console.error('Error saving product:', error);
        res.status(500).json({ message: 'Error creating product: ' + error.message });
    }
});

router.get('/products', async (req, res) => {
    try {
      const page = parseInt(req.query.page) || 1;
      const limit = parseInt(req.query.limit) || 10;
      const search = req.query.search || '';
      const userId = req.user._id; // Assuming you have user info in req.user
  
      const query = {
        IdRestaurant: userId,
        name: { $regex: search, $options: 'i' }
      };
  
      const total = await Product.countDocuments(query);
      const totalPages = Math.ceil(total / limit);
  
      const products = await Product.find(query)
        .skip((page - 1) * limit)
        .limit(limit)
        .sort({ createdAt: -1 });
  
      res.json({
        products,
        totalPages,
        currentPage: page
      });
    } catch (error) {
      res.status(500).json({ message: 'Error fetching products', error: error.message });
    }
  });
  
  router.delete('/products/:id', async (req, res) => {
    try {
      const productId = req.params.id;
      const userId = req.user._id; // Assuming you have user info in req.user
  
      const product = await Product.findOne({ _id: productId, IdRestaurant: userId });
  
      if (!product) {
        return res.status(404).json({ message: 'Product not found or you don\'t have permission to delete it' });
      }
  
      await Product.deleteOne({ _id: productId });
      res.json({ message: 'Product deleted successfully' });
    } catch (error) {
      res.status(500).json({ message: 'Error deleting product', error: error.message });
    }
  });

  router.get('/products/:id', async (req, res) => {
    try {
      const product = await Product.findById(req.params.id);
      if (!product) {
        return res.status(404).json({ message: 'Product not found' });
      }
      res.json(product);
    } catch (error) {
      res.status(500).json({ message: 'Error fetching product', error: error.message });
    }
  });
  
  router.put('/products/:id', fileUpload, async (req, res) => {
    try {
      let updateData = req.body;
      
      if (req.files && req.files.photo) {
        updateData.photo = req.files.photo[0].filename;
      }
  
      const updatedProduct = await Product.findByIdAndUpdate(
        req.params.id,
        updateData,
        { new: true }
      );
  
      if (!updatedProduct) {
        return res.status(404).json({ message: 'Product not found' });
      }
  
      res.json(updatedProduct);
    } catch (error) {
      res.status(500).json({ message: 'Error updating product', error: error.message });
    }
  });

module.exports = router;