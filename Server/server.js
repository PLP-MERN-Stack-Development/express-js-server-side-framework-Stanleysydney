// server.js

const express = require('express');
const dotenv = require('dotenv');
const productRoutes = require('./routes/productRoutes');
const logger = require('./middlewares/logger');
const { globalErrorHandler } = require('./middlewares/errorHandler');

dotenv.config();

const app = express();

// JSON parser middleware 
app.use (express.json());

ConnectDB();
// Routes
app.use('/products', productRoutes);

//Default routes
app.get('/', (req, res) => {
  res.send('Express.js is up and running...');
}

// 404 handler for unknown routes
app.use((req, res, next) => {
  const err = new Error(`Not Found - ${req.originalUrl}`);
  err.statusCode = 404;
  next(err);

// Global error handler
app.use(globalErrorHandler);

//start server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port http://localhost:${PORT}`));