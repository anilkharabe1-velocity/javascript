class User{
    // name, age
    name: string;
    age: number;

    constructor(_name: string, _age: number){
        this.name = _name,
        this.age = _age
    }

    greet():void{
        console.log("hello", this.name)
    }
}

// public, private, protected

let user = new User("Puja", 20);
user.greet()
console.log(user.name)
