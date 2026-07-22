let arr = [11, 25, 30, 40, 50];

// reutrn FIRST matching element

let result =  arr.find((num)=>{
    return num % 2 == 0;
});

console.log(result)