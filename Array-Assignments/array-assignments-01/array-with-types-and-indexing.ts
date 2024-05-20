// Step 1: Define the Employee type alias
type Employee = {
    name: string;
    hoursWorked: number;
    hourlyRate: number;
    salary: number;
};

// Step 2: Define an array of employees
const employees: Employee[] = [
    { name: "Haris", hoursWorked: 25, hourlyRate: 20, salary: 0 },
    { name: "Abuzar", hoursWorked: 15, hourlyRate: 15, salary: 0 },
    { name: "Adeel", hoursWorked: 30, hourlyRate: 25, salary: 0 }
];

// Step 3: Implement the calculateSalary function
function calculateSalary(employees: Employee[]): void {
    employees.forEach(employee => {
        // Calculate the base salary
        employee.salary = employee.hoursWorked * employee.hourlyRate;

        // Apply a 10% bonus if the employee has worked 20 hours or more
        if (employee.hoursWorked >= 20) {
            employee.salary *= 1.10;
            console.log("Bonus is given to employee who work 20 hours or more.");
            
        }
    });
}


// Calculate the salaries for all employees
calculateSalary(employees);

// Log the employees to see the updated salaries
employees.forEach(employees=>{
    console.log(`Employee: ${employees.name}, Salary: $${employees.salary.toFixed(2)}`);
});
