const students = [
    {
        name:"Rahul",
        age:22,
        grade: 'A'
    },
    {
        name:"Amit",
        age:23,
        grade: 'B'
    },
    {
        name:"Jagdish",
        age:21,
        grade: "B",
    },
    {
        name:"Swati",
        age:22,
        grade: "C",
    }
];
// {"A":["Rahul"], B:[Amit, Jagdish], C:['Swati']]}

const grouped = students.reduce((acc, student)=>{
  if(acc[student.grade]){
     acc[student.grade].push(student.name)
  }else{
    acc[student.grade] = [student.name]
  }
  return acc
}, {})

console.log("grouped", grouped)