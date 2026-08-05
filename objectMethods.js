const user = {
    name: "Sujata",
    address: {
        city: "Pune",
        state: "MH"
    }
}
// updating
Object.freeze(user)
user.name = "Suraj";
console.log("user", user)

console.log(Object.keys(user));
console.log(Object.values(user));
console.log(Object.entries(user));
console.log(Object.hasOwn(user, "name"))
console.log(user.name) // truly values

//target object
const obj1 = {
    a:1,
    b:10
}

// source object
const obj2 ={
    b:2,
    c:3
}

// shollow copy
const result = Object.assign(obj1, obj2);
console.log("result", result)