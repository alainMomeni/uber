const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  products: [{
    productId: { type: mongoose.Schema.Types.ObjectId, ref: 'Product', required: true },
    quantity: { type: Number, required: true, default: 1 },
    description: { type: String, default: '' }
  }],
  status: { type: String, enum: ['active', 'terminated'], default: 'active' },
}, { timestamps: true });

module.exports = mongoose.model('Order', orderSchema);