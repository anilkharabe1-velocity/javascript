const number = [[1, 2], [3, 4], [5, 6]];
// expected arr = [];

const newArr = number.reduce((arr, currentArr)=>{
    return arr.concat(currentArr)
}, []);

console.log("newArr", newArr)