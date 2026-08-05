let arr = [2, 4, 6, 7];

//  if each element satisfy the condition
// condition = > if this array contains any even numbers
// satify => true / false

let result = arr.every((element)=>{
    return element % 2 === 0
});

console.log("result", result)