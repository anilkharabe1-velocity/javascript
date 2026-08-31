// extended class
class User{
    constructor(_userName, _age, _email){
        this.userName = _userName;
        this.age = _age;
        this.email = _email
    }

    login(){
        console.log(`${this.userName} is logged in,  from User Class`);
    }
}

// derived class
class Employee extends User{

    constructor(name, age, mail, _salary){
        super(name, age, mail)
        this.salary = _salary;
    }

    work(){
        console.log(`${this.userName} is working`);
        super.login();
    }

    // function overloading
    login(){
        console.log(`${this.userName} is logged in and his email is ${this.email}`);
    }

}

let employee1 = new Employee("Karn", 34, "karn@gmail.com", 100000);

employee1.work();
// employee1.login();


// console.log("Employee 1:", employee1)

