const rateLimit = require('express-rate-limit');
const config = require('../config');

module.exports = rateLimit(config.rateLimit);
