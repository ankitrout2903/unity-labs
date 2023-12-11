const User = require('../models/User');
const Catalog = require('../models/Catalog');
const Order = require('../models/Order');

const getListOfSellers = async (req, res) => {
  try {
    const sellers = await User.find({ userType: 'seller' });
    res.json(sellers);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch sellers' });
  }
};

const getSellerCatalog = async (req, res) => {
  try {
    const { seller_id } = req.params;
    const catalog = await Catalog.findOne({ seller: seller_id }).populate('products');
    res.json(catalog);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch seller catalog' });
  }
};

const createOrder = async (req, res) => {
  try {
    const { seller_id } = req.params;
    const { products } = req.body;
    const buyer_id = req.user.userId; // Assuming you include user information in the request
    const order = new Order({ buyer: buyer_id, seller: seller_id, products });
    await order.save();
    res.json({ message: 'Order created successfully' });
  } catch (error) {
    res.status(500).json({ error: 'Failed to create order' });
  }
};

module.exports = { getListOfSellers, getSellerCatalog, createOrder };
