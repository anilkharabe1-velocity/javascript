const employees = [
  {
    id: 1,
    name: "Rahul",
    salary: 22000,
    isActive: true,
  },
  {
    id: 2,
    name: "Rohit",
    salary: 52000,
    isActive: true,
  },
  {
    id: 3,
    name: "Rohan",
    salary: 65000,
    isActive: false,
  },
  {
    id: 4,
    name: "ROhini",
    salary: 50000,
    isActive: true,
  },
  {
    id: 5,
    name: "Rana",
    salary: 30000,
    isActive: false,
  },
];

const activeEmp = employees.filter((emp) => {
  return emp.isActive;
});

console.log("activeEmp", activeEmp);
const salaries = activeEmp.map((emp) => {
  return emp.salary;
});

console.log("salaries", salaries);

const totalSalary = salaries.reduce((sum, salary) => {
  sum += salary;
  return sum;
}, 0);

console.log("totalSalary", totalSalary);

const combinedMethods = employees
  .filter((emp) => {
    return emp.isActive;
  })
  .map((emp) => {
    return emp.salary;
  })
  .reduce((sum, salary) => {
    return (sum += salary);
  }, 0);

console.log("combinedMethods", combinedMethods);
