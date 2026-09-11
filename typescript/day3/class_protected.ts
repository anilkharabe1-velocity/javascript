class Employee {
    protected salary: number;
    name: string;
    private age: number;

    constructor(salary: number, name: string, age: number){
        this.salary = salary
        this.name = name;
        this.age = age;
    }

    showAgeSuper(): void{
        console.log(this.age)
    }
}

class Manager extends Employee{

    constructor(salary: number, name: string, age: number){
        super(salary, name, age)
    }

    showSalary():void{
        console.log(this.salary)
    }

    showAge(): void{
        super.showAgeSuper()
    }
}

const manager = new Manager(100000, "Shweta", 25)
manager.showSalary()
console.log(manager.name);
manager.showAge()
manager.showAgeSuper()