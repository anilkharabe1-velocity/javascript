let arr = [28, 36, 89, 12, 67, 32, 21, 97, 65, 23];
for(let i=0; i< arr.length; i++){
    let currentElement = arr[i];
    if(currentElement % 2 === 0){
        continue;
    }
    console.log(currentElement);
}