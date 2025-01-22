const express = require('express');
const axios = require('axios');
const Transaction = require('../models/Transaction');
const router = express.Router();

// Initialize Database with seed data from the third-party API
router.get('/', async (req, res) => {
  try {
    const url = 'https://s3.amazonaws.com/roxiler.com/product_transaction.json';
    const { data } = await axios.get(url);

    // Clear the existing data
    await Transaction.deleteMany({});

    // Insert new data into the database
    await Transaction.insertMany(data);

    res.status(200).json({ message: 'Database initialized successfully' });
  } catch (error) {
    res.status(500).json({ error: 'Failed to initialize database', details: error.message });
  }
});

module.exports = router;
