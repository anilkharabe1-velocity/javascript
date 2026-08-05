
let obj1 = {
    name: "Arjun",
    city: "Pune"
}

// let obj2 = obj1;
// using Object.assign method
let obj2 = Object.assign({}, obj1);
/// spread operator
let obj3 = {...obj1};

console.log("before update obj1:", obj1);
console.log("before update obj2:", obj2);
console.log("before update obj3:", obj3);

obj1.name = "Karn";

console.log("after update obj1:", obj1);
console.log("after update obj2:", obj2);
console.log("before update obj3:", obj3);





