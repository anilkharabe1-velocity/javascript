const person1 = {
    name: "Karn",
    age: 35,
    greet: function(city){
        console.log("this:", this)
        console.log(`Hello, I am ${this.name} and my age is ${this.age} and I am from ${city}`)
    }
}

const person2 = {
    name: "Arjun",
    age: 30
}

console.log(person1.name);
person1.greet("Delhi");

// function borrowing
// function sharing

//dos not call the function immediately
// instead it returns a function
// then call the function
const responseFunction = person1.greet.bind(person2, "Mumbai");
responseFunction();
responseFunction();
responseFunction();
responseFunction();

person1.greet.bind(person2, "Mumbai")()