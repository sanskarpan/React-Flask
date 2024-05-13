import React, { useState, useEffect } from 'react';
import './styles.css';

const ListingPage = () => {
  const [employees, setEmployees] = useState([]);

  useEffect(() => {
    fetch('/api/employees')
      .then(response => response.json())
      .then(data => setEmployees(data))
      .catch(error => console.error('Error fetching employees:', error));
  }, []);

  return (
    <div className="container">
      <div className="list-container">
        <h1>Employee Listing</h1>
        <ul>
          {employees.map(employee => (
            <li key={employee.id}>
              {employee.name} - {employee.position} - {employee.salary}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ListingPage;
