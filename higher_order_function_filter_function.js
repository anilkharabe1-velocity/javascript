let arr = [10, 20, 30, 40, 50];

let result = arr.filter((currentElement) => {
  return currentElement > 25;
});

console.log("result", result);

// example 2

let arr2 = [10, 0, -23, 90, -67, 98, -23];

let positiveNumbers = arr2.filter((currentElement)=>{
    return currentElement > 0;
})
console.log("positiveNumbers", positiveNumbers)


let name 