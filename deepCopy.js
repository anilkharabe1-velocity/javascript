
let obj1 = {
    name: "Arjun",
    city: "Pune",
    contact:{
        email:"arjun@gmail.com"
    }
}

// let obj2 = obj1;
// using using JSON.parse(JSON.stringify(obj))
let obj2 = JSON.parse(JSON.stringify(obj1))
/// using structuredClone function
let obj3 = structuredClone(obj1)

console.log("before update obj1:", obj1);
console.log("before update obj2:", obj2);
console.log("before update obj3:", obj3);

obj1.name = "Karn";
obj1.contact.email = "karn@gmail.com"

console.log("after update obj1:", obj1);
console.log("after update obj2:", obj2);
console.log("before update obj3:", obj3);





