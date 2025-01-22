const express = require('express');
const Transaction = require('../models/Transaction');
const router = express.Router();

// List all transactions for the selected month
router.get('/', async (req, res) => {
  const { month, search, page = 1, perPage = 10 } = req.query;

  try {
    // Convert month string (e.g., '01') into a Date object for filtering
    const startOfMonth = new Date(`2025-${month}-01T00:00:00Z`);
    const endOfMonth = new Date(`2025-${month}-31T23:59:59Z`);

    const transactions = await Transaction.find({
      dateOfSale: { $gte: startOfMonth, $lte: endOfMonth },
    })
      .skip((page - 1) * perPage)
      .limit(Number(perPage));

    res.status(200).json(transactions);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch transactions', details: error.message });
  }
});

module.exports = router;
