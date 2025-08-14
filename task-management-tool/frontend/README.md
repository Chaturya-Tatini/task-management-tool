# Task Management Tool - Frontend Documentation

This is the frontend part of the Task Management Tool project, built using Angular. The frontend communicates with the backend API to manage tasks effectively.

## Project Structure

- **src/**: Contains the source code for the Angular application.
  - **app/**: Main application module and components.
    - **components/**: Contains reusable components.
      - **task-list/**: Component for displaying and managing the task list.
    - **services/**: Contains services for API calls.
  - **assets/**: Static assets like images and styles.
  - **environments/**: Environment-specific configurations.
  - **tests/**: Unit tests for components and services.

## Getting Started

1. **Installation**: 
   - Ensure you have Node.js and Angular CLI installed.
   - Navigate to the `frontend` directory and run:
     ```
     npm install
     ```

2. **Running the Application**:
   - Start the development server:
     ```
     ng serve
     ```
   - Open your browser and navigate to `http://localhost:4200`.

## Features

- **Task Management**: Create, read, update, and delete tasks.
- **JWT Authentication**: Secure API calls with JWT tokens.
- **Responsive Design**: The application is designed to be responsive and user-friendly.

## Testing

- Unit tests are located in the `src/tests` directory.
- To run the tests, use:
  ```
  ng test
  ```

## Contributing

Contributions are welcome! Please open an issue or submit a pull request for any improvements or bug fixes.

## License

This project is licensed under the MIT License. See the LICENSE file for details.