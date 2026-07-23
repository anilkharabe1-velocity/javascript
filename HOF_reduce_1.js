let numbers =[10,20,30,40,50];

let sum = 0;

for (let i = 0; i < numbers.length; i++) {
    const element = numbers[i];
    sum = sum + element;
}

console.log(sum);

// sum => accumulator
let sum2 = numbers.reduce((sum, element)=>{
    console.log("sum", sum)
    return sum = sum + element;
}, 0);

console.log('sum2', sum2)


let max = -Infinity;

for (let i = 0; i < numbers.length; i++) {
    const element = numbers[i];
    if(element > max){
        max = element
    }
}

console.log('max', max)

let max2 = numbers.reduce((max, element)=>{
    if(element > max){
        max = element;
    }
    return max;
}, -Infinity);
console.log("max2", max2);


