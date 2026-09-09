"use strict";
function add(a, b) {
    return a + b;
}
function greetMe(name, age = 20) {
    console.log("good morning ", name);
    console.log("my age is :", age);
}
greetMe("Mayur", 30);
console.log(add(10, 20));
const substract = (a, b) => {
    return a - b;
};
console.log(substract(20, 10));
