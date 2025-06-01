const { Schema, model } = require('mongoose');

const orderSchema = new Schema({
  customerName: String,
  phone: String,
  flatAddress: String,
  items: [{ name: String, quantity: Number }],
  status: { type: String, default: 'Pending' }
}, { timestamps: true });

module.exports = model('Order', orderSchema);