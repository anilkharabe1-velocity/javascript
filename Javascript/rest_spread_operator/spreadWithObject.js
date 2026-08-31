// merge object
const obj1 = { name: "Ram", city: "Nashik" }
const obj2 = { city: "Ayodhya", name:"Laxman" }
const merged = { ...obj1, ...obj2 };
console.log("merged", merged);