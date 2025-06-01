const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const Order = require('./models/order.model.js');

const app = express();
app.use(cors());
app.use(express.json());

mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(() => console.log('MongoDB connected'))
  .catch(err => console.error('MongoDB connection error:', err));

app.get('/api/orders', async (req, res) => {
  const orders = await Order.find().sort({ createdAt: -1 });
  res.json(orders);
});

app.post('/api/orders', async (req, res) => {
  const order = new Order(req.body);
  await order.save();
  res.status(201).json(order);
});

app.patch('/api/orders/:id', async (req, res) => {
  const { id } = req.params;
  const updatedOrder = await Order.findByIdAndUpdate(id, req.body, { new: true });
  res.json(updatedOrder);
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));