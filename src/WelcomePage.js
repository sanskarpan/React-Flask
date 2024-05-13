import React, { useState } from 'react';
import './styles.css';

const WelcomePage = () => {
  const [formData, setFormData] = useState({
    name: '',
    position: '',
    salary: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
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
      // Do something after adding the employee, e.g., show a success message
    })
    .catch(error => console.error('Error adding employee:', error));
  };

  return (
    <div className="container">
      <div className="form-container">
        <h1>Welcome to Admin Panel</h1>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Name:</label>
            <input type="text" name="name" value={formData.name} onChange={handleChange} />
          </div>
          <div className="form-group">
            <label>Position:</label>
            <input type="text" name="position" value={formData.position} onChange={handleChange} />
          </div>
          <div className="form-group">
            <label>Salary:</label>
            <input type="number" name="salary" value={formData.salary} onChange={handleChange} />
          </div>
          <button type="submit">Add Employee</button>
        </form>
      </div>
    </div>
  );
};

export default WelcomePage;
