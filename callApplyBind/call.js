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


person1.greet.call(person2, "Mumbai")