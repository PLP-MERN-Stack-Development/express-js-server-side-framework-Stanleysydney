// middlewares/auth.js
const { UnauthorizedError } = require('../utils/errors');

module.exports = function auth(req, res, next) {
  const apiKey = req.headers['x-api-key'] || req.headers['authorization'];
  const expected = process.env.API_KEY;

  if (!expected) {
    console.warn('API_KEY not set in environment; auth middleware will reject requests');
  }

  if (!apiKey) {
    return next(new UnauthorizedError('API key is missing'));
  }

  // support "Bearer KEY" or plain key
  const token = apiKey.startsWith('Bearer ') ? apiKey.split(' ')[1] : apiKey;

  if (token !== expected) {
    return next(new UnauthorizedError('Invalid API key'));
  }

  next();
};
