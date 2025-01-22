const express = require('express');
const mongoose = require('./config/db');
const dotenv = require('dotenv');
const cors = require('cors');
const initializeRoutes = require('./routes/initialize');
const transactionRoutes = require('./routes/transactions');
const combinedRoutes = require('./routes/combined');

dotenv.config();
const app = express();

app.use(cors());
app.use(express.json());

// Initialize Routes
app.use('/api/initialize', initializeRoutes);
app.use('/api/transactions', transactionRoutes);
app.use('/api/combined', combinedRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
