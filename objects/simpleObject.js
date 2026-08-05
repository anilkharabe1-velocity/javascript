let name = "Rahul";
let address = "Pune";
let av1 = 25;

let student = {
    name: "Rahul",
    address: "Pune",
    age: 25,
    completeAddress:{
        "mainStreet":'Lane 3',
        area:"Karve Nagar",
        "*&^&^%^": '411012'
    },
    otherInfo: null
}

console.log(student.completeAddress["*&^&^%^"]);

student.otherInfo = "Athletic";

console.log(student);

console.log(student.father_name);

student.father_name = "Ram"

student.age = 27;

delete student.address;

console.log(student);

console.log("otherInfo" in student);
console.log(student.hasOwnProperty("Age"))


const students = [
    {
        name:"Rahul",
        age:22
    },
    {
        name:"Amit",
        age:23
    },
    {
        name:"Jagdish",
        age:21
    }
];
console.log(students[students.length-1].name)

for(let i=0; i<students.length; i++){
    console.log(students[i].name)
}


// map
const newList = students.map((current)=>{
    current.name = current.name.toUpperCase()
    return current
});

console.log("newList",newList )
