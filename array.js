// normal variable storing
// let student1 = "Amar";
// let student2 = "Shubham";
// let student3 = "Shweta";
// let student4 = "Shubhangi";
// let student5 = "Madhu";

// 100
// array

let studentList = ['Amar', 'Shubham', 'Shweta', 'Shubhangi', 'Madhu'];
console.log("studentList:", studentList);

console.log('length:', studentList.length);

console.log(studentList[0]);
console.log(studentList[2]);
console.log(studentList[studentList.length - 1] ) // last index

// new admission in class
// push
studentList.push('Priyanka');

// unshift
studentList.unshift("Rohit");
console.log("studentList", studentList);

// delete adminssion from class
studentList.pop();
console.log("studentList with pop", studentList);

studentList.shift();
console.log("studentList with shift", studentList);


// typeof studentList
console.log('type of StudentList', typeof studentList);
const studentObj = {};
console.log('type of studentObj', typeof studentObj)

// isArray

let isArray = Array.isArray(studentList);
console.log("isArray: 1 ", isArray);
isArray = Array.isArray(studentObj);
console.log("isArray: 2 ", isArray);