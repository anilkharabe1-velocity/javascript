const arr = [10, 20, 30, 40, 50, 60, 70, 80, 90, 10];
let str = "Good morning everyone. Lets discuss about Javascript";

console.log("arr:", arr);
console.log("str:", str);

// length
console.log("arr.length", arr.length);
console.log("str.length", str.length);

// slice
let sliceForArr = arr.slice(2, 6);
let sliceForStr = str.slice(2, 10);
console.log("sliceForArr", sliceForArr);
console.log('sliceForStr', sliceForStr)

//includes 
let includesForArr = arr.includes(70);
console.log("includesForArr", includesForArr)

let includesForStr = str.toLowerCase().includes('LetS'.toLowerCase());
console.log("includesForStr", includesForStr);

// indexOf
let indexOfForArr = arr.indexOf(70);
console.log("indexOfForArr", indexOfForArr)

let indexOfForStr = str.indexOf('LetS');
console.log("indexOfForStr", indexOfForStr);

// lastIndexOf
let lastIndexOfForArr = arr.lastIndexOf(70);
console.log("lastIndexOfForArr", indexOfForArr)

let lastIndexOfForStr = str.lastIndexOf('Lets');
console.log("lastIndexOfForArr", lastIndexOfForStr);

// concat
let arr2 = [100, 200, 300];
let newArr = arr.concat(arr2);
console.log("newArr", newArr);
console.log("arr", arr); // no changes

let newStr = str.concat(" from today");
console.log("newStr", newStr);
console.log("str", str)

