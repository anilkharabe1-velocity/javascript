// largest number from array;
const arr = [-76, -89, -88, -54, -23, -67, -14, -63, -92, -52, -33];
            //0,  1,  2,  3,  4,  5,  6,  7,  8,  9,  10

let largest = -Infinity;

for (let i = 0; i < arr.length; i++) {
  if (arr[i] > largest) {
    largest = arr[i];
  }
}


console.log("largest", largest);
