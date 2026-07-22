// problem statement

let arr = [75, 24, 89, 76, 23, 12, 34];

// convert => transform
// find the square

let result = [];


for(let i=0; i< arr.length; i++){
    result.push(arr[i] ** 2)
}

console.log(result)

////  using inbuild map method
// mostly used with array

// example 1 for converting number into cube
let resultUsingMap;

resultUsingMap =  arr.map((currentElement)=>{
    return currentElement ** 3;
})

console.log(resultUsingMap);

// example 2 names => convert into upper case

let studentList = ["Gauri", "Saee", "Arnav", "Ram", "Karn"];

let toUppercaseNames;

toUppercaseNames = studentList.map((currentName, currentIndex)=>{
    console.log(currentIndex);
    return currentName.toUpperCase();
});

console.log('toUppercaseNames', toUppercaseNames)



