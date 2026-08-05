let name = "Rahul";
let address = "Pune";
let age = 25;

let student = {
    name: "Rahul",
    address: "Pune",
    age: 25
}

console.log(student)
console.log(student.address)
console.log(student["address"])


student.age = 30;
console.log(student)

delete student.address
console.log("after delete address", student)
