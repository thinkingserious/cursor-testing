const logger = require('../services/logger');

exports.errorHandler = (err, req, res, next) => {
  logger.error(err.stack);

  res.status(err.status || 500).json({
    error: {
      message: err.message,
      ...(process.env.NODE_ENV === 'development' && { stack: err.stack })
    }
  });
};
