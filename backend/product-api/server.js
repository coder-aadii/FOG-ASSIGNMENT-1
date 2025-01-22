const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');  // Import cors

const app = express();

// Use CORS middleware before your routes
app.use(cors());  // Enable CORS for all routes

// Connect to MongoDB
const mongoURI = process.env.MONGODB_URI || 'mongodb://localhost:27017/productsdb';  // Use the environment variable or fallback to local DB
mongoose.connect(mongoURI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => console.log('Connected to MongoDB'))
  .catch(err => console.log(err));

// Product Schema
const productSchema = new mongoose.Schema({
  name: String,
  description: String,
  price: Number,
  imageUrl: String
});

const Product = mongoose.model('Product', productSchema);

// API to get products with pagination
app.get('/api/products', async (req, res) => {
  try {
    const page = parseInt(req.query.page) || 1;
    const limit = parseInt(req.query.limit) || 16;

    const totalProducts = await Product.countDocuments();
    const products = await Product.find()
      .skip((page - 1) * limit)
      .limit(limit);

    res.json({
      products,
      total: totalProducts
    });
  } catch (error) {
    res.status(500).json({ message: 'Error fetching products' });
  }
});

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
