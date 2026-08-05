let number = [20, 30, 40, 50, 60, 10, 14, 87];
let sum = 0;
for(let i=0; i < number.length; i++){
    let currentElement = number[i];
    console.log("currentElement", currentElement)
    sum = sum + currentElement;
    // console.log("sum", sum)
}
console.log("sum", sum)