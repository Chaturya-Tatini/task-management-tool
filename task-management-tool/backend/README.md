# Task Management Tool Backend

This is the backend for the Task Management Tool project, built using Node.js and Express. The backend is responsible for handling API requests, managing authentication, and interacting with the PostgreSQL database.

## Project Structure

- **src/**: Contains the source code for the backend application.
  - **app.js**: Entry point of the application, initializes the Express app and connects to the database.
  - **controllers/**: Contains the task controller for handling CRUD operations.
  - **middleware/**: Includes authentication and logging middleware.
  - **models/**: Defines the data models for the application.
  - **routes/**: Contains route definitions for task-related operations.
  - **services/**: Includes services for JWT token management.
  - **tests/**: Contains unit tests for the application.

## Getting Started

### Prerequisites

- Node.js
- PostgreSQL

### Installation

1. Clone the repository:
   ```
   git clone <repository-url>
   cd task-management-tool/backend
   ```

2. Install dependencies:
   ```
   npm install
   ```

3. Create a `.env` file in the root of the backend directory and configure your database connection and JWT secret.

### Running the Application

To start the backend server, run:
```
npm start
```

### Testing

To run the tests, use:
```
npm test
```

## API Endpoints

- **POST /tasks**: Create a new task.
- **GET /tasks**: Retrieve all tasks.
- **PUT /tasks/:id**: Update a task by ID.
- **DELETE /tasks/:id**: Delete a task by ID.

## Logging

The application uses logging middleware to log requests and errors. Ensure that the logging configuration is set up correctly in the `logger.js` file.

## Authentication

JWT-based authentication is implemented to secure the API endpoints. Use the `auth.js` middleware to protect routes.

## License

This project is licensed under the MIT License.