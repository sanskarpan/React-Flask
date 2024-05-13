# Full Stack Project

This is a full-stack web application built using Flask for the backend and React for the frontend. The application allows users to manage employee data through a user-friendly admin panel.

## Features

- Add new employees with details such as name, position, and salary.
- View a list of all employees with the ability to filter by name and salary.
- Update existing employee details.
- Delete employees from the database.

## Technologies Used

- Flask: Python web framework for the backend.
- SQLAlchemy: SQL toolkit and Object-Relational Mapping (ORM) library for database interactions.
- React: JavaScript library for building user interfaces.
- Axios: Promise-based HTTP client for making requests from the frontend.
- SQLite: Lightweight SQL database used for storing employee data.
- npm: Package manager for managing frontend dependencies.

## Project Structure

The project is structured as follows:

- `app/`: Contains the Flask backend application.
  - `__init__.py`: Initializes the Flask application and configures extensions.
  - `models.py`: Defines database models using SQLAlchemy.
  - `routes.py`: Defines API routes and handles requests.
- `frontend/`: Contains the React frontend application.
  - `public/`: Contains static assets and the HTML template.
  - `src/`: Contains React components, styles, and other frontend code.
- `run.py`: Entry point for running the Flask application.

## Getting Started

1. Clone the repository:

   ```bash
   git clone https://github.com/your-username/full-stack-project.git

2. Navigate to the project directory:

```bash
cd full-stack-project
```

##Set up the backend:

```bash

cd app
python -m venv venv  # Create a virtual environment (optional)
source venv/bin/activate  # Activate virtual environment (Linux/Mac)
venv\Scripts\activate  # Activate virtual environment (Windows)
pip install -r requirements.txt  # Install Python dependencies
python run.py  # Run the Flask backend
```
##Set up the frontend:

```bash
cd frontend
npm install  # Install frontend dependencies
npm start  # Run the React frontend
```
##Access the application:

Backend: http://localhost:5000
Frontend: http://localhost:3000
