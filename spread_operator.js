// spread operator => expands an iterable (array/object) into individual elements
// unpack values

const arr1 = [1, 2, 3, 4];
console.log("arr", ...arr1)

// use cases : 1. convert array into shollow copy
const arr2 = [...arr1];  // shallow copy

console.log("arr2", arr2)

// use case 2: merge 2 arrays
const a = [1, 2, 3];
const b = [3, 4, 5];
const merged = [...a, ...b];
console.log("merged", merged);


// use case 3 : insert values
const numbers = [20, 30];
const updatedArray = [10, ...numbers, 40];
console.log("updatedArray", updatedArray)


