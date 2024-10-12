project-root/
├── backend/
│   ├── src/
│   │   ├── config/
│   │   │   └── index.js
│   │   ├── middleware/
│   │   │   ├── errorHandler.js
│   │   │   └── rateLimiter.js
│   │   ├── routes/
│   │   │   ├── index.js
│   │   │   ├── userRoutes.js
│   │   │   ├── productRoutes.js
│   │   │   └── orderRoutes.js
│   │   ├── controllers/
│   │   │   ├── userController.js
│   │   │   ├── productController.js
│   │   │   └── orderController.js
│   │   ├── services/
│   │   │   └── logger.js
│   │   └── app.js
│   ├── tests/
│   │   └── app.test.js
│   ├── .env
│   ├── .eslintrc.js
│   ├── .prettierrc
│   ├── jest.config.js
│   └── package.json
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   │   └── ErrorBoundary.js
│   │   ├── pages/
│   │   │   ├── _app.js
│   │   │   └── index.js
│   │   └── services/
│   │       └── api.js
│   ├── public/
│   ├── tests/
│   │   └── index.test.js
│   ├── .env.local
│   ├── .eslintrc.js
│   ├── .prettierrc
│   ├── jest.config.js
│   └── next.config.js
├── docker-compose.yml
└── README.md