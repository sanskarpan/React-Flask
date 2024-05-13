
import React, { useState, useEffect } from 'react';
import WelcomePage from './WelcomePage';
import ListingPage from './ListingPage';
import './styles.css';

function App() {
  const [employees, setEmployees] = useState([]);

  useEffect(() => {
    fetch('/api/employees')
      .then(response => response.json())
      .then(data => setEmployees(data))
      .catch(error => console.error('Error fetching employees:', error));
  }, []);

  const handleAddEmployee = (formData) => {
    // Add new employee to the backend
    fetch('/api/employees', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    })
    .then(response => response.json())
    .then(data => {
      console.log(data);
      // Refresh employee data after adding a new employee
      fetch('/api/employees')
        .then(response => response.json())
        .then(data => setEmployees(data))
        .catch(error => console.error('Error fetching employees:', error));
    })
    .catch(error => console.error('Error adding employee:', error));
  };

  return (
    <div className="App">
      <WelcomePage onSubmit={handleAddEmployee} />
      <ListingPage employees={employees} />
    </div>
  );
}

export default App;
