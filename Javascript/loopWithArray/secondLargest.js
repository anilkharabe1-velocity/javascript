const arr = [76, 76, 88, 54, 23, 67, 14, 63, 92, 52, 33];


let largest = -Infinity;
let secondLargest = -Infinity;

for(let i=0; i <arr.length; i++){
    let currentValue = arr[i];

    if(currentValue > largest){
        secondLargest = largest;
        largest = currentValue;
    }else if(currentValue > secondLargest && currentValue != largest){
        secondLargest = currentValue;
    }
}

console.log("largest", largest);
console.log("second Largest", secondLargest);