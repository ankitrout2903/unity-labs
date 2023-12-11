const User = require('../models/User');
const Catalog = require('../models/Catalog');
const Order = require('../models/Order');

const createCatalog = async (req, res) => {
  try {
    const { products } = req.body;
    const seller_id = req.user.userId; // Assuming you include user information in the request
    const catalog = new Catalog({ seller: seller_id, products });
    await catalog.save();
    res.json({ message: 'Catalog created successfully' });
  } catch (error) {
    res.status(500).json({ error: 'Failed to create catalog' });
  }
};

const getOrders = async (req, res) => {
  try {
    const seller_id = req.user.userId; // Assuming you include user information in the request
    const orders = await Order.find({ seller: seller_id });
    res.json(orders);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch orders' });
  }
};

module.exports = { createCatalog, getOrders };
