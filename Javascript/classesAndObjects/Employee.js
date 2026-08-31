class Employee{

    static count = 0;
    
    constructor(name, salary){
        this.name = name;
        this.salary = salary;
        Employee.count++;
    }

    work(){
        console.log(`${this.name} is working`)
    }

    getBonus(){
        return this.salary * 0.10
    }

    getDetails(){
        console.log(`Name: ${this.name}`)
        console.log(`Salary: ${this.salary}`)
    }
}

class Developer extends Employee{
    constructor(name, salary, language){
        super(name, salary);
        this.language = language;
    }

    work(){
        super.work();
        console.log(`${this.name} is developing using ${this.language}`)
    }

    getBonus(){
        return this.salary * 0.20;
    }

}

class MERNDeveloper extends Developer{
    constructor(name, salary, language){
        super(name, salary, language);
    }

    getBonus(){
        return this.salary * 0.40;
    }
}

class Manager extends Employee{
    constructor(name, salary, teamSize){
        super(name, salary);
        this.teamSize = teamSize;
    }

    work(){
        super.work();
        console.log(`${this.name} is managing ${this.teamSize} employees`)
    }

    getBonus(){
        return this.salary * 0.3
    }
}

console.log("------------------Developer---------------------------");
let developer = new Developer("Rahul", 50000, "Frontend");
developer.work()
let bonus =  developer.getBonus();
console.log("bonus", bonus)


console.log("--------------------MERN Developer-------------------------");

let mernDeveloper = new MERNDeveloper("Amol", 100000, "MERN Stack");
mernDeveloper.getDetails();
mernDeveloper.work();

let bonusForMern =  mernDeveloper.getBonus();
console.log("bonusForMern", bonusForMern)

console.log("--------------------Manager-------------------------");

let manager = new Manager("Ajit", 200000, 50);
let managerBonus =  manager.getBonus();
console.log("managerBonus:", managerBonus);

manager.work();

console.log("Employee.count", Employee.count)




