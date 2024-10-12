# Full-Stack Hello World Application

This project is a full-stack "Hello World" application with a Node.js/Express backend and a Next.js frontend. It's designed to serve as a template for building production-ready web applications.

## Features

- Node.js/Express backend
- Next.js frontend
- Docker configuration for easy deployment
- Error handling and logging
- CORS configuration
- Security headers
- Rate limiting
- API service in the frontend
- Error boundaries in React
- Environment configuration
- Basic SEO optimization

## Prerequisites

Before you begin, ensure you have the following installed:
- Node.js (v14 or later)
- npm (v6 or later)
- Docker and Docker Compose (for containerized deployment)

## Getting Started

### Clone the repository

```bash
git clone https://github.com/thinkingserious/cursor-testing.git
cd cursor-testing
```

### Backend Setup

1. Navigate to the backend directory:
   ```bash
   cd backend
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Create a `.env` file in the backend directory and add the following:
   ```
   PORT=3001
   NODE_ENV=development
   LOG_LEVEL=info
   FRONTEND_URL=http://localhost:3000
   ```

4. Start the backend server:
   ```bash
   npm run dev
   ```

   The backend will be available at `http://localhost:3001`.

### Frontend Setup

1. Open a new terminal and navigate to the frontend directory:
   ```bash
   cd frontend
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Create a `.env.local` file in the frontend directory and add the following:
   ```
   NEXT_PUBLIC_API_URL=http://localhost:3001/api
   ```

4. Start the frontend development server:
   ```bash
   npm run dev
   ```

   The frontend will be available at `http://localhost:3000`.

## Running with Docker

To run the entire application using Docker:

1. Ensure you're in the project root directory.

2. Build and start the containers:
   ```bash
   docker compose up --build
   ```

   The backend will be available at `http://localhost:3001` and the frontend at `http://localhost:3000`.

## Testing

### Backend Tests

In the backend directory:

   ```bash
   npm test
   ```

### Frontend Tests

In the frontend directory:

   ```bash
   npm test
   ```

## Linting

### Backend Linting

In the backend directory:

   ```bash
   npm run lint
   ```

### Frontend Linting

In the frontend directory:

   ```bash
   npm run lint
   ```

## Production Deployment

1. Update the `.env` files in both backend and frontend directories with production values.

2. Build the frontend:
   ```bash
   cd frontend
   npm run build
   ```

3. Use the Docker Compose file to deploy both services:
   ```bash
   docker compose -f docker-compose.prod.yml up -d
   ```

## Contributing

Please read [CONTRIBUTING.md](CONTRIBUTING.md) for details on our code of conduct and the process for submitting pull requests.

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details.