const arr = [76, 89, 88, 52, 33, 67, 34, 63, 92, 52, 33];
let num = 920;
let count = 0;

for(let i=0;i< arr.length; i++){
    if(num === arr[i]){
        count++
    }
}

console.log(`count for ${num} is ${count}`);