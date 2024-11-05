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

## Project Structure

For a detailed overview of the project's directory structure and file organization, please refer to our [Project Structure Documentation](/docs/structure.md). This document provides insights into how the codebase is organized, making it easier for developers to navigate and understand the project layout.

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

3. To stop the containers:
   - If running in the foreground (with output in terminal):
     Press `Ctrl+C`
   
   - If running in detached mode (with -d flag):
     ```bash
     docker compose down
     ```

4. To remove all containers and networks:
   ```bash
   docker compose down --volumes
   ```

Note: Using `docker compose down --volumes` will remove all containers, networks, and volumes associated with this project. Use this when you want to completely clean up the Docker resources.

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

## Accessing the Application

After deploying the application, you can access it through your web browser:

1. Open your preferred web browser (e.g., Chrome, Firefox, Safari).
2. Navigate to `http://localhost:3000` (or the appropriate URL if you've deployed to a different host).

This will take you to the frontend of the application where you can interact with the user interface.

## API Access

For information on how to interact with the API directly, please refer to our [API documentation](docs/api.md). This document provides detailed examples of API usage, including how to make requests using cURL for various endpoints such as users, products, and orders.

## Contributing

Please read [CONTRIBUTING.md](CONTRIBUTING.md) for details on our code of conduct and the process for submitting pull requests.

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details.