let numbers = [1, 2, 3, 3, 4, 5, 1, 3, 6, 3, 1];

let unique = [];

for (let i = 0; i < numbers.length; i++) {
  if (!unique.includes(numbers[i])) {
    unique.push(numbers[i]);
  }
}
console.log("unique", unique);

let unique2 = numbers.reduce((uniqueArr, currentElement)=>{
    if(!uniqueArr.includes(currentElement)){
        uniqueArr.push(currentElement)
    }
    return uniqueArr;
}, []);

console.log('unique2', unique2)

