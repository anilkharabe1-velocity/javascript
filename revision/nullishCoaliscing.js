// null / undefined
// falsy values => 0, false, undefined, null, "", -0, NaN

let userName = undefined;
let result = userName || "Guest";
console.log("result using OR", result); // Guest

let userName2 = "";
let result2 = userName2 || "Guest";
console.log("result2", result2) // false


let age = false;
let defaultAge = age ?? 6;
console.log("defaultAge", defaultAge)

const user = {
    name:"Mayur",
    mobile:null
}

const phone = user.mobile ?? "Phone is not available"
console.log("phone", phone)