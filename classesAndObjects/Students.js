// blueprint

class Students {
    // constructor => it will get called automatically once the object is created
    constructor(_name, _age, _city){
        this.name = _name;
        this.age = _age;
        this.city = _city;
    }

    showObject(){
        console.log("this:", this)  // represents object itself
    }

    greet(){
        console.log("hello there, ", this.name)   
    }

    getDetails(){
        console.log("age:", this.age);
        console.log("name:", this.name);
        console.log("city:",this.city)
    }

    static getCollageName(){
        return "Sinhgad Institute"
    }
}


const student1 = new Students("Ram", 20, "Ayodhya");

const student2 = new Students("Laxman", 18, "Ayodhya");

// console.log("student1", student1)

// student1.showObject();
// student1.getDetails()

let res =  Students.getCollageName()
console.log("res", res)
