interface Person {
    name: string
}

type EmployeeType = {
    id: number,
    title: string
}

type Employee = Person & EmployeeType;

const employee1 : Employee = {
    name: "Mohit Sharma",
    id: 1213,
    title: "Developer"
}


console.log("employee1:", employee1);
