const arr = [76, 89, 88, 54, 33, 67, 14, 63, 92, 52, 33];

console.log(arr.indexOf(33)); 
console.log(arr.lastIndexOf(33)); 


let num = 33;
let index = -1;

for(let i=0; i<arr.length; i++){
    if(arr[i] === num){
        index = i;
        break;
    }
}
console.log("indexOf", index)

// lastIndexOf
let lastIndexOf = -1;

for(let i=arr.length-1; i>=0; i--){
    if(arr[i] === num){
        lastIndexOf = i;
        break;
    }
}
console.log("lastIndexOf", lastIndexOf)

