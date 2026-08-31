const person1 = {
    name: "Karn",
    age: 35,
    greet: function(city, country){
        console.log("this:", this)
        console.log(`Hello, I am ${this.name} and my age is ${this.age} and I am from ${city}, ${country}`)
    }
}

const person2 = {
    name: "Arjun",
    age: 30
}

console.log(person1.name);
person1.greet("Delhi", "India");

// function borrowing
// function sharing

person1.greet.apply(person2, ["Mumbai", "India"])