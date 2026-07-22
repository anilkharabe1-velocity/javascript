let arr = [2, 4, 6, 7];

//  if any element satisfy the condition
// condition = > if this array contains any odd numbers
// satify => true / false

let result = arr.some((num)=>{
    return num % 2 === 1;  //odd number condition 
});

console.log("result", result)
