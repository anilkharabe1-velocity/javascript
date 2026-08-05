const students = [
    {
        id:1,
        name:"Rahul",
        age:22,
        grade: 'A'
    },
    {
        id:2,
        name:"Amit",
        age:23,
        grade: 'B'
    },
    {
        id:3,
        name:"Jagdish",
        age:21,
        grade: "B",
    },
    {
        id:4,
        name:"Swati",
        age:22,
        grade: "C",
    }
];

const userObj = students.reduce((acc, student)=>{
    acc[student.id] = student.name;
    return acc;
}, {})

console.log("userObj", userObj)

let newObj = {
    1:"Rahul",
    2:"Amit",
    3:'Jagdish'
}
