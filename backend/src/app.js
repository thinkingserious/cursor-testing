const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const compression = require('compression');
const { errorHandler } = require('./middleware/errorHandler');
const rateLimiter = require('./middleware/rateLimiter');
const routes = require('./routes');
const userRoutes = require('./routes/userRoutes');
const productRoutes = require('./routes/productRoutes');
const orderRoutes = require('./routes/orderRoutes');
const logger = require('./services/logger');
const config = require('./config');

const app = express();

app.use(cors(config.corsOptions)); // This line enables Cross-Origin Resource Sharing (CORS) for the Express app, using options defined in the `config.corsOptions` object. It allows the server to respond to requests from specified origins, enhancing security while permitting controlled access from different domains.
app.use(helmet()); // Adds the helmet middleware to enhance security by setting various HTTP headers
app.use(compression()); // Compresses responses using gzip to reduce the size of the data sent over the network 
app.use(express.json()); // Parses incoming requests with JSON payloads and adds the parsed data to the `req.body` object
app.use(rateLimiter); // Applies rate limiting to the API endpoints to prevent abuse and ensure fair usage
app.use('/api', routes); // Mounts the API routes under the `/api` path prefix
app.use('/api/users', userRoutes);
app.use('/api/products', productRoutes);
app.use('/api/orders', orderRoutes);
app.use(errorHandler); // Catches any errors that occur during request processing and sends an appropriate response

const server = app.listen(config.port, () => {
  logger.info(`Server running at http://localhost:${config.port}`);
});

process.on('unhandledRejection', (err) => {
  logger.error('Unhandled Rejection:', err);
  server.close(() => process.exit(1));
});

module.exports = app;
