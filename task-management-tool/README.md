# Task Management Tool

## Overview
The Task Management Tool is a full-stack application designed to help users manage their tasks efficiently. It features a modern web interface built with Angular for the frontend, a robust Node.js backend using Express, and a PostgreSQL database for data storage. The application implements JWT-based authentication to secure user data and actions.

## Project Structure
The project is organized into three main directories:

- **backend**: Contains the server-side code, including API routes, controllers, middleware, models, and tests.
- **frontend**: Contains the client-side code, including components, services, and tests for the Angular application.
- **database**: Contains SQL migration and seed files for setting up the PostgreSQL database.

## Features
- **Task Management**: Create, read, update, and delete tasks.
- **User Authentication**: Secure access to the application using JWT tokens.
- **Logging**: Middleware for logging requests and errors.
- **Testing**: Unit tests for both backend and frontend components.

## Getting Started

### Prerequisites
- Node.js (v14 or later)
- PostgreSQL (v12 or later)
- Angular CLI (v12 or later)

### Installation

1. **Clone the repository**:
   ```
   git clone <repository-url>
   cd task-management-tool
   ```

2. **Set up the backend**:
   - Navigate to the backend directory:
     ```
     cd backend
     ```
   - Install dependencies:
     ```
     npm install
     ```
   - Create a `.env` file based on the `.env.example` to configure your database connection and JWT secret.

3. **Set up the frontend**:
   - Navigate to the frontend directory:
     ```
     cd ../frontend
     ```
   - Install dependencies:
     ```
     npm install
     ```

4. **Set up the database**:
   - Run the migration script to create the necessary tables:
     ```
     psql -U <username> -d <database_name> -f ../database/migrations/001_create_tasks_table.sql
     ```
   - Seed the database with initial data:
     ```
     psql -U <username> -d <database_name> -f ../database/seeds/seed_tasks.sql
     ```

### Running the Application

- **Start the backend server**:
  ```
  cd backend
  npm start
  ```

- **Start the frontend application**:
  ```
  cd ../frontend
  ng serve
  ```

### Running Tests
- **Backend tests**:
  ```
  cd backend
  npm test
  ```

- **Frontend tests**:
  ```
  cd ../frontend
  ng test
  ```

## Contributing
Contributions are welcome! Please open an issue or submit a pull request for any improvements or bug fixes.

## License
This project is licensed under the MIT License. See the LICENSE file for details.