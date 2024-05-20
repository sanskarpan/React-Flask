# app/routes.py
from flask import Blueprint, jsonify, request
from .models import db, Employee

bp = Blueprint('api', __name__, url_prefix='/api')

# Route to get all employees
@bp.route('/employees', methods=['GET'])
def get_employees():
    employees = Employee.query.all()
    result = [{'id': employee.id, 'name': employee.name, 'position': employee.position, 'salary': employee.salary} for employee in employees]
    return jsonify(result)

# Route to add a new employee
@bp.route('/employees', methods=['POST'])
def add_employee():
    data = request.json
    name = data.get('name')
    position = data.get('position')
    salary = data.get('salary')
    new_employee = Employee(name=name, position=position, salary=salary)
    db.session.add(new_employee)
    db.session.commit()
    return jsonify({'message': 'Employee added successfully'})

# Route to update an existing employee
@bp.route('/employees/<int:id>', methods=['PUT'])
def update_employee(id):
    data = request.json
    employee = Employee.query.get_or_404(id)
    employee.name = data.get('name', employee.name)
    employee.position = data.get('position', employee.position)
    employee.salary = data.get('salary', employee.salary)
    db.session.commit()
    return jsonify({'message': 'Employee updated successfully'})

# Route to delete an employee
@bp.route('/employees/<int:id>', methods=['DELETE'])
def delete_employee(id):
    employee = Employee.query.get_or_404(id)
    db.session.delete(employee)
    db.session.commit()
    return jsonify({'message': 'Employee deleted successfully'})
