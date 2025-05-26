const employees = [
    { id: 1, name: 'John Doe', age: 30, department: 'IT', salary: 50000, specialization: 'JavaScript'},
    { id: 2, name: 'Alice Smith', age: 28, department: 'HR', salary: 45000, specialization: 'Python'},
    { id: 3, name: 'Bob Johnson', age: 35, department: 'Finance', salary: 60000, specialization: 'Java'},
    //... More employee records can be added here
  ];

// Function to display all employees
function displayEmployees() {
    const totalEmployees = employees.map((employee, index) => `<p>${employee.id}: ${employee.name}: ${employee.name} - ${employee.department} - $${employee.salary} - ${employee.specialization}</p>`).join('');
    document.getElementById('employeesDetails').innerHTML = totalEmployees;
}

//function to calculate employees' total salaries
function calculateTotalSalaries() {
    const totalSalaries = employees.reduce((acc, employee) => acc + employee.salary, 0);
    alert(`Total Salaries: $${totalSalaries}`);
}

//function to display employees details based on department such as the HR department
function displayHREmployees() {
    const hrEmployees = employees.filter(employee => employee.department === 'HR');
    const hrEmployeesDisplay = hrEmployees.map((employee, index) => `<p>${employee.id}: ${employee.name}: ${employee.name} - ${employee.department} - $${employee.salary} - ${employee.specialization}</p>`).join('');
    document.getElementById('employeesDetails').innerHTML = hrEmployeesDisplay;
}

//function to display employees' details based on ID
function findEmployeeById(employeeId) {
    const foundEmployee = employees.find(employee => employee.id === employeeId);
    if (foundEmployee) {
        document.getElementById('employeesDetails').innerHTML =`<p>${foundEmployee.id}: ${foundEmployee.name}: ${foundEmployee.name} - ${foundEmployee.department} - $${foundEmployee.salary}</p>`;
    }
    else {
        document.getElementById('employeesDetails').innerHTML = 'no employee has been found with this ID';
    }
}

//function to display the details of employees who have specialization in JavaScript
function findEmployeeBySpecialization(specialization) {
    const foundSpecialization = employees.find(employee => employee.specialization === specialization);
    if (foundSpecialization){
        document.getElementById('employeesDetails').innerHTML = `<p>${foundSpecialization.id}: ${foundSpecialization.name}: ${foundSpecialization.name} - ${foundSpecialization.department} - $${foundSpecialization.salary} - ${foundSpecialization.specialization}</p>`;
    }
    else {
        document.getElementById('employeeDetails').innerHTML = 'Np employee has been found with this Specialization!';
    }
}
