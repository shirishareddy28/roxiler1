const express = require('express');
const Transaction = require('../models/Transaction');
const router = express.Router();

// Combined API for transactions, bar chart, and pie chart
router.get('/', async (req, res) => {
  try {
    // Example of combining data from different APIs
    const { month } = req.query;
    const transactions = await Transaction.find({
      dateOfSale: { $gte: new Date(`2025-${month}-01`), $lte: new Date(`2025-${month}-31`) },
    });

    // Perform necessary logic for bar chart, pie chart, and other responses
    res.status(200).json({
      transactions,
      // Add bar chart and pie chart logic here...
    });
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch combined data', details: error.message });
  }
});

module.exports = router;
