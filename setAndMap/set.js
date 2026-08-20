let arr = [1, 2, 3, 4, 5, 6];
arr.push(7)
console.log(arr.includes(70));
arr.splice(1, 1);
console.log("arr:", arr);


// array => collection of values
// set => collection of unique values

let setCollection = new Set([1, 2, 3, 4, 5, 6, 4, 3, 1]);
//add
setCollection.add(10)
console.log("setCollection:", setCollection);

// check if we have 7 in set
// has()

console.log(setCollection.has(10));
console.log(setCollection.has(70));

// delete
setCollection.delete(6);
// console.log("setCollection:", setCollection);

